import { handleOnClick, auth } from "../Lib/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { userExist } from "../Lib/firestore";

export default function Login(props) {
  const navigate = useNavigate();

  //hook que se utiliza cada vez que se actualiza o renderiza la pag./Componente
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log(user.displayName);
        const isRegistered = userExist(user.uid);
        if (isRegistered) {
          navigate("/notes");
        }
      } else {
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <section className={props.classContainer}>
      <img
        className={props.classLogo}
        src={require("../Resourses/logo.png")}
        alt="Logo"
      />
      <h1 className={props.classH1}>Iniciar sesión con:</h1>

      <img
        className={props.classLogoGoogle}
        src={require("../Resourses/google.png")}
        alt="Logo"
        onClick={handleOnClick}
      />
    </section>
  );
}
