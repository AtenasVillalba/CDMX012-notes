import PrincipalNav from "../Components/PrincipalNav";
import NewNote from "../Components/NewNote";
import Footer from "../Components/Footer";

export default function CreateNotesView() {

  return (
    <section>
      <PrincipalNav
        navContainer="new-notes-container"
        classLogo="back-note"
        imagen1="back"
        classTitle="title-new-note"
        classSignOut="logo-new-note"
        imagen2="logo"
      />

      <NewNote
      classContainer="new-note-container"
       classAdd ="image-confirm-note"
       imagen1="confirm"/>

       <Footer
       classContainer="new-foter-container"
       textoDerechos="text-footer1"
       textoElaborado="text-footer2"
       classLogoGithup="logo-github"/>
    </section>
  );
}
