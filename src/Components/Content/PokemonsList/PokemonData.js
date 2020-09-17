import getJSONReponse from '../../FetchResponse';

const EndPoint = 'https://graphql-pokemon.now.sh/';

const Query = 
`
{
    query {
      pokemons(first: 50) {
        name
        number
        image
        attacks {
          special {
            name
          }
        }
      }
    }
  }  
`;

const PokemonDataNormalized = async () => {
    const ResponseJSON = await getJSONReponse(EndPoint, Query);

    return ResponseJSON.data.query.pokemons.map(Pokemon => {

        return {
            "name" : Pokemon.name,
            "number" : Pokemon.number,
            "imagesrc" : Pokemon.image,
            "specialAttacks" : Pokemon.attacks.special.map(attack => attack.name).join(', ')
        }
    });
}

export default PokemonDataNormalized;