import '../assets/styles/Header.css'

function Header(){
    return(
        <header>
            <h3><img src='/img/Logo.png' id='Logo'/> SofTravel</h3>
            <nav >
                <a ><img src="/img/home.png" id='Lugar'/> Inicio</a>
                <a ><img src="/img/avion.png" id='Lugar'/> Vuelos</a>
                <a ><img src="/img/barco.png" id='Lugar' /> Cruceros</a>
                <a ><img src="/img/auto.png" id='Lugar' /> Autos</a>
                <a ><img src="/img/Hotel.png" id='Lugar' /> Reservacion</a>
                <p ><img/> | Iniciar sesion</p>
                <br></br>
            </nav>       
        </header>

    );
}

export default Header;