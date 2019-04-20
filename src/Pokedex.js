import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends React.Component {
    render() {
        let title;
        let score;
        if(this.props.isWinner) {
            title = <h1 className="Pokedex-winner"> Winner Hand</h1>
            score = <h2 className="Pokedex-winner">Exp: {this.props.score}</h2>;
        } else {
            title = <h1 className="Pokedex-loser"> Loser Hand</h1>
            score = <h2 className="Pokedex-loser">Exp:{this.props.score}</h2>;
        }

        
        return (
            <div className="Pokedex">
                {title}
                {score}
                <div className="Pokedex-container">
                    {this.props.pokemon.map(p => (
                    <Pokecard key={p.id} id = {p.id} name = {p.name} type = {p.type} base_experience = {p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;