import PrincipalNav from "../Components/PrincipalNav";
import "./NotesView.css";
import Footer from "../Components/Footer";
import ImageAddNote from "../Components/ImageAddNote";

export default function NotesView() {
  return (
    <section className="notes-view">
      <PrincipalNav
        navContainer="notes-container"
        classLogo="logo-note"
        imagen1="logo"
        classTitle="title-notes"
        classSignOut="sign-out"
        imagen2="cerrar-sesion"
      />

      <ImageAddNote classAddNote="logo-addNote" />

      <Footer
        classContainer="foter-container"
        textoDerechos="text-footer1"
        textoElaborado="text-footer2"
        classLogoGithup="logo-github"
      />
    </section>
  );
}
