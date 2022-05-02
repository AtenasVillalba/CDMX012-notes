import CreateNotesView from "../Routes/CreateNotesView";

export default function ImageAddNote({ classAddNote }) {
  return (
    <section>
      <img
        className={classAddNote}
        src={require("../Resourses/nueva-nota.png")}
        alt="Logo Githup"
        onClick={CreateNotesView}
      />
    </section>
  );
}
