import { logOut } from "../Lib/firestore";
import { Link } from "react-router-dom";

export default function PrincipalNav({
  navContainer,
  classLogo,
  imagen1,
  classTitle,
  classSignOut,
  imagen2,
  link1,
}) {
  return (
    <section className={navContainer}>
      <Link to={link1}>
      <img
        className={classLogo}
        src={require(`../Resourses/${imagen1}.png`)}
        alt="LogoNotes"
      />
      </Link>
      <img
        className={classTitle}
        src={require("../Resourses/Title.png")}
        alt="Title"
      />
      <img
        className={classSignOut}
        src={require(`../Resourses/${imagen2}.png`)}
        alt="Logo"
        onClick={logOut}
      />
    </section>
  );
}
