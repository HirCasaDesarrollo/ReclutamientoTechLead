<template>
  <b-container class="mainPokedex">
    <b-row>
      <b-col cols="12" class="pt-5">
        <h4>800 <b>Pokemons</b> for you to choose your favorite</h4>
        <b-input-group class="mt-3">
          <b-form-input 
            placeholder="Ingresa ID o Nombre completo del Pokemon"
            v-model="busqueda"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-success" @click="startSearch()">Buscar</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-form-text id="input-live-help">Ingresa ID o Nombre completo del Pokemon</b-form-text>
      </b-col>
      <b-col cols="12">
        <b-button variant="outline-success" @click="startSearchAll()">Ver Todos</b-button>
        <p>aqui filtros</p>
      </b-col>
      
    </b-row>

    <card-pokemon :buscar="search"/>

  </b-container>
</template>

<script>
import CardPokemon from '../components/CardPokemon.vue';

export default {
  data(){
      return{
        search: null,
        busqueda: null
      }
  },
  components: {
    CardPokemon
  },

  created(){
  },
  methods:{
    startSearch(){
      this.search = this.busqueda
    },
    startSearchAll() {
      this.search = 'todos'
    }
  },
};
</script>

<style lang="scss" scoped>

</style>