function Card(props) {
    return(
        <div className="card">
        <img src={props.src} alt={props.title} className="img_slide"/>
        <div className="info">
            <h2>{props.title}</h2>
            <span>{props.description}</span>
            <span>{props.price}</span>
            <span>{props.date}</span>
        </div>
        </div>
    )
}
export default Card;