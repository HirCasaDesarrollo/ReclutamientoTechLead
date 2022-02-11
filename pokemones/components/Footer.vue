<template lang="pug">
div
  .main-section-container
    .part-text
      p Make with ❤️ for the PokéSpartans team Platzi Master

    .part-team
      p.font-bold Ours Team
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style lang="postcss" scoped>
.main-section-container {
  @apply flex flex-wrap text-center pt-8 pb-20  px-8 lg:w-9/12 lg:w-full;
}
.part-text {
  @apply order-2 md:order-1 w-full md:w-9/12 lg:pl-32;
}
.part-team {
  @apply order-1 md:order-2 w-full md:w-3/12 sm:w-full  lg:text-left sm:text-right;
}
</style>
