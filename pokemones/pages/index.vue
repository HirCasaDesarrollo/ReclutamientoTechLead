<template lang="pug">

#home
  Menu
  .main-section-container
    .part-text
      h1.part-title
        span
          b Find 
        span all your
          br
        span favorite 
          br(class="sm:hidden lg:block")
        span
          b Pokemon
      h2.part-subtitle You can know the type of Pokemon, its strengths, disadvantages and abilities
      button.boton-verde.mt-8(v-on:click="seePokemons()") See pokemons

    .part-img
      img(src="@/assets/img/BannerComplete.svg")
  Footer
</template>

<script>
export default {
  methods: {
    seePokemons() {
      this.$nuxt.$router.push("/pokedex");
    },
  },
};
</script>

<style lang="postcss" scoped>
#home {
  /* yellowGradient */
  background: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
}
.main-section-container {
  @apply flex flex-wrap  lg:pt-24  lg:w-9/12 lg:w-full;
}
.part-title {
  font-size: 42px;
  line-height: 49.1px;
}

.part-text {
  @apply w-full  order-2 lg:order-1 lg:w-5/12 lg:pl-32;
}
.part-img {
  @apply w-full  order-1 lg:order-2 lg:w-7/12 sm:w-full md:w-full text-right;
}
.part-subtitle {
  @apply mt-3 lg:mt-8;
  font-size: 24px;
}
.part-img img {
  @apply w-full float-right;
}

.boton-verde {
  @apply w-10/12 sm:w-auto px-10 py-3 lg:py-3 lg:px-7 text-2xl;
  background: #73d677;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
}
.part-text {
  @apply text-center lg:text-left;
}

@media (min-width: 1024px) {
  .part-title {
    font-size: 72px;
    line-height: 84.17px;
  }
  .part-text h2 {
    position: relative;
    width: 512px;
  }
  .part-subtitle {
    @apply mt-3 lg:mt-8;
    font-size: 32px;
  }
}
</style>
