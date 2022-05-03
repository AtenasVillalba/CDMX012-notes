import { Link } from "react-router-dom";

export default function ImageAddNote({ classAddNote }) {
  return (
    <section>
      <Link to="/new">
        <img
          className={classAddNote}
          src={require("../Resourses/nueva-nota.png")}
          alt="new-note"
        />
      </Link>
    </section>
  );
}
