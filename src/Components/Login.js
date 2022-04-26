
import { singInWithGoogle } from "../Firebase/firebase";

export default function Login(props) {
  return (
    <section className={props.classContainer}>
      <img
        className= {props.classLogo}
        src={require("../Resourses/logo.png")}
        alt="Logo"
      />
      <h1 className={props.classH1}>Iniciar sesión con:</h1>

      <img
        className={props.classLogoGoogle}
        src={require("../Resourses/google.png")}
        alt="Logo"
        onClick={singInWithGoogle}
      />
    </section>
  );
}
