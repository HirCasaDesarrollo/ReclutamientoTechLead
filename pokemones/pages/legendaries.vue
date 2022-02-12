<template lang="pug">
#legendaries
  Menu
  .container.p-3
    h1.initial-text Legendaries
    .selectedPokemon.flex.flex-wrap
      .w-full(class="md:w-7/12")
        img(
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemonLegendary.id}.png`"
        )
      .w-full(class="md:w-5/12")
        p.title {{selectedPokemonLegendary.name}} 
        p.description Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        .abilityConteiner
          PokedexCardAbility(v-for="ability in arrayAbilities" :key="ability.title" :data="ability")

  .slider-container.p-3
    .leftArrow
      button.close(v-on:click="prevSlide()")
        span
          font-awesome-icon.icon.ml-3(
            :icon="['fa', 'chevron-left']",
            size="3x",
            :style="{ color: 'white' }"
          )
    .contentSlider
      flicking.text-black(
        ref="sliderLegendaries",
        :options="{ align: 'prev', circular: true, panelsPerView: widthPantalla < 768 ? 2 : 6 }"
      )
        LegendariesItemSlider(
          v-for="poke in pokemonLegendaries",
          :key="poke.id",
          :pokeData="poke",
          @seeMoreDetails="seeMoreDetails"
        )

    .rightArrow
      button.close(v-on:click="nextSlide()")
        span
          font-awesome-icon.icon.ml-3(
            :icon="['fa', 'chevron-right']",
            size="3x",
            :style="{ color: 'white' }"
          )
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const pokemonLegendaries = await $axios.$post(
      "https://beta.pokeapi.co/graphql/v1beta",
      {
        query: `query samplePokeAPIquery {
            gen3_species: pokemon_v2_pokemonspecies(limit: 10, where: {is_legendary: {_eq: true}}) {
                name
                id
                is_legendary
                base_happiness
            }
        }
        `,
      }
    );
    return { pokemonLegendaries: pokemonLegendaries.data.gen3_species, selectedPokemonLegendary:pokemonLegendaries.data.gen3_species[0] };
  },
  data: () => ({
    arrayAbilities: [
      {
        title: "Healthy Points",
        amount: 5242,
        percent: 345,
      },
      {
        title: "Experience",
        amount: 52,
        percent: 345,
      },
      {
        title: "Attack",
        amount: 522,
        percent: 345,
      },
      {
        title: "Defense",
        amount: 444,
        percent: 345,
      },
      {
        title: "Special Attack",
        amount: 785,
        percent: 345,
      },
      {
        title: "Special Defense",
        amount: 415,
        percent: 345,
      },
    ],
    widthPantalla: window.innerWidth,
    pokemonLegendaries: [],
    selectedPokemonLegendary: {},
  }),
  methods: {
    nextSlide() {
      this.$refs.sliderLegendaries.next();
    },
    prevSlide() {
      this.$refs.sliderLegendaries.next();
    },
    seeMoreDetails(data) {
        console.log('fdgdfg')
      this.selectedPokemonLegendary=data
    },
  },
};
</script>

<style lang="postcss" scoped>
#legendaries {
  background-color: #212121;
}
h1.initial-text {
  @apply text-blanco  border-blanco border-b-2 my-5;
  font-size: 72px;
}

.slider-container {
  @apply flex flex-wrap justify-center items-center;
}
.slider-container .leftArrow,
.slider-container .rightArrow {
  @apply w-1/12;
}
.slider-container .contentSlider {
  @apply w-10/12;
}

.selectedPokemon .title {
  @apply capitalize;
  font-size: 72px;
}
.selectedPokemon {
  @apply text-blanco;
}

.abilityConteiner {
  @apply my-5 grid grid-cols-2 sm:grid-cols-2;
}
@media (max-width: 768px) {
  h1.initial-text {
    font-size: 44px;
  }
  .selectedPokemon .title {
    font-size: 62px;
  }
}
</style>
