import React from 'react';
import PokemonCardModal from './PokemonModal/PokemonModal';
import './PokemonCardStyle.css';

function PokemonCard(props) {

    const pokeRef = '#details' + props.name;

    return (
        <div>
            <li className='Item'>
                    <div class='card bg-dark card-hover'> 
                        <a class='btn' href={pokeRef} data-target={pokeRef}>

                            <img src={props.imagesrc} class='card-img-top' />
                            <p class='card-title text-light'>Name: {props.name}</p>
                            <p class='card-text text-info' >Position: {props.number}</p>
                        </a>
                    </div>
            </li>

            <PokemonCardModal name={props.name} 
                              imagesrc={props.imagesrc} 
                              specialAttacks={props.specialAttacks} 
                              number={props.number} 
                              pokeRef={pokeRef}/>
        </ div>
    );
}

export default PokemonCard;