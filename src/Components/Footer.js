import { Link } from "react-router-dom";

export default function Footer(props){
const {classContainer, textoDerechos,textoElaborado,classLogoGithup, classTextContainer, classContainerlogo} = props

  return (
    <section className={classContainer}>
      <section className={classTextContainer}>
        <p className={textoDerechos}> ©Derechos reservados </p>
        <p className={textoElaborado}> Elaborado por: Atenas Villalba</p>
      </section>
      <section className={classContainerlogo}>
        <a href="https://github.com/AtenasVillalba" target="_blank">
          <img
            className={classLogoGithup}
            src={require("../Resourses/Githup.png")}
            alt="Logo Githup"
          />
        </a>
      </section>
    </section>
  );
}
