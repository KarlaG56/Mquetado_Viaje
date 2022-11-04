import Header from "../Header";
import Carrusel from "../Carrusel";
import Ofertas from "../Ofertas";
import Vuelos from "../Vuelos";
import Tours from "../Tours";
import Comments from "../Comentarios";
import Footer from "../Footer";

function Maquetado() {
    return (
        <>
        <Header />
        <Carrusel />
        <Ofertas />
        <Vuelos/>
        <Tours/>
        <Comments/>
        <Footer />
        </>
    );
}

export default Maquetado;