import React from "react";
import { useFetchDogs } from "../../hooks/useFetchDogs";
import { NavBar } from "../nav/NavBar";
import { Footer } from "../footer/Footer";
import DogCard from "./DogCard";


export const DogList = () => {

    const { data, loading } = useFetchDogs();

    return (

        <>
            <NavBar />
            {/* simulate loading mssage until get data*/}
            { loading && <h3>Loading...</h3> }

            <div className="container max-w-screen-xl | mx-auto py-24 md:py-36 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        
                    {
                        data.map( (dog) => (
                            <DogCard key={dog.id} { ...dog } />
                        ))
                    }
                    
                </div>
            </div>

            <Footer />
        </>
    )
}

