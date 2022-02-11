<template lang="pug">
#pokedex
  div
    p.initial-text 800
      b Pokemons
      | for you to choose your favorite
  div
    input.finder(v-model="busqueda", placeholder="Encuentra tu pokemón...")
  .filters
    select.p-1(v-model="selectedPokemonType")
      option(disabled, value="") Tipo
      option(v-for="pokemon in pokemonTypes", v-bind:value="pokemon.id")
        p {{ pokemon.name }}

    select.p-1(v-model="selectedPokemonType")
      option(disabled, value="") Ataque
      option(v-for="pokemon in pokemonTypes", v-bind:value="pokemon.id")
        p {{ pokemon.name }}

    select.p-1(v-model="selectedPokemonType")
      option(disabled, value="") Experiencia
      option(v-for="pokemon in pokemonTypes", v-bind:value="pokemon.id")
        p {{ pokemon.name }}

  .content-section-container
    PokedexDetails(:pokeData="pokeDataModel", ref="details", :color="pokeDataModel.color")
    PokedexCardPokemon(
      v-for="poke in pokemonsGotten",
      :key="poke.id",
      :pokeData="poke.pokemon_v2_pokemon",
      @seeMoreDetails="seeMoreDetails"
    )

  Footer
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
    selectedPokemonType: "",
    pokeDataModel:{}
  }),
  methods: {
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
                pokemon_v2_type(where: {id: {_eq: ${this.selectedPokemonType}}}) {
                    id
                    name
                    pokemon_v2_pokemontypes(limit: 9) {
                    pokemon_v2_pokemon {
                        id
                        name
                        weight
                        height
                        pokemon_v2_pokemontypes {
                        pokemon_v2_type {
                            name
                            id
                        }
                        }
                    }
                    }
                }
                }
            `,
        }
      );

      this.pokemonsGotten =
        pokemonTypes.data.pokemon_v2_type[0].pokemon_v2_pokemontypes;
      console.log(this.pokemonsGotten);
    },
  },
};
</script>

<style lang="postcss" scoped>
#pokedex {
  @apply p-3 sm:p-0 container;
}

.content-section-container {
  @apply grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8;
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
  @apply flex flex-wrap;
}
.filters select {
  @apply w-2/12 mr-10 m-8 bg-gray-100 text-center rounded-md shadow-md;
}

/*no used*/
</style>
