import React from "react";
import { useFetchDogs } from "../../hooks/useFetchDogs";
import DogCard from "./DogCard";


export const DogList = () => {

    const { data, loading } = useFetchDogs();

    return (

        <>
            {/* simulate loading mssage until get data*/}
            { loading && <h3>Loading...</h3> }

            <div className="container | mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {
                        data.map( (dog) => (
                            <DogCard key={dog.id} { ...dog } />
                        ))
                    }
                    
                </div>
            </div>

        </>
    )
}
