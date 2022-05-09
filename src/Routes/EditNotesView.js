import PrincipalNav from "../Components/PrincipalNav";
import Footer from "../Components/Footer";
import "./CreateNotesView.css";
import EditNote from "../Components/EditNote";

export default function EditNotesView() {
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

      <EditNote
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
