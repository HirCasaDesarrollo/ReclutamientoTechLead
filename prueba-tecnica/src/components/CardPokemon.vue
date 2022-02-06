<template>
  <b-row>
    <b-col
      lg="4"
      md="6"
      class="mb-4"
      v-for="pokemon in pokemonList"
      :key="pokemon.id"
    >
      <b-card
        no-body
        class="overflow-hidden pokeCard clikeable"
        @click="openPokeModal(pokemon)"
      >
        <b-row no-gutters>
          <b-col cols="5">
            <b-card-body :title="pokemon.name">
              <b-row>
                <b-col cols="6">
                  <div class="circlePercentaje">
                    <p class="pokePercentaje">{{ pokemon.attack }}</p>
                  </div>
                  <p class="pokeHabilidatesText">Attack</p>
                </b-col>
                <b-col cols="6">
                  <div class="circlePercentaje">
                    <p class="pokePercentaje">{{ pokemon.defense }}</p>
                  </div>
                  <p class="pokeHabilidatesText">Defense</p>
                </b-col>

                <b-col class="d-flex justify-content-around">
                  <b-badge pill :variant="pokemon.type">{{
                    pokemon.type
                  }}</b-badge>
                  <b-badge pill :variant="pokemon.otherType">{{
                    pokemon.otherType
                  }}</b-badge>
                </b-col>
              </b-row>
            </b-card-body>
          </b-col>
          <b-col :class="'pokeBackgronund' + pokemon.type" cols="7">
            <b-card-img
              :src="pokemon.img"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
        </b-row>
      </b-card>
    </b-col>

    <b-col cols="12" class="d-flex justify-content-center mt-5">
      <b-pagination
        v-model="currentPage"
        pills
        :total-rows="totalPokemons"
        :per-page="perPage"
        @input="getPokemon(currentPage)"
      ></b-pagination>
    </b-col>

    <b-modal
      v-if="pokemonInfo != null"
      v-model="pokeModal"
      size="lg"
      id="modal-center"
      centered
      title="BootstrapVue"
      hide-header
      hide-footer
    >
      <modal-pokemos :pokemonInfo="pokemonInfo" />
    </b-modal>
  </b-row>
</template>

<script>
import axios from "axios";
import ModalPokemos from "./ModalPokemon.vue";

export default {
  name: "CardPokemon",
  data() {
    return {
      pokemonList: [],
      totalPokemons: 0,
      perPage: 9,
      currentPage: 1,
      pokeModal: false,
      pokemonInfo: null,
    };
  },
  props: ["buscar"],
  components: {
    ModalPokemos,
  },

  created() {
    this.getPokemon(1);
  },
  methods: {
    getPokemon(inicio) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/`).then((response) => {
        this.totalPokemons = response.data.count - 1;
      });
      this.pokemonList = [];
      inicio = (inicio - 1) * 9 + 1;
      for (let i = inicio; i < inicio + 9; i++) {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((response) => {
            let pokemon = {
              id: response.data.id,
              img: response.data.sprites.front_default,
              name: response.data.name,
              type: response.data.types[0].type.name,
              otherType: response.data.types[1]
                ? response.data.types[1].type.name
                : null,
              hp: response.data.stats[0].base_stat,
              attack: response.data.stats[1].base_stat,
              defense: response.data.stats[2].base_stat,
              specialAttack: response.data.stats[3].base_stat,
              specialDefense: response.data.stats[4].base_stat,
              ability:
                response.data.abilities[0].ability.name +
                "-" +
                response.data.abilities[1].ability.name,
            };
            this.pokemonList.push(pokemon);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    openPokeModal(pokemon) {
      this.pokemonInfo = pokemon;
      this.pokeModal = true;
    },
  },
  watch: {
    buscar(val) {
      if (val == "todos") {
        console.log("soy todos");
        this.getPokemon(1);
      } else {
        this.pokemonList = [];
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${val}`)
          .then((response) => {
            let pokemon = {
              id: response.data.id,
              img: response.data.sprites.front_default,
              name: response.data.name,
              type: response.data.types[0].type.name,
              otherType: response.data.types[1]
                ? response.data.types[1].type.name
                : null,
              hp: response.data.stats[0].base_stat,
              attack: response.data.stats[1].base_stat,
              defense: response.data.stats[2].base_stat,
              specialAttack: response.data.stats[3].base_stat,
              specialDefense: response.data.stats[4].base_stat,
              ability:
                response.data.abilities[0].ability.name +
                "-" +
                response.data.abilities[1].ability.name,
            };
            this.pokemonList.push(pokemon);
            this.totalPokemons = 1;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pokeCard {
  background: #f6f7f9;
  border-radius: 8px;

  .card-body {
    padding: 0.75rem;
  }

  .card-img {
    max-width: 150px;
  }

  .card-title {
    text-align: left;
    font-family: Karla;
    font-weight: bold;
    font-size: 18px;
    color: var(--Dark-color);
    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    text-transform: capitalize;
  }

  .badge {
    text-transform: capitalize;
  }

  .pokeBackgronundColor {
    background: red;
  }

  .circlePercentaje {
    height: 40px;
    width: 40px;
    border: 3px solid var(--Dark-color);
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    margin: auto;
    .pokePercentaje {
      font-family: Karla;
      font-size: 15px;
      line-height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--Dark-color);
      margin-bottom: 2px;
      margin-top: 7px;
    }
  }

  .pokeHabilidatesText {
    font-family: Karla;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #4b4b4b;
    margin-top: 5px;
  }
}
</style>
