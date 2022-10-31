import Card from '../components/Card'
import '../assets/styles/cards.css'

function Ofertas() {
    const items = [
        {
            key: '1',
            src: '/img/faro.jpg',
            title: 'Viaje a Cancún',
            description: 'Vuelo a mitad de precio',
            precio: '$2,500.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '2',
            src: '/img/city.jpg',
            title: 'Viaje a New York',
            description: 'Vuelo a mitad de precio',
            precio: '$500.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '3',
            src: '/img/nieve.jpg',
            title: 'Viaje a Islandia',
            description: 'Vuelo a mitad de precio',
            precio: '$4,720.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '4',
            src: '/img/MachuPichu.jpg',
            title: 'Viaje a Machu Picchu',
            description: 'Vuelo y Tour para cuatro personas',
            precio: '$9,999.99',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '5',
            src: '/img/Shangai.jpg',
            title: 'Vuelo y Tour por Shangai',
            description: 'Vuelo y paseo turistico por Shangai para 2 personas',
            precio: '$10,999.99',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '6',
            src: '/img/Venecia.jpg',
            title: 'Paseo por Venecia',
            description: 'Tour por Venecia y paseo en gondola para 2 personas',
            precio: '$2,000.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '7',
            src: '/img/Paris.jpg',
            title: 'Tour por Paris',
            description: 'Paseo romantico por las calles de Paris, perfecto para ir en pareja',
            precio: '$4,999.90',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '8',
            src: '/img/Sakura.jpg',
            title: 'Vuelo y Tour por Japon',
            description: 'Vuelo y Tour por las calles de Japon durante la temporada primaveral, para 2 personas',
            precio: '$12,000.00',
            fecha: 'Publicado: 31/10/2022'
        }
    ];

    return (
        <div className="container">
            <h2 className="Titulo">Ofertas</h2>
                <div className="container-cards">
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

export default Ofertas;