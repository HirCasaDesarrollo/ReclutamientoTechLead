<template>
  <b-container class="mainPokedex">
    <b-row>
      <b-col cols="12" class="pt-5">
        <h4>800 Pokemons for you to choose your favorite</h4>
        <p>aqui un buscador</p>
        <p>aqui filtros</p>
      </b-col>
    </b-row>

    <card-pokemon/>

  </b-container>
</template>

<script>
import CardPokemon from '../components/CardPokemon.vue';

export default {
  data(){
      return{
        
      }
  },
  components: {
    CardPokemon
  },

  created(){
  },
  methods:{
    
  },
};
</script>

<style lang="scss" scoped>

</style>