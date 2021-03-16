import PropTypes from 'prop-types';

export const PetApp = ({message}) => {
    return (
        <>
            <h1>{message}</h1>
        </>
    )
}

PetApp.propTypes = {
    message: PropTypes.string.isRequired,
}

