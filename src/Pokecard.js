
import React, { Component } from 'react';
import './Pokecard.css'

var padded = (str, num) =>  str.padStart(num, 0)

class Pokecard extends React.Component {
    render() {
        var pokemon = this.props
        const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
        let imgSrc = `${POKE_API}${padded(pokemon.id.toString(), 3)}.png`
        return (
            <div className="Pokecard">
                <h1>{pokemon.name}</h1>
                <img src={imgSrc} />
            </div>
        )
    }
}

export default Pokecard;