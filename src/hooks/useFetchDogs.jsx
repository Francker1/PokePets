import { useEffect, useState } from "react";
import { getDogs } from "../helpers/getDogs";

export const useFetchDogs = () => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        
        getDogs()
            .then( data =>{
                setState({
                    data, 
                    loading: false,
                })
            })
            
    }, [])

    return state;
}
