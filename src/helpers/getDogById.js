import { data } from "../data/dogs";


export const getDogById = ( dogId ) => {
    
   return data.find((dog) => dog.id === parseInt(dogId));

}
