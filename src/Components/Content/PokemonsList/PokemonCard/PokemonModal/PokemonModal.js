import React from 'react';
import './PokemonModalStyle.css';

function PokemonCardModal (props) {

    return (
        <div class="modal-window" id={props.pokeRef.slice(1)} role="dialog" aria-labelledby="PokemonCenterTitle" aria-hidden="true">
            <div>
               <a href="#modal-close" title="Close" class="modal-close">close &times;</a>
               <h1>{props.name}</h1>
               <img src={props.imagesrc}  class='modal-image'/>
               <h5 class='text-info'>Special attacks: {props.specialAttacks}.</h5>
            </div>
        </div>
    )
}

export default PokemonCardModal;