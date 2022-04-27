import { handleOnClick, auth } from "../Lib/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { userExist } from "../Lib/firestore";

export default function Login({
  classContainer,
  classLogo,
  classTitle,
  classText,
  classWelcome,
  classSesion,
  classLogoGoogle,
}) {
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
    <section className={classContainer}>
      <img
        className={classLogo}
        src={require("../Resourses/logo.png")}
        alt="Logo"
      />
      <img
        className={classTitle}
        src={require("../Resourses/Title.png")}
        alt="Toma-nota"
      />
      <h2 className={classWelcome}>Bienvenido</h2>
      <h1 className={classText}>¡Cree notas para contar sus historias!</h1>
      <h1 className={classSesion}>Iniciar sesión con:</h1>

      <img
        className={classLogoGoogle}
        src={require("../Resourses/google.png")}
        alt="Logo"
        onClick={handleOnClick}
      />
    </section>
  );
}
