import { logOut } from "../Lib/firestore";

export default function PrincipalNav({
  navContainer,
  classLogo,
  imagen1,
  classTitle,
  classSignOut,
  imagen2,
}) {
  return (
    <section className={navContainer}>
      <img
        className={classLogo}
        src={require(`../Resourses/${imagen1}.png`)}
        alt="LogoNotes"
      />
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
