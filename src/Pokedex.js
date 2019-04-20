import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends React.Component {
    render() {
        console.log('props', this.props)
        return (
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <div className="Pokedex-container">
                    {this.props.pokemon.map(p => (
                    <Pokecard id = {p.id} name = {p.name} type = {p.type} base_experience = {p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;