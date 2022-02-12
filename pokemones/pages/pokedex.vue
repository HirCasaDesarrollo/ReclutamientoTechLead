<template lang="pug">
#pokedex
  Menu
  .container.p-3
    h1.initial-text 800
      b Pokemons
      | for you
      br(class="sm:hidden lg:block")
      | to choose your
      br(class="sm:hidden lg:block")
      |
      | favorite
  .container.p-3
    input.finder(
      v-model="busqueda",
      placeholder="Encuentra tu pokemón...",
      v-on:keyup.enter="findByName()"
    )
  .filters.p-3
    div
      button.boton-filter(v-on:click="showTypes = !showTypes") 
        p Tipo
        font-awesome-icon.icon(
          :icon="['fa', 'angle-down']",
          size="lg",
          :style="{ color: 'black' }"
        )
      .relative(v-if="showTypes")
        .dropdown
          .flex.flex-wrap.items-center.justify-center(
            v-for="pokemon in pokemonTypes" :key="pokemon.id",
          )
            input.mr-2(
              class="w-2/12",
              type="checkbox",
              :value="pokemon.id",
              v-model="selectedPokemonType"
            )
            p(class="w-6/12") {{ pokemon.name }}

    //- select.p-1(v-model="selectedPokemonType")
    //-   option(disabled, value="") Tipo
    //-   option(v-for="pokemon in pokemonTypes", v-bind:value="pokemon.id")
    //-     p {{ pokemon.name }}

    //- select.p-1(v-model="selectedPokemonType")
    //-   option(disabled, value="") Ataque
    //-   option(v-for="pokemon in pokemonTypes", v-bind:value="pokemon.id")
    //-     p {{ pokemon.name }}

    //- select.p-1(v-model="selectedPokemonType")
    //-   option(disabled, value="") Experiencia
    //-   option(v-for="pokemon in pokemonTypes", v-bind:value="pokemon.id")
    //-     p {{ pokemon.name }}

  .content-section-container.p-3
    PokedexDetails(
      :pokeData="pokeDataModel",
      ref="details",
      :color="pokeDataModel.color"
    )
    PokedexCardPokemon(
      v-for="poke in pokemonsGotten",
      :key="poke.pokemon_v2_pokemons[0].id",
      :pokeData="poke",
      @seeMoreDetails="seeMoreDetails"
    )

  Footer.p-3
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const pokemonTypes = await $axios.$post(
      "https://beta.pokeapi.co/graphql/v1beta",
      {
        query: `query samplePokeAPIquery {
        pokemon_v2_type {
            id
            name
        }
        }`,
      }
    );
    return { pokemonTypes: pokemonTypes.data.pokemon_v2_type };
  },
  data: () => ({
    busqueda: "",
    pokemonsGotten: [],
    pokemonTypes: [],
    selectedPokemonType: [],
    pokeDataModel: {},
    checkedNames: [],
    showTypes: false,
  }),
  methods: {
    async findByName() {
      const pokemonTypes = await this.$axios.$post(
        "https://beta.pokeapi.co/graphql/v1beta",
        {
          query: `
                query samplePokeAPIquery {
                  gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_pokemons: {}, name: {_eq: ${this.busqueda}}}, limit: 10) {
                    pokemon_v2_pokemons {
                      height
                      name
                      weight
                      id
                      pokemon_v2_pokemontypes {
                        pokemon_v2_type {
                          name
                          id
                        }
                        id
                      }
                    }
                    pokemon_v2_pokemoncolor {
                      name
                    }
                  }
                }

            `,
        }
      );

      this.pokemonsGotten = pokemonTypes.data.gen3_species;
      console.log(this.pokemonsGotten);
    },
    seeMoreDetails(poke) {
      this.pokeDataModel = poke;
      this.$refs.details.toggle();
    },
  },
  mounted() {
    //this.selectedPokemonType=1
  },
  watch: {
    async selectedPokemonType() {
      const pokemonTypes = await this.$axios.$post(
        "https://beta.pokeapi.co/graphql/v1beta",
        {
          query: `
             query samplePokeAPIquery {
                gen3_species: pokemon_v2_pokemonspecies(where: {pokemon_v2_pokemons: {pokemon_v2_pokemontypes: {type_id: {_in: [${this.selectedPokemonType}]}}}}, limit: 20) {
                  pokemon_v2_pokemons {
                    height
                    name
                    weight
                    id
                    pokemon_v2_pokemontypes {
                      pokemon_v2_type {
                        name
                        id
                      }
                      id
                    }
                  }
                  pokemon_v2_pokemoncolor {
                    name
                  }
                }
              }
            `,
        }
      );

      this.pokemonsGotten = pokemonTypes.data.gen3_species;
      console.log(this.pokemonsGotten);
    },
  },
};
</script>

<style lang="postcss" scoped>
.content-section-container {
  @apply grid grid-cols-1 container md:grid-cols-2 lg:grid-cols-3 gap-8;
}

.dropdown {
  @apply bg-gray-200 rounded-md shadow-md p-4 w-40 absolute;
  z-index: 100;
}
.initial-text {
  @apply text-center pt-8 pb-5;
  font-size: 35px;
}

input.finder {
  @apply block w-full  my-2 bg-gray-100 rounded-full p-3  shadow-lg;
}
input::placeholder {
  @apply text-gray-600;
}
.filters {
  @apply container flex flex-wrap my-5;
}
.filters select {
  @apply w-4/12 sm:w-2/12 mr-10  m-3 md:m-8 bg-gray-100 text-center rounded-md shadow-md;
}

.boton-filter {
  @apply mt-8 flex bg-gray-300 rounded-xl shadow px-4 justify-between w-40 py-1;
}

@media (max-width: 768px) {
  .initial-text {
    @apply text-center pt-8 pb-5;
    font-size: 25px;
  }
}
</style>
