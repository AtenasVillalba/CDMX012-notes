import { db } from "../Lib/firestore";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, doc, updateDoc } from "../Lib/Firebase-imports";

export default function EditNote(props) {

  const { classContainer, inputTitle, inputText, classAdd } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  //REcaba los datos del input title
  const [titleNote, setTitleNote] = useState("");

  //Recaba los datos del input description
  const [descriptionNote, setDescriptionNote] = useState("");

  const update = async (e) => {
    e.preventDefault();
    console.log("hola");
    const noteRef = doc(db, "notes", id);
    const data = { title: titleNote, note: descriptionNote, date: new Date()};
    console.log(data);
    await updateDoc(noteRef, data);
    navigate("/");
  };

  const getNoteById = async (id) => {
    console.log("hfvdfv");
    const noteRef = await getDoc(doc(db, "notes", id));
    if (noteRef.exists()) {
      console.log(noteRef.data());
      setTitleNote(noteRef.data().title);
      setDescriptionNote(noteRef.data().note);
    } else {
      console.log("La nota no existe");
    }
  };

  useEffect(() => {
    getNoteById(id);
    // eslint-disable-next-line
  }, []);

  return (
    <form className={classContainer} onSubmit={update}>
      <input
        type="text"
        placeholder="Escribe el titulo de tu nota"
        className={inputTitle}
        value={titleNote}
        onChange={(e) => setTitleNote(e.target.value)}
        id="title-note"
        autoComplete="off"
        // useRef={titleInput}
      ></input>
      <textarea
        type="text"
        placeholder="Empiece a esribir..."
        className={inputText}
        id="note-content"
        value={descriptionNote}
        onChange={(e) => setDescriptionNote(e.target.value)}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        autoComplete="off" // evitar evento con enter
      ></textarea>
      <button className={classAdd} type="submit">
        <img className={classAdd} src={require("../Resourses/confirm.png")} />
      </button>
    </form>
  );
}
