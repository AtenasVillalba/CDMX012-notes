import { onSnapshot, collection,query, orderBy, limit} from "../Lib/Firebase-imports"
import { useEffect, useState } from "react";
import { db } from "../Lib/firestore";
import "./Note.css";

export default function Note() {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const colletionNotes = collection(db, "notes");
    const q = query(colletionNotes, orderBy("date"), limit(20));
    const unsubscribe =  onSnapshot(q,(querySnapshot)=>{
      const docs = [];
      querySnapshot.forEach((note) => {
        docs.push ({...note.data(), id:note.id})
        
      });
     setNotes(docs)
    })
  };

  useEffect(()=>{
console.log("datos prueba");
getNotes()
  }, [])

 

  return (
    <section className="note-content">
      {notes.map(note =>(
        <section className="one-note-content"> 
          <section className="header-content">
            <h1 className="date-note">{getDate(note.date)}</h1>
            <img
            className="delete-image"
            src={require("../Resourses/borrar.png")}
            alt= "delete-note"
            />
          </section>
         <section className="title-note-content">
           <h1>{note.title}</h1>
           <p>{note.note}</p>
         </section>
         <section className="edit-note-content">
           <img className="edit-image"
           src={require("../Resourses/editar.png")}
           alt="edit-note
           "/>
           <button className="edit-button">{"<Edita tu nota>"}</button>
           
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