import PrincipalNav from "../Components/PrincipalNav";
import "./NotesView.css";
import Footer from "../Components/Footer";
import ImageAddNote from "../Components/ImageAddNote";
import { useContext } from "react";
import AuthContext from "../AboutContext/auth-context";
// import CreateNotesView from "./CreateNotesView";
// import { Navigate } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { auth } from "../Lib/firebase";

export default function NotesView() {
//  const authCtx= useContext(AuthContext);
//  const isLiggedId = authCtx.isLiggedId

  return (
    <section className="notes-view">
      <PrincipalNav
        navContainer="notes-container"
        classLogo="logo-note"
        imagen1="logo"
        classTitle="title-notes"
        classSignOut="sign-out"
        imagen2="cerrar-sesion"
        link1= "/notes"

      />
      
      <ImageAddNote classAddNote="logo-addNote" />
   

      <Footer
        classContainer="foter-container"
        textoDerechos="text-footer1"
        textoElaborado="text-footer2"
        classLogoGithup="logo-github"
        classTextContainer= "text-container"
        classContainerlogo="container-logo"
      />
    </section>
  );
}
