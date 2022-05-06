import { deleteNote } from "../Lib/firestore";
import "./Note.css";
import ModalContainer from "./ModalContainer";

export default function Note(props) {
  const {  note, title, date, id } = props;

  const showOptions = (idNote) => {
    <ModalContainer note={idNote}></ModalContainer>;
  };

  if (title && note) {
    return (
      <section className="one-note-content" key={id}>
        <section className="header-content">
          <h1 className="date-note">{getDate(date)}</h1>
          <img
            className="delete-image"
            src={require("../Resourses/menu.png")}
            alt="delete-note"
            onClick={() => deleteNote(id)}
          />
        </section>
        <section className="title-note-content">
          <h1>{title.length >= 17 ? title.substr(0, 13) + "..." : title}</h1>
          <p>{note.length >= 17 ? note.substr(0, 11) + "..." : note}</p>
        </section>
        {/* <section className="edit-note-content">
          <img
            className="edit-image"
            src={require("../Resourses/editar.png")}
            alt="edit-note"
          />
          <button className="edit-button">Ver nota</button>
        </section> */}
      </section>
    );
  } else {
    console.log("nota vacia");
  }
}

const getDate = (date) => {
  return new Date(
    date.seconds * 1000 + date.nanoseconds / 1000000
  ).toDateString();
};

// const updateNoteSection = (email) => {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   if (user.email == email) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const modal=()=>{
//   <ModalContainer
//   id={note.id} ></ModalContainer>
// }
