import Card from "./Card";
import '../assets/styles/cards.css';

function Tours() {
    const items = [
        {
            key: '1',
            src: '/img/city.jpg',
            title: 'Tour por New York',
            description: 'Paseo Guiado por las calles de New York',
            precio: '$3,000.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '2',
            src: '/img/Tokio.jpg',
            title: 'Tour por Tokio',
            description: 'Paseo Guiado por Tokio',
            precio: '$4,000.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '3',
            src: '/img/nieve.jpg',
            title: 'Paseo Islandia',
            description: 'Paseo Guiado por los paisajes más hermosos de Islandia',
            precio: '$10,000.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '4',
            src: '/img/MachuPichu.jpg',
            title: 'Tour Machu Picchu',
            description: 'Excursion por la Antigua ciudad Inka de Machu Picchu',
            precio: '$5,000.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '5',
            src: '/img/Roma.jpg',
            title: 'Tour por Roma',
            description: 'Paseo Guiado por las calles de Roma incluye una visita al coliseo',
            precio: '$12,895.70',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '6',
            src: '/img/Venecia.jpg',
            title: 'Paseo por Venicia',
            description: 'Paseo en Gondola por la hermosa Venecia',
            precio: '$8,000.00',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '7',
            src: '/img/Grecia.jpg',
            title: 'Paseo por Grecia',
            description: 'Paseo Guiado por Grecia con una visita al partenon',
            precio: '$9,999.90',
            fecha: 'Publicado: 31/10/2022'
        },
        {
            key: '8',
            src: '/img/Sakura.jpg',
            title: 'Paseo por Japon',
            description: 'Paseo romantico por Japon para 2 personas',
            precio: '$12,000.00',
            fecha: 'Publicado: 31/10/2022'
        }
    ];

    return (
        <div className="container">
            <h2 className="Titulo">Tours</h2>
                <div className="container-cards-tour">
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
export default Tours;