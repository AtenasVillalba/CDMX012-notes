import PrincipalNav from "../Components/PrincipalNav";
import NewNote from "../Components/NewNote";
import Footer from "../Components/Footer";
import "./CreateNotesView.css";

export default function CreateNotesView() {
  return (
    <section className="create-notes-view">
      <PrincipalNav
        link1="/notes"
        navContainer="new-notes-container"
        classLogo="back-note"
        imagen1="back"
        classTitle="image-new-note"
        classSignOut="logo-new-note"
        imagen2="logo"
      />

      <NewNote
        classContainer="new-note-container"
        inputTitle="title-new-note"
        inputText="text-new-note"
        classAdd="image-confirm-note"
        imagen1="confirm"
      />

      <Footer
        classContainer="new-foter-container"
        textoDerechos="text-footer1"
        textoElaborado="text-footer2"
        classLogoGithup="logo-github"
        classTextContainer= "text-container"
        classContainerlogo="container-logo"
      />
    </section>
  );
}
