import Login from "../Components/Login";
import "./LoginView.css";

export default function LoginView() {
  return (
    <section className="login-view">
      <Login
        classContainer="contenedor-login"
        classLogo="logo-notes"
        classH1="title"
        classLogoGoogle="logo-google"
      />
    </section>
  );
}
