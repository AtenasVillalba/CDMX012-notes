import PrincipalNav from "../Components/PrincipalNav";
import "./NotesView.css";
import Footer from "../Components/Footer";
import ImageAddNote from "../Components/ImageAddNote";
import NotesContainer from "../Components/NotesContainer";

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
        link1="/notes"
      />

      <ImageAddNote classAddNote="logo-addNote" />

      <NotesContainer classContainer="note-content"></NotesContainer>
      <Footer
        classContainer="foter-container"
        textoDerechos="text-footer1"
        textoElaborado="text-footer2"
        classLogoGithup="logo-github"
        classTextContainer="text-container"
        classContainerlogo="container-logo"
      />
    </section>
  );
}
