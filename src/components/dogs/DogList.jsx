import React from "react";
import DogCard from "./DogCard";

export const DogList = () => {
    return (
        <div className="container | mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <DogCard />

            </div>
        </div>
    )
}

