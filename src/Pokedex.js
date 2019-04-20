import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends React.Component {
    render() {
        return (
            <div className="Pokedex">
                <h1 className={this.props.isWinner ? 'Pokedex-winner': 'Pokedex-loser'}>{this.props.isWinner ? 'Winner Hand':'Loser Hand'}</h1>
                <h2 className={this.props.isWinner ? 'Pokedex-winner': 'Pokedex-loser'}>{this.props.score}</h2>
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