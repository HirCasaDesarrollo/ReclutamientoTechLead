<template lang="pug">
.card-pokemon(v-on:click="seePokemon()")
  .back
    .image
      img(
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`"
      )
    .contentInfo
      .name
        p {{ pokeData.name }}
      .pokebola
        img.w-10.inline-block(src="@/assets/img/goldenPokeball.svg")
</template>
<script>
export default {
  props: {
    pokeData: {
      type: Object,
      default: function () {
        return {
          name: undefined,
          id: undefined,
        };
      },
    },
  },
  methods: {
    seePokemon() {
      console.log("fdgdfg");
      this.$emit("seeMoreDetails", this.pokeData);
      
    },
  },
  data() {
    return {
      isVisible: false,
      backgroundColorRandom:
        "#" + Math.floor(Math.random() * 16777215).toString(16),
    };
  },
};
</script>

<style lang="postcss" scoped>
.card-pokemon {
  @apply w-2/12 relative p-4 md:p-2 lg:p-4;
  cursor: pointer;
  filter: grayscale(70%);
}

.card-pokemon .back {
  @apply shadow-md rounded-2xl;

  background: radial-gradient(
    677.11% 487.95% at 102.13% -20%,
    #b57e10 0%,
    #b57e10 20.31%,
    #f9df7b 39.58%,
    #fff3a6 59.38%,
    #f9df7b 78.13%,
    #b57e10 100%
  );
}
.card-pokemon .image img {
  position: relative;
  top: 0px;
  left: -22px;
  z-index: 100;
  width: 101%;
  max-width: 105%;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
.card-pokemon .name {
  @apply w-9/12;
  font-size: 18px;
}
.card-pokemon .pokebola {
  @apply w-3/12;
}

.card-pokemon .contentInfo {
  @apply flex flex-wrap rounded-2xl bg-blanco md:p-2 lg:p-4 justify-center items-center;
}

@media (min-width: 768px) {
  .card-pokemon .image {
    min-height: 90px;
  }
  .card-pokemon .image img {
    top: 0px;
    left: 0px;
  }
}
@media (min-width: 1024px) {
  .card-pokemon .image img {
    top: 0px;
    left: -22px;
  }
}
</style>
