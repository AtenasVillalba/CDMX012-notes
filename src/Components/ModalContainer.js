import "./ModalContainer.css"

export default function PrincipalNav({note}) {
 let noteId= note.id
    return(
        <section className="modal_edit_background" id={noteId}>
            <section className="modal_edit_container">
                <img
                src={require("../Resourses/cerrar.png")}
                className="modal_close"
                />
            </section>

        </section>
    )
}