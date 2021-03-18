import { useParams } from 'react-router-dom';
import { getDogById } from '../../helpers/getDogById';

export const DogScreen = ({history}) => {

    const { dogId } = useParams();

    const dog = getDogById(dogId);

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const {id, name, description, size} = dog;

    return (
        <>
        <div>
            {id}
            {name}
            {description}
            {size}
        </div>
        <button onClick={ handleReturn }>
            Volver
        </button>
        </>
    )
}
