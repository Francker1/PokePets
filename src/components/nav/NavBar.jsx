import { Link } from "react-router-dom";

import "./style.css";

export const NavBar = () => {
    return (
        <nav className="fixed select-none lg:flex lg:items-stretch w-full">
            <div className="flex flex-no-shrink items-stretch h-12">
                <Link to="/" className="relative  leading-normal flex items-center text-2xl | py-2 px-4">PokePets 🐶</Link>
            </div>
        </nav>
    )
}
