<template lang="pug">
.container-modal(v-if="isVisible")
  .backdrop(v-on:click="close()")

  .wrapper
    button.close(v-on:click="close()")
      font-awesome-icon.icon(
        :icon="['fa', 'times']",
        size="2x",
        :style="{ color: 'black' }"
      )
    .image(
      :style="{ background: `linear-gradient(270deg, #221b1a  0.15%, ${color} 100%)` }"
    )
      p.name.text-center.text-blanco.mt-8.block(class="md:hidden") {{ pokeData.pokemon_v2_pokemons[0].name }}
      img(
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.pokemon_v2_pokemons[0].id}.png`"
      )
      .back-pokemon
      PokedexButtonsTypes.hidden(
        class="sm:block",
        :data="pokeData.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes"
      )

    .description(:style="backgroundColor")
      .counters.relative-container
        .generation-name
          .hidden(class="md:block")
            p.name {{ pokeData.pokemon_v2_pokemons[0].name }}
          .generation
            .title
              p Generation 1
            .circle-generation
              .counter 
                p 500
          PokedexButtonsTypes.block(
            class="sm:hidden",
            :data="pokeData.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes"
          )

        .ability
          div
            h6 Abilities
            p Overgrow - Chlorophyll

        .bars
          PokedexCardAbility
          PokedexCardAbility

        .inline-flex
          .circle
            .counter 
              p {{ pokeData.pokemon_v2_pokemons[0].weight }}
            p Weight
          .circle
            .counter 
              p {{ pokeData.pokemon_v2_pokemons[0].height }}
            p Height
          .circle
            .counter 
              p {{ pokeData.pokemon_v2_pokemons[0].weight }}
            p Weight
          .circle
            .counter 
              p {{ pokeData.pokemon_v2_pokemons[0].height }}
            p Height
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
    color: {
      type: String,
      default: "#732119",
    },
  },
  data() {
    return {
      isVisible: false,
      messageDuda: undefined,
    };
  },
  computed: {
    backgroundColor() {
      return {
        background: `linear-gradient(180deg, #221b1a 42.19%, ${this.color} 100%)`,
        
      };
    },
  },
  methods: {
    toggle() {
      console.log("popo");
      this.isVisible = !this.isVisible;
    },
    close() {
      console.log("popo");
      this.isVisible = !this.isVisible;
    },
  },
};
</script>


<style lang="postcss" scoped>
/**
// For modal form
**/
.container-modal {
  @apply flex justify-center flex-col items-center z-50 w-full h-full  fixed top-0 left-0;
}
.icon-eye {
  position: absolute;
  right: 8px;
  top: 37px;
  color: gray;
  cursor: pointer;
}

input[type="checkbox" i] {
  width: 20px;
  height: 20px;
}
.form-input input {
  @apply block w-full my-2 bg-gray-200 rounded-md py-1 pl-2;
}

.form-input textarea {
  @apply block w-full my-2 bg-gray-200 rounded-md py-1;
}

.form-input label {
  @apply text-xs text-black;
}
.container-modal .wrapper {
  overflow-y: inherit;
}
.container-modal .wrapper {
  @apply w-full md:w-11/12 lg:w-10/12 xl:w-7/12 text-morado   shadow-lg ;
}
.container-modal .wrapper .link-aviso {
  @apply text-azul italic;
}

.backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #21212171;
}

.wrapper {
  @apply flex flex-wrap rounded-md  shadow-md relative;
}
.description {
  @apply w-full md:w-7/12  text-blanco p-3 pb-8 relative lg:rounded-r-xl;
}
.image {
  @apply w-full md:w-5/12  text-right relative sm:static rounded-l-xl;
  background-size: cover;
}
.image img {
  @apply md:w-full w-8/12  text-right relative sm:static;
  margin-left: auto;
  margin-right: auto;
}
.name {
  @apply font-bold capitalize;
  font-size: 36px;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
}
.relative-container .inline-flex {
  @apply grid grid-cols-4 gap-4;
}
.circle {
  @apply text-xs  text-black text-center p-2 bg-blanco rounded-md shadow-md;
}
.circle .counter {
  @apply rounded-full border-black pt-2 mb-1;
  margin-left: auto;
  margin-right: auto;
  width: 40px;
  height: 40px;
  border-width: 3px;
}

.ability {
  @apply my-5 rounded-md shadow-md text-black w-full sm:w-8/12  p-5 bg-blanco;
}
.ability h6 {
  font-size: 31px;
}
.generation {
  @apply flex flex-wrap sm:justify-end sm:items-end items-center;
}
.generation-name {
  @apply grid grid-cols-2 my-2  sm:items-end;
}
.generation-name .generation {
  @apply name  text-right;
  font-size: 24px;
}
.generation-name .title {
  @apply order-2 sm:order-1 capitalize;
}
.circle-generation {
  @apply text-base  text-center rounded-full text-black pt-2 mb-1 ml-2 order-1 mr-2 sm:order-2;

  width: 40px;
  height: 40px;
  background-color: #f2cb07;
}

.bars {
  @apply my-5 rounded-md shadow-md text-black  grid grid-cols-1 sm:grid-cols-2 p-5 bg-blanco;
}


button.close {
  border-radius: 50%;
  position: absolute;
  top: -50px;
  right: 0;
  z-index: 1000;
  width: 50px;
}

@media (min-width: 1024px) {
  .container-modal .wrapper {
    height: auto;
    overflow-y: inherit;
  }
  .image img {
    height: 90%;
  }
}
@media (max-width: 768px) {
  .back-pokemon {
    @apply absolute h-24 w-full rounded-t-xl;
    background-color: #221b1a;
    bottom: 0;
    z-index: 0;
  }
  .image img {
    z-index: 1;
    margin-bottom: -30px;
  }
  .generation-name .title {
    font-size: 16px;
  }
  button.close {
    top: 15px;
    left: 0;
  }
  .container-modal .wrapper {
    overflow-y: auto;
  }
}
</style>
