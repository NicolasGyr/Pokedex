<template>
  <div>
    <h1>Pokedex</h1>
    <div class="pkm-container">
      <div v-for="(obj, index) in pokemons" v-bind:key="index" class="pkm">
          <router-link v-bind:to="'/pokemons/' + obj.id" style="text-decoration: none;">
            <img :src="obj.img" alt="">
            <p>{{obj.name}}</p>
          </router-link>
      </div>
    </div>

    <!-- index est pour le tableau, on a besoin d'une boucle -->
  </div>
</template>

<style scoped >
ul {
  text-decoration: none;
  list-style: none;
}

p {
  color: black;
  text-decoration: none;
}

.pkm-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 16px;
}

img{
  height: 80px;
}

.pkm {
  background-color: rgb(249, 239, 226);
  border-radius: 12px;
  padding: 8px;
}

.pkm:hover {
    background-color: rgb(249, 228, 201);
    cursor: pointer;
}


</style>


<script>
import { PokemonService } from '../services/pokemonService.js';

export default {
  name: "demo",

  // Tout ce qui est dans data() est réactif, que des variables
  data() {
    return {
      pokemons: [],
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
    

  }
}
</script>