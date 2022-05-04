// import { addNote } from "../Lib/firestore";
// import { Link } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  collection,
  addDoc,
  getFirestore,
} from "../Lib/Firebase-imports";
import { app } from "../Lib/firebase";
import { useNavigate } from "react-router-dom";

export default function NewNote({
  classContainer,
  inputTitle,
  inputText,
  classAdd,
  imagen1,
}) {
  //REcaba los datos del input title
  const [titleNote, setTitleNote] = useState("");

  const titleInputChangeHandler = (e) => {
    setTitleNote(e.target.value);
  };

  //Recaba los datos del input description
  const [descriptionNote, setDescriptionNote] = useState("");

  const descriptionInputChangeHandler = (e) => {
    setDescriptionNote(e.target.value);
  };
  //recupersa los datos al presionar el boton de envio
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(titleNote);
    console.log(descriptionNote);
  };

  const navigate = useNavigate();
  
  let addNote = async (e) => {
    e.preventDefault();
    const db = getFirestore(app);

    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;

      await addDoc(collection(db, "notes"), {
        title: titleNote,
        note: descriptionNote,
        date: new Date(),
        uid,
      });
      navigate("/notes");
    } else {
      // No user is signed in.
    }
  };

  return (
    <form className={classContainer} onSubmit={formSubmissionHandler}>
      <input
        type="text"
        placeholder="Escribe el titulo de tu nota"
        className={inputTitle}
        onChange={titleInputChangeHandler}
        id="title-note"
        // useRef={titleInput}
      ></input>
      <input
        type="text"
        placeholder="Empiece a esribir..."
        className={inputText}
        id="note-content"
        onChange={descriptionInputChangeHandler}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      ></input>
      {/* <Link to="/notes"> */}
      {/* <img
          className={classAdd}
          src={require(`../Resourses/${imagen1}.png`)}
          alt="Crear-Nota"
          onClick={saveNote}
        /> */}
      <button
        // type="submit"
        className={classAdd}
        onClick={addNote}
      ></button>{" "}
      {/* </Link> */}
    </form>
  );
}
