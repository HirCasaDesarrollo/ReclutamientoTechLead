<template lang="pug">
.pokemon-types
  button.verde.mt-2.mr-4(
    v-on:click="seePokemons()",
    v-if="data[0]"
  ) {{ data[0].pokemon_v2_type.name }}
  button.azul.mt-2.mr-4(
    v-on:click="seePokemons()",
    v-if="data[1]"
  ) {{ data[1].pokemon_v2_type.name }}
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
  },
};
</script>

<style lang="postcss" scoped>
.pokemon-types {
  @apply relative text-right sm:static;
}
.pokemon-types button {
  @apply sm:w-auto px-4 py-1 lg:py-0 lg:px-3 text-xs text-black ; 
  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
}
.pokemon-types button.verde {
  background: #73d677;
}
.pokemon-types button.azul {
  background: #07d6f2;
}
</style>
