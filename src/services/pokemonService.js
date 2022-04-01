
import axios from 'axios';
// import { resolve } from 'core-js/library/es6/promise';
 import { Pokemon } from '../models/pokemon';
//import { reject, resolve } from 'core-js/fn/promise';



export class PokemonService {





    constructor() {

    }

    getPokemon(id) {
        return new Promise((resolve, reject) => {
            axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(response => {

                    //pokemonData n'est pas un tableau mais un objet(json)

                    let pokemon = new Pokemon()
                    let typestab = []
                    let pokemonTypes = response.data.types;
                    for (let t=0; t<pokemonTypes.length; t++) {
                        typestab.push(response.data.types[t].type.name)
                    }
                    
                    let movestab = []
                    let pokemonMoves = response.data.moves;
                    for (let m=0; m<pokemonMoves.length; m++) {
                        movestab.push(response.data.moves[m].move.name)
                    }
                    
                    pokemon.name = response.data.name
                    pokemon.img = response.data.sprites.front_default
                    pokemon.imgBack = response.data.sprites.back_default
                    pokemon.img = response.data.sprites.front_default
                    pokemon.imgBack = response.data.sprites.back_default
                    pokemon.height = response.data.height
                    pokemon.weight = response.data.weight
                    pokemon.xp = response.data.base_experience
                    pokemon.gif = response.data.sprites.versions['generation-v']['black-white'].animated.front_default
                    pokemon.gifBack = response.data.sprites.versions['generation-v']['black-white'].animated.back_default
                    pokemon.artwork = response.data.sprites.other['official-artwork'].front_default
                    pokemon.types = typestab
                    pokemon.moves = movestab
                    pokemon.sound = 'https://www.pokebip.com/audio/cris-sl/' + id +'.mp3'

                    resolve(pokemon)
                })

                .catch(reason => {
                    reject("Erreur lors de la récupération des pokémons" + reason)
                })

        })
    }



    //Cette méthode retourne un tableau de pokemon
    getPokemons() {

        return new Promise((resolve, reject) => {

            let pokemons = []

            axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
                .then(response => {

                    console.log(response.data.results)
                    let result = response.data.results;
                    result.forEach(p => {


                        let substrings = p.url.split("/");
                        let id = substrings[substrings.length - 2];
                        p.img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/'+id+'.png'
                        p.id = id
                        pokemons.push(p)
                    })
                    resolve(pokemons)
                })
                .catch(reason => {
                    reject("Erreur lors de la récupération des pokémons" + reason)
                })
        })
    }
}