export default function Footer({ classContainer, textoDerechos,textoElaborado, classLogoGithup}) {
  return (
    <section className={classContainer}>
    <p className={textoDerechos}> ©Derechos reservados </p>
      <p className={textoElaborado}> Elaborado por: Atenas Villalba</p>

      <a href="https://github.com/AtenasVillalba" target="_blank"
          > <img
          className={classLogoGithup}
          src={require("../Resourses/Githup.png")}
          alt="Logo Githup"
        /></a>

    </section>
  );
}

