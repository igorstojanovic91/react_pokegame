
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
                <h2 className="Pokecard-name">{pokemon.name}</h2>
                <img src={imgSrc} className="Pokecard-image" />
                <p className="Pokecard-type">Type: {pokemon.type}</p>
                <p className="Pokecard-exp">EXP: {pokemon.base_experience}</p>
            </div>
        )
    }
}

export default Pokecard;