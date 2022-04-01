<template>
    <div class="container">

      <div class="left" v-bind:style="getColor.color1">
        <img :src="onePokemon.artwork" alt="" class="artwork" >
        <div class="sprites-container">
          <div>
            <img :src="onePokemon.img" alt="" class="img">
            <img :src="onePokemon.imgBack" alt="" class="img" >
          </div>
          <div>
            <img :src="onePokemon.gif" alt="" class="img">
            <img :src="onePokemon.gifBack" alt="" class="img" >
          </div>
        </div>
      </div>

      <div class="right" v-bind:style="getColor.color1">
        <div class="right-title">
          <p v-bind:style="getColor.color2">  N°{{pokemonId}} </p>
          <h2 class="name"> {{onePokemon.name}} </h2>
        </div>
        <div class="desc-container">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odio eum hic ipsum voluptatibus ratione illo atque quibusdam nobis in voluptate, tempore accusamus harum beatae dignissimos quod, iure veritatis? Velit!
        </div>
        <div class="types-container">
          <div class="typeee">
            {{ onePokemon.types[0] }}
          </div>
          <div class="typeee" v-bind:style="getColor.color2">
            {{ onePokemon.types[1] }}
          </div>
        </div>
        <div class="moves-container">
          <div v-for="m in onePokemon.moves" :key="m" class="moves">
            {{ m }}
          </div>
        </div>  
      <audio controls :src="onePokemon.sound">Oui</audio>
        <div class="mensu-container">
          <p class="mensu">Height: {{onePokemon.height}}</p>
          <p class="mensu">Weight: {{onePokemon.weight}}</p>
        </div>


      </div>






    </div>
</template>


<style scoped>
*{
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  padding: 16px;
  column-gap: 8px;
}

.left {
  display: flex;
  flex-direction: column;
  background-color: rgb(241, 241, 241);
  border-radius: 12px;
  padding: 8px;
  row-gap: 8px;
}

.artwork {
  width: 40vw;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
}

.name {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
}

.sprites-container {
  display: flex;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
}

.sprites-container div{
  display: flex;
  border-radius: 12px;
}
.img {
  height: 100px;
}

.right {
  width: 60vw;
  background-color: rgb(241, 241, 241);
  border-radius: 12px;
  padding: 8px;
}

.right-title {
  display: flex;
  width: 100%;
  text-transform: uppercase;
  column-gap: 8px;
  margin-bottom: 8px;
}

.right-title p {
  padding: 8px 24px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
}

.right-title h2 {
  width: 100%;
}

.desc-container {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  margin-bottom: 8px;
  padding: 16px 8px;
}

.types-container {
  display: flex;
  justify-content: center;
  column-gap: 8px;
  margin-bottom: 8px;
}

.typeee {
  padding: 6px 48px;
  border-radius: 1000px;
  background-color: rgba(255, 255, 255, 0.3);
}

.moves-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
}

.moves {
  font-size: 12px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  margin: 2px;
  padding: 4px;
}

audio {
  width: 100%;
}

.mensu-container {
  display: flex;
  justify-content: center;
  column-gap: 8px;
  margin-bottom: 8px;
}

.mensu {
  padding: 6px 48px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
}
</style>

<script>
import { PokemonService } from '../services/pokemonService.js'
export default {
  name: "PokemonDetails",
  data() {
    return {
      pokemonId: 0,
      onePokemon: {},
      service : new PokemonService()
    };
  },

  computed: {
    getColor() {
      if (this.onePokemon.types != undefined) {
        let colors = [];

        console.log("Couleurs");
        console.log(colors);

        this.onePokemon.types.forEach((t) => {
          switch (t) {
            case "bug":
              colors.push("#91c12b");
              break;
            case "poison":
              colors.push("#ab6bc9");
              break;
            case "flying":
              colors.push("#8faadd");
              break;
            case "grass":
              colors.push("#63bc5a");
              break;
            case "fighting":
              colors.push("#cf3f6b");
              break;
            case "ghost":
              colors.push("#5169ae");
              break;
            case "fairy":
              colors.push("#ed90e7");
              break;
            case "ice":
              colors.push("#74cec0");
              break;
            case "normal":
              colors.push("#929ba3");
              break;
            case "fire":
              colors.push("#ff9e54");
              break;
            case "dragon":
              colors.push("#036dc4");
              break;
            case "electric":
              colors.push("#f4d339");
              break;
            case "steel":
              colors.push("#5a8fa3");
              break;
            case "psychic":
              colors.push("#fa727a");
              break;
            case "ground":
              colors.push("#d87843");
              break;
            case "dark":
              colors.push("#5a5365");
              break;
            case "water":
              colors.push("#4f91d7");
              break;
            case "rock":
              colors.push("#c5b78c");
              break;
          }
        });

        return {
          color1: "background-color: " + colors[0],
          color2: "background-color:" + colors[1],
        };
      }
      return "";
    },
  },

  mounted() {
    let route = this.$route;
    this.pokemonId = route.params.id;

    this.service.getPokemon(this.pokemonId)
    .then(result => {
      this.onePokemon = result;
    })
      console.log('cc')
  },
};
</script>
