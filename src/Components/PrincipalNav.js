import { logOut } from "../Lib/firestore";
import { Link } from "react-router-dom";

export default function PrincipalNav(props) {
  const {
    navContainer,
    classLogo,
    imagen1,
    classTitle,
    classSignOut,
    imagen2,
    link1,
  } = props;

  return (
    <section className={navContainer}>
      <Link to={link1}>
        <img
          className={classLogo}
          src={require(`../Resourses/${imagen1}.png`)}
          alt="LogoNotes"
        />
      </Link>
      <h1 className={classTitle}>{"<Toma nota>"}</h1>
      <img
        className={classSignOut}
        src={require(`../Resourses/${imagen2}.png`)}
        alt="Logo"
        onClick={logOut}
      />
    </section>
  );
}
