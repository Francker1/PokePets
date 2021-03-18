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

    const {id, name, description, size, weight, height, likes} = dog;

    return (
        <>
            <NavBar />
            <div class="flex items-center overflow-hidden relative | py-24 md:py-36" key={id}>
                <div class="w-full max-w-6xl rounded bg-white shadow-xl text-gray-800 relative md:text-left | p-10 lg:p-20 mx-auto ">
                    <button onClick={ handleReturn }>
                        Volver
                    </button>
                    <div class="md:flex items-center -mx-10">
                        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div class="relative">
                                <img src="https://picsum.photos/640/400/?random" class="w-full relative z-10" alt={name} />
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 | px-10">
                            <div class="mb-10">
                                <h1 class="font-bold uppercase text-2xl | mb-5">{name}</h1>
                                <p class="text-sm">{description}</p>
                            </div>
                            <div class="mb-8">
                                <ul>
                                    <li><span className="font-semibold">Tamaño:</span> {size}.</li>
                                    <li><span className="font-semibold">Peso:</span> {weight} kg.</li>
                                    <li><span className="font-semibold">Altura:</span> {height} cm.</li>
                                </ul>
                            </div>
                            <div>
                                <div class="inline-block align-bottom">
                                    <button class="font-semibold shadow-lg rounded-full | border | px-10 py-2 ">Like me!</button>
                                    <p>likes: {likes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
