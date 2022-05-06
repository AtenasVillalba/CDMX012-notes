import {
  onSnapshot,
  collection,
  query,
  orderBy,
  limit,
  where,
} from "../Lib/Firebase-imports";
import { useEffect, useState } from "react";
import { db } from "../Lib/firestore";
import { auth } from "../Lib/firebase";
import Note from "./Note";

export default function NotesContainer({ classContainer }) {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const colletionNotes = collection(db, "notes");
    const q = query(
      colletionNotes,
      orderBy("date"),
      limit(20),
      where("email", "==", auth.currentUser.email)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((note) => {
        docs.push({ ...note.data(), id: note.id });
      });
      setNotes(docs);
    });
  };

  useEffect(() => {
    console.log("datos prueba");
    getNotes();
  }, []);

  return (
    <section className={classContainer}>
      {notes.map((note) => (
        <Note
          // key={note.id}
          note={note.note}
          title={note.title}
          date={note.date}
          id={note.id}
        ></Note>
      ))}
    </section>
  );
}
