import PropTypes from 'prop-types';
import { DogList } from './components/dogs/DogList';
import { Footer } from './components/footer/Footer';

export const PetApp = ({props}) => {
    return (
        <>
            <DogList />
            <Footer />
        </>
    )
}

PetApp.propTypes = {
    message: PropTypes.string.isRequired,
}

