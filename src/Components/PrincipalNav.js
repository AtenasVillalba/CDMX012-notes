import { logOut } from "../Lib/firestore";

export default function PrincipalNav({
  navContainer,
  classLogo,
  classTitle,
  classSignOut,
}) {
  return (
    <section className={navContainer}>
      <img
        className={classLogo}
        src={require("../Resourses/logo.png")}
        alt="LogoNotes"
      />
      <img
        className={classTitle}
        src={require("../Resourses/Title.png")}
        alt="Title"
      />
      <img
        className={classSignOut}
        src={require("../Resourses/cerrar-sesion.png")}
        alt="Logo"
        onClick={logOut}
      />
    </section>
  );
}
