<template>
  <b-row class="my-4 d-flex align-items-center position-relative">
    <div class="iconLeft">
      <p class="h1 mb-2">
        <b-icon-chevron-compact-left
          style="color: #fff"
        ></b-icon-chevron-compact-left>
      </p>
    </div>
    <div class="iconRight">
      <p class="h1 mb-2">
        <b-icon-chevron-compact-right
          style="color: #fff"
        ></b-icon-chevron-compact-right>
      </p>
    </div>
    <b-col cols="2" v-for="pokemon in pokemonList" :key="pokemon.id">
      <div class="cardPokemon clikeable" @click="getPokemonInfo(pokemon)">
        <img :src="pokemon.url" alt="" srcset="" />
        <div class="cardInterna">
          <p>{{ pokemon.name }}</p>
          <img src="../assets/pokeballOro.png" alt="" srcset="" />
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemonList: [],
      pokemonInfo: null,
    };
  },

  created() {
    this.getPokemon();
  },
  methods: {
    getPokemon() {
      axios.get(`./jsons/PokemonSpecialsLegend.json`).then((response) => {
        let legendaries = response.data.legendaries;
        legendaries.map((element) => {
          this.pokemonList.push({
            id: element.id,
            attack: element.attack,
            defense: element.defense,
            experience: element.experience,
            hp: element.hp,
            info: element.info,
            name: element.name,
            spAttack: element.spAttack,
            spDefense: element.spDefense,
            url: element.url,
          });
        });
        this.getPokemonInfo(this.pokemonList[0]);
      });
    },

    getPokemonInfo(pokemon) {
      this.pokemonInfo = pokemon;
    },
  },
};
</script>

<style lang="scss" scoped>
.leyendary {
  background: var(--Dark-color);
  height: 100%;

  .titlePokemonEspecialContainer {
    border-bottom: 1px solid #ffffff;
  }

  .titlePokemonEspecial {
    line-height: 84px;
    letter-spacing: 4px;
    color: #ffffff;
    text-align: left;
  }

  .pokemonNombre {
    font-family: Karla;
    font-size: 72px;
    line-height: 84px;
    letter-spacing: 4px;
    color: #fdfdfd;
    text-align: left;
  }

  .pokemonInfo {
    font-family: SourceSansPro;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    text-align: left;
  }

  .pokeStadisticTitle {
    font-family: Karla;
    font-size: 16px;
    line-height: 19px;
    color: #fdfdfd;
    margin-bottom: 0px;
    text-align: left;
  }

  .pokeStadisticPoints {
    font-family: Karla;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #fdfdfd;
    text-align: left;
    margin: 0px;
  }

  .cardPokemon {
    background: radial-gradient(
      677.11% 487.95% at 102.13% -60%,
      #b57e10 0%,
      #b57e10 20.31%,
      #f9df7b 39.58%,
      #fff3a6 59.38%,
      #f9df7b 78.13%,
      #b57e10 100%
    );
    border-radius: 18px;
    max-width: 100%;
    border: 10% solid var(--Dark-color);
    width: 70%;
    margin: auto;
    img {
      max-width: 116%;
      padding-top: 15px;
      position: relative;
      left: -11px;
    }

    .cardInterna {
      background: linear-gradient(180deg, #ffffff 30.32%, #f5f5f5 100%);
      border-radius: 16px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-around;

      p {
        margin: 0px;
        font-family: Roboto;
        font-size: 18px;
        line-height: 21px;
      }

      img {
        padding-top: 6px;
      }
    }
  }
  .iconLeft {
    position: absolute;
  }
  .iconRight {
    position: absolute;
    right: 0;
  }
}
</style>
