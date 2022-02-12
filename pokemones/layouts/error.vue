<template lang="pug">
.main-section-container
  .container.text-center
    img.margin-auto(src="@/assets/img/404.png")
  div
    p.text-blanco The rocket team 
      br(class="lg:hidden sm:block")
      span.text-black  has won this time.
    button.boton-verde.mt-8(v-on:click="returnHome()") Return
</template>

<script>
export default {
  name: "404",
  methods: {
    returnHome() {
      this.$nuxt.$router.push("/");
    },
  },
};
</script>

<style lang="postcss" scoped>
.main-section-container {
  @apply text-center  h-full py-36 lg:py-20 p-3;
  background-color: #d93e30;
}
.main-section-container img {
  margin: auto;
}
.main-section-container p {
  @apply text-center;
  font-size: 48px;
}

.boton-verde {
  @apply w-10/12 sm:w-auto px-10 py-3 lg:py-3 lg:px-7 text-2xl;
  background: #f2cb07;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
}

@media (min-width: 768px) {
  .main-section-container p {
    @apply text-center;
    font-size: 45px;
  }
}
@media (max-width: 768px) {
  .main-section-container p {
    @apply text-center;
    font-size: 25px;
  }
}
</style>
