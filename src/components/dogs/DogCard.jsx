
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BtnBubble } from '../buttons/bubble/BtnBubble';


import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import "./styles/dog-card.css";



const DogCard = ({id, name, size, weight, height, likes}) => {

    return (
        
        <div className="grid grid-cols-3 grid-rows-7 grid-flow-row rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out" key={id}>
            <div className="col-span-3 row-span-4 | m-1 p-1">
                <Link to={`/dogs/${id}`}>
                    <img
                    src="https://picsum.photos/640/400/?random"
                    alt={name}
                    className="rounded-t-xl object-cover | h-48 w-full"
                    />
                </Link>
            </div>

            <div className="col-span-3 row-span-1">
                <div className="flex items-center justify-between leading-tight | p-2 md:p-4">
                    <h2 className="text-2xl">
                        <Link to={`/dogs/${id}`} className="text-black no-underline">
                            {name}
                        </Link>
                    </h2>
                    <p className="text-grey-darker text-md">
                        Likes: {likes}
                    </p>
                </div>
                
                <div className="flex | px-6">
                    <dl className="card__dog-content w-full">
            
                        <dt>Tamaño</dt>
                        <dd>{size}</dd>

                        <dt>Peso medio</dt>
                        <dd>{weight} kg.</dd>

                        <dt>Altura media</dt>
                        <dd>{height} cm.</dd>
                        
                    </dl>
                </div>

                <div className="p-4 card__dog-btn">
                    <BtnBubble texto={"Ver perrito"} url={`/dogs/${id}`} />
                </div>
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

export default DogCard;