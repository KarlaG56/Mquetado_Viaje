import Card from '../components/Card';
import '../assets/styles/cards.css';

function Vuelos() {
    const items = [
        {
            key: '1',
            src: '/img/city.jpg',
            title: 'New York',
            description: 'Vuelo a New York para una persona',
            precio: '$5,000.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '2',
            src: '/img/faro.jpg',
            title: 'Cancún',
            description: 'Vuelo a Cancún para una persona',
            precio: '$1,000.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '3',
            src: '/img/nieve.jpg',
            title: 'Islandia',
            description: 'Vuelo a Islandia para una persona persona',
            precio: '$9,440.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '4',
            src: '/img/MachuPichu.jpg',
            title: 'Perú',
            description: 'Vuelo para una personas a Perú',
            precio: '$5,000.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '5',
            src: '/img/Shangai.jpg',
            title: 'Shangai',
            description: 'Vuelo a Shangai para una persona',
            precio: '$12,258.70',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '6',
            src: '/img/Venecia.jpg',
            title: 'Venicia',
            description: 'Vuelo a Venecia para una persona',
            precio: '$8,000.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '7',
            src: '/img/Paris.jpg',
            title: 'Paris',
            description: 'Vuelo a Paris para una persona',
            precio: '$4,999.90',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '8',
            src: '/img/Sakura.jpg',
            title: 'Japon',
            description: 'Vuelo a Japon para una persona',
            precio: '$12,000.00',
            fecha: 'Publicado: 31/10/2022'
        }
    ];

    return (
        <div className="container">
            <h2 className="Titulo">Vuelos</h2>
                <div className="container-cards-vuelo">
                    {items.map((items) => (
                        <div>
                            <Card
                                key={items.key}
                                src={items.src}
                                title={items.title}
                                description={items.description}
                                price={items.precio}
                                date={items.fecha}
                            />
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Vuelos;