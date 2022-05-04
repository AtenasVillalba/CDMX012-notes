import { signInWithGoogle} from "../Lib/firebase";


export default function Login(props) 
{
  const { classContainer,classLogo,classTitle,classText,classWelcome,classSesion,classLogoGoogle} = props

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
