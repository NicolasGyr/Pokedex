<template>
  <div>
    <h1>Blindtest</h1>
          <div v-for="(obj, index) in pokemons4" v-bind:key="index" class="pkm">
              <img :src="pkm1.img" alt="">
              <p>{{obj.name}}</p>
           </div>
  </div>
</template>

<style scoped >


</style>


<script>
import { PokemonService } from '../services/pokemonService.js';

export default {
  name: "blindtest",

  // Tout ce qui est dans data() est réactif, que des variables
  data() {
    return {
      score: 0,
      pokemons: [],
      pokemonslist: [],
      pokemons4: 4,
      pkm1: [],
      pkm2: {},
      pkm3: {},
      pkm4: {},
      pkmtrue: "",
      service: new PokemonService()
    };
  },

  // Que des fonctions dans methods
  methods: {
    
  },

  // Cette fonction sera appelée lorsuqe le composant est prêt à l'emploi
  mounted() {
    this.service.getPokemons()
      .then(pokemons =>{
        this.pokemons = pokemons
     })




    this.service.getPokemon((Math.floor(Math.random() * 151) ))
        .then(result => {
      this.pkm1 = result;
    })
    this.service.getPokemon((Math.floor(Math.random() * 151) ))
        .then(result => {
      this.pkm2 = result;
    })
    this.service.getPokemon((Math.floor(Math.random() * 151) ))
        .then(result => {
      this.pkm3 = result;
    })
    this.service.getPokemon((Math.floor(Math.random() * 151) ))
        .then(result => {
      this.pkm4 = result;
    })

    this.service.getPokemon((Math.floor(Math.random() * 151) ))
        .then(result => {
      this.pokemonslist.push = result;
    })


//compliqué tout ca :c








    
  }
}
</script>