export default function NewNote({ classContainer, classAdd,imagen1 }) {
  return (
    <section className={classContainer}>
      <input placeholder="Escribe el titulo de tu nota"></input>

      <input placeholder="Empiece a esribir..."></input>
      <img
        className={classAdd}
        src={require(`../Resourses/${imagen1}.png`)}
        alt="Crear-Nota"
      />
    </section>
  );
}
;
