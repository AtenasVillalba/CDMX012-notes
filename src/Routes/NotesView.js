import PrincipalNav from "../Components/PrincipalNav";
import "./NotesView.css";
import Footer from "../Components/Footer";
import AddNote from "../Components/AddNote";

export default function NotesView() {
  return (
    <section className="notes-view">
      <PrincipalNav
        navContainer="notes-container"
        classLogo="logo-note"
        classTitle="title-notes"
        classSignOut="sign-out"
      />

      <AddNote  
      classAddNote="logo-addNote" />

      <Footer
        classContainer="foter-container"
        textoDerechos="text-footer1"
        textoElaborado="text-footer2"
        classLogoGithup="logo-github"
      />
    </section>
  );
}
