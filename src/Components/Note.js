import { deleteNote } from "../Lib/firestore";
import "./Note.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
// import withReactContent from "sweetalert2-react-content";
// const MySwal = withReactContent(Swal);

export default function Note(props) {
  const { note, title, date, id, name } = props;

  if (title && note) {
    return (
      <section className="one-note-content" key={id}>
        <section className="header-content">
          <h1 className="date-note">{getDate(date)}</h1>

          <nav className="navegacion">
            <ul class="menu">
              <li>

                  <img
                    className="menu-image"
                    src={require("../Resourses/menu.png")}
                    alt="delete-note"
                  />
                
                <ul className="submenu">
                  <Link to={`/edit/${id}`} className="link-edit">
                    <li>Editar</li>
                  </Link>
                  <li onClick={() => confirmDelete(id, name)}>Borrar</li>
                </ul>
              </li>
            </ul>
          </nav>
        </section>
        <section className="title-note-content">
          <h1 className="text-value">{title}</h1>
          <p className="text-value">{note}</p>
          {/* <h1>{title.length >= 17 ? title.substr(0, 13) + "..." : title}</h1>
          <p>{note.length >= 30 ? note.substr(0, 60) + "..." : note}</p> */}
        </section>
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

const confirmDelete = (id, name) => {
  Swal.fire({
    title: `Hola ${name}, ¿Desea eliminar esta nota?`,
    text: "Al dar click en el boton confirmar no podra revertir la acción.",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      //llamamos a la fcion para eliminar
      deleteNote(id);
    }
  });
};
