import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getDogById } from '../../helpers/getDogById';
import { setDogLike } from "../../helpers/setDogLike";
import { NavBar } from '../nav/NavBar';

export const DogScreen = ({history}) => {

    const { dogId } = useParams();
    const [dog, setDog] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        
        getDogById(dogId)
            .then( data =>{
                setDog({
                    data, 
                    loading: false,
                })
            })
            
    }, [dogId])

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    const handleLike = (id, likes) => {
        setDogLike(id, likes)
    }

    const {id, name, description, size, weight, height, likes} = dog.data;

    return (
        <>
            <NavBar />
            <div className="flex items-center | py-24 md:py-36" key={id}>
                <div className="w-full max-w-6xl rounded bg-white shadow-xl text-gray-800 relative md:text-left | p-10 lg:p-20 mx-auto ">
                    <button onClick={ handleReturn }>
                        Volver
                    </button>
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative">
                                <img src="https://picsum.photos/640/400/?random" className="w-full relative z-10" alt={name} />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 | px-10">
                            <div className="mb-10">
                                <h1 className="font-bold uppercase text-2xl | mb-5">{name}</h1>
                                <p className="text-sm">{description}</p>
                            </div>
                            <div className="mb-8">
                                <ul>
                                    <li><span className="font-semibold">Tamaño:</span> {size}.</li>
                                    <li><span className="font-semibold">Peso:</span> {weight} kg.</li>
                                    <li><span className="font-semibold">Altura:</span> {height} cm.</li>
                                </ul>
                            </div>
                            <div>
                                <div className="inline-block align-bottom">
                                    <button 
                                        className="font-semibold shadow-lg rounded-full | border | px-10 py-2"
                                        onClick={ () => handleLike(id, likes) }
                                        >Like me!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
