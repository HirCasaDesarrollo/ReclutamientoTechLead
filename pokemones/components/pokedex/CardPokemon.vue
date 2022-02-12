<template lang="pug">
.container-poke(@click="seeMoreDetails()")
  .description
    .relative-container
      p.name.mb-5.capitalize {{ pokeData.pokemon_v2_pokemons[0].name }}
      .inline-flex
        .circle
          .counter 
            p {{ pokeData.pokemon_v2_pokemons[0].weight }}
          p Weight {{pokeData.pokemon_v2_pokemoncolor.name}}
        .circle
          .counter 
            p {{ pokeData.pokemon_v2_pokemons[0].height }}
          p Height
      .inline-flex
        button.verde.mt-2.mr-4(
          v-on:click="seePokemons()",
          v-if="pokeData.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0]"
        ) {{ pokeData.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name }}
        button.azul.mt-2(
          v-on:click="seePokemons()",
          v-if="pokeData.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[1]"
        ) {{ pokeData.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes[1].pokemon_v2_type.name }}

  .image(:style="backgroundBanner")
</template>
<script>
export default {
  props: {
    pokeData: {
      type: Object,
      default: function () {
        return {
          pokemon_v2_pokemons: [
            {
              name: undefined,
              id: undefined,
              weight: undefined,
              height: undefined,
              pokemon_v2_pokemontypes: {},
            },
          ],
          pokemon_v2_pokemoncolor:{}
        };
      },
    },
  },
  data() {
    return {
      isVisible: false,
      
    };
  },
  methods: {
    seeMoreDetails() {
      this.pokeData.color = this.pokeData.pokemon_v2_pokemoncolor.name;
      this.$emit("seeMoreDetails", this.pokeData);
    },
  },
  computed: {
    backgroundBanner() {
      return {
        backgroundColor: this.pokeData.pokemon_v2_pokemoncolor.name,
        backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokeData.pokemon_v2_pokemons[0].id}.png)`,
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
.container-poke {
  @apply flex flex-wrap rounded-md  shadow-md relative;
}
.description {
  @apply w-5/12 bg-gray-100 p-3 relative rounded-l-md;
}
.relative-container {
  margin-left: 25px;
}
.image {
  @apply w-7/12 rounded-r-md;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
}
.name {
  @apply font-bold;
  font-size: 18px;
}
.circle {
  @apply text-xs text-center mr-3;
}
.circle .counter {
  @apply rounded-full border-black pt-2 mb-1;
  width: 40px;
  height: 40px;
  border-width: 3px;
}

button {
  @apply w-10/12 sm:w-auto px-3 py-1 lg:py-0 lg:px-3 text-xs;

  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
}
.verde {
  background: #73d677;
}
.azul {
  background: #07d6f2;
}
</style>
