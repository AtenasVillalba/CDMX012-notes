import Login from "../Components/Login";
import "./LoginView.css";



export default function LoginView() {
  return (
    <section className="login-view">
      <Login
      
        classContainer="container-login"
        classLogo="logo-notes"
        classTitle= "title"
        classWelcome="text-welcome"
        classText="text-notes"
        classSesion="text-start-sesion"
        classLogoGoogle="logo-google"
      />
    </section>
  );
}
