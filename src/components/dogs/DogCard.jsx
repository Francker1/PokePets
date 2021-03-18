import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./styles/dog-card.css";



const DogCard = ({id, name, size, weight, height, likes}) => {

    return (
        
        <div className="flex-p-6 card__dog" key={id}>
            <div className="flex-none w-44 relative">
                <img src="/kids-jumpsuit.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-wrap items-baseline | p-4">
                <h2 className="flex-none font-semibold text-3xl focus-within:sr-only
                | w-full | mb-2.5">
                    {name}
                </h2>
                <dl className="card__dog-content w-full">
                    
                    <dt>Tamaño</dt>
                    <dd>{size}</dd>

                    <dt>Peso medio</dt>
                    <dd>{weight} kg.</dd>

                    <dt>Altura media</dt>
                    <dd>{height} cm.</dd>
                    
                </dl>
                <button className="flex items-center justify-center rounded-full bg-purple-700 text-white | w-1/2 | px-4 py-2 mt-6" type="submit">Like Me!</button>
                <p className="w-1/3 | ml-5">{likes} likes.</p>

                <Link to={`/dogs/${id}`}>
                    Ver...
                </Link>

            </div>
        </div>
    )
}

DogCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    description: PropTypes.string,
    weight: PropTypes.string,
    height: PropTypes.string,
    likes: PropTypes.number,
}

export default DogCard
