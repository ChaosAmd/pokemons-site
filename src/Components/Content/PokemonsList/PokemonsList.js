import React, { useState, useEffect} from 'react';
import PokemonCard from './PokemonCard/PokemonCard';
import PokemonDataNormalized from './PokemonData';
import HandleErrors from '../../HandleErrors';

function PokemonsList() {
    
    const [Pokemon, setPokemon] = useState([]);
    const [ServerError, setServerError] = useState(null);

    const fetchData = async() => {
        let response;
        try {
            response =  await PokemonDataNormalized();
            
            if(response instanceof Error) {
                return setServerError(response);
            }
            
            setPokemon(response);
        } catch(err) {
            return setServerError(err);
        }



    }

    useEffect( () => {
        fetchData();
    }, []);
    
    return (
        <div>
            <HandleErrors error={ServerError} />
            <ul class='list-unstyled'>
                <div class='card-deck container-fluid'>
                        {Pokemon.map(PokemonCard)}
                </div>
            </ul>
        </div>
    );
}

export default PokemonsList;