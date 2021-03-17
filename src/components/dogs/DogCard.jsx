import React from 'react'
import PropTypes from 'prop-types';

import "./styles/dog-card.css";


const DogCard = props => {


    return (
        <div className="flex-p-6 card__dog">
            <div class="flex-none w-44 relative">
                <img src="/kids-jumpsuit.jpg" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            <div class="flex flex-wrap items-baseline | p-4">
                <h2 class="flex-none font-semibold text-3xl focus-within:sr-only
                | w-full | mb-2.5">
                    Alaskan Malamute
                </h2>
                <dl className="card__dog-content">
                    <dt>Descripción</dt>
                    <dd>A large feline inhabiting Bodmin Moor.</dd>

                    <dt>Peso medio</dt>
                    <dd>40 kg.</dd>

                    <dt>Altura media</dt>
                    <dd>90 cm.</dd>
                </dl>
                <button class="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white | px-4 py-2 mt-6" type="submit">Like Me!</button>
            </div>
        </div>
    )
}

DogCard.propTypes = {

}

export default DogCard
