import { useParams } from 'react-router-dom';
import { getDogById } from '../../helpers/getDogById';
import { NavBar } from '../nav/NavBar';

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
            <NavBar />
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
