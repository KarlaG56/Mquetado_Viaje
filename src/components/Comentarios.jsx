import '../assets/styles/comentarios.css'
function Comentarios() {
    return (
        <div className="Comment-container">
            <h3>Comentarios</h3>
            <textarea className="comment-area">
            </textarea>
            <div>
                <button>Enviar</button>
            </div>
        </div>
    )
}
export default Comentarios;