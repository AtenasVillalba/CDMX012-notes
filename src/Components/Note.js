import {
  onSnapshot,
  collection,
  query,
  orderBy,
  limit,
  getAuth,
} from "../Lib/Firebase-imports";
import { useEffect, useState } from "react";
import { db, deleteNote } from "../Lib/firestore";
import { ModalContainer } from "./ModalContainer";
import "./Note.css";

export default function Note() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const colletionNotes = collection(db, "notes");
    const q = query(colletionNotes, orderBy("date"), limit(20));
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
    <section className="note-content">
      {notes.map((note) => (
        <section className="one-note-content" key={note.id}>
          <section className="header-content">
            <h1 className="date-note">{getDate(note.date)}</h1>
            <img
              className="delete-image"
              src={require("../Resourses/borrar.png")}
              alt="delete-note"
              onClick={() => deleteNote(note.id)}
            />
          </section>
          <section className="title-note-content">
            <h1>
              {note.title.length >= 17
                ? note.title.substr(0, 13) + "..."
                : note.title}
            </h1>
            <p>
              {note.note.length >= 17
                ? note.note.substr(0, 11) + "..."
                : note.note}
            </p>
          </section>
          <section className="edit-note-content">
            <img
              className="edit-image"
              src={require("../Resourses/editar.png")}
              alt="edit-note"
            />
            <button className="edit-button">Ver nota</button>
          </section>
        </section>
      ))}
    </section>
  );
}

function getDate(date) {
  return new Date(
    date.seconds * 1000 + date.nanoseconds / 1000000
  ).toDateString();
}

const updateNoteSection = (email) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user.email == email) {
    return true;
  } else {
    return false;
  }
};

// const modal=()=>{
//   <ModalContainer
//   id={note.id} ></ModalContainer>
// }
