import React from "react";

function Header(){
    return (
        <header>
            <div class='jumbotron'>
                <h1>Top 50 Pokemons!</h1>
                <p>Load the first 50 pokemons on the GraphiQL Pokemons API! Available <a href='https://graphql-pokemon.now.sh/'>here</a>.</p>
                <p>Click for details!</p>
            </div>
        </header>
    )
}

export default Header;