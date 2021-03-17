import React from 'react';

import { useParams, Redirect } from 'react-router-dom';

export const DogScreen = ({history}) => {

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const { dogId } = useParams();

    
    return (
        <>
        <div>
            {dogId}
        </div>
        <button onClick={ handleReturn }>
            Volver
        </button>
        </>
    )
}
