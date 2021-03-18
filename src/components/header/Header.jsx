import { Link } from "react-router-dom";

import "./style.css";

export const Header = () => {
    return (
        <header className="header__cover">
            <div className="header__cover-container flex justify-center | bg-opacity-50 bg-black | py-24">
                <div className="text-center max-w-2xl | p-12">
                    <div className="font-bold">
                        <h1 className="mb-7">PokePets</h1>
                    </div>
                    <div className="text-xl font-normal | mt-4">
                        <p>La web de perros para gente curiosa</p>
                    </div>
                    <div className="flex justify-center relative | h-12 | mt-6">
                        <Link className="flex shadow-md font-medium absolute py-2 px-4 cursor-pointer rounded text-lg" to="/dogs/">
                            Descubrir
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
