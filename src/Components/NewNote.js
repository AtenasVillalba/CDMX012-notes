import { addResource } from "../Lib/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewNote(props) {
  const { classContainer, inputTitle, inputText, classAdd } = props;
  const navigate = useNavigate();

  //REcaba los datos del input title
  const [titleNote, setTitleNote] = useState("");

  //Recaba los datos del input description
  const [descriptionNote, setDescriptionNote] = useState("");

  const titleInputChangeHandler = (e) => {
    setTitleNote(e.target.value);
  };

  const descriptionInputChangeHandler = (e) => {
    setDescriptionNote(e.target.value);
  };

  //recupersa los datos al presionar el boton de envio
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(titleNote);
    console.log(descriptionNote);
  };

  //funcion que crea coleccion.
  const addNote = async (e) => {
    e.preventDefault();
    const note = {
      title: titleNote,
      note: descriptionNote,
      date: new Date(),
    };

    const addedResource = await addResource("notes", note);
    if (addedResource) {
      navigate("/notes");
    } else {
      console.log("There has been an error creating the note");
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
        }} // evitar evento con enter
      ></input>
      <button className={classAdd}>
        <img
          className={classAdd}
          src={require("../Resourses/confirm.png")}
          onClick={addNote}
        />
      </button>
    </form>
  );
}
