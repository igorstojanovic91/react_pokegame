import React, { Component } from 'react';
import Pokedex from './Pokedex'

var shuffle = array => {
    array.sort(() => Math.random() - 0.5);
}

var isWinner = (arr1, arr2) => {
    let sum1 = 0
    let sum2 = 0
    arr1.forEach(e => sum1 += e.base_experience)
    arr2.forEach(e => sum2 += e.base_experience)
    console.log(sum1, sum2)
    if (sum1 > sum2) {
        return true
    } else {
        return false
    }
}

class Pokegame extends React.Component {
    static defaultProps = {
        pokemon: [ {id: 4, name: 'Charmander', type: 'fire', base_experience: 62, },
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ]
    };
    render() {
        //shuffling array
        let arr = [...this.props.pokemon]
        shuffle(arr)
        //cut array in half
        let hand1 = arr.slice(0,arr.length/2)
        let hand2 = arr.slice(4, arr.length)

        return (
            <div>
                <Pokedex pokemon={hand1} isWinner={isWinner(hand1, hand2)} />
                <Pokedex pokemon={hand2} isWinner={isWinner(hand2, hand1)}/>
            </div>
        )
    }
}

export default Pokegame