import { signInWithGoogle, auth } from "../Lib/firebase";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { Navigate } from "react-router-dom";
// import { userExist } from "../Lib/firestore";

export default function Login({
  classContainer,
  classLogo,
  classTitle,
  classText,
  classWelcome,
  classSesion,
  classLogoGoogle,
}) {

  //hook que se utiliza cada vez que se actualiza o renderiza la pag./Componente
  // useEffect(() => {
  //   const user = auth.currentUser;

  //   if (user) {
  //     console.log(user.displayName);
  //     Navigate.replace("/notes");
  //   } else {
  //     Navigate.replace("/");
  //   }
  // });

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
        onClick={signInWithGoogle}
      />
    </section>
  );
}
