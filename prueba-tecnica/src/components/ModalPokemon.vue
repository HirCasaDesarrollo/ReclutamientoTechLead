<template>
  <b-container fluid class="pokeModal">
    <b-row class="text-center">
      <b-col :class="'pokeBackgronund'+pokemonInfo.type" md="5">
        <b-card-img :src="pokemonInfo.img" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
    
      <b-col md="7" :class="'pokeBackgronundDegre'+pokemonInfo.type">
        <b-row>
          <b-col cols="12">
            <p class="pokeCardTitle">{{pokemonInfo.name}}</p>
          </b-col>

          <b-col cols="8" class="mb-4">
            <div class="pokeAbilities pt-1 pb-1">
              <p class="mb-0 pt-2">Abilities</p>
              <p class="pb-2 mb-0">{{pokemonInfo.ability}}</p>
            </div>
          </b-col>

          <b-col cols="12" class="mb-4">
            <div class="pokeStadistic">
              <b-row>
                <b-col>
                  <p class="pokeStadisticTitle">Healthy Points 0/100</p>
                  <p class="pokeStadisticPoints">{{pokemonInfo.hp}}</p>
                  <b-progress :value="pokemonInfo.hp" variant="success" ></b-progress>
                </b-col>
                <b-col>
                  <p class="pokeStadisticTitle">Experience</p>
                  <p class="pokeStadisticPoints">1 000 000</p>
                  <b-progress :value="75" variant="warning"></b-progress>
                </b-col>
              </b-row>
            </div>
          </b-col>

          <b-col cols="12" class="mb-4">
            <div class="circle">
              <b-row>
                <b-col cols="3">
                  <div class="circleMain">
                    <div class="circlePercentaje">
                        <p class="pokePercentaje">{{pokemonInfo.defense}}</p>
                    </div>
                    <p class="pokeHabilidatesText">Defense</p>
                  </div>
                </b-col>

                <b-col cols="3">
                  <div class="circleMain">
                    <div class="circlePercentaje">
                        <p class="pokePercentaje">{{pokemonInfo.attack}}</p>
                    </div>
                    <p class="pokeHabilidatesText">Attack</p>
                  </div>
                </b-col>

                <b-col cols="3">
                  <div class="circleMain">
                    <div class="circlePercentaje">
                      <p class="pokePercentaje">{{pokemonInfo.specialAttack}}</p>
                    </div>
                    <p class="pokeHabilidatesText">Sp Attack</p>
                  </div>
                </b-col>

                <b-col cols="3">
                  <div class="circleMain">
                    <div class="circlePercentaje">
                        <p class="pokePercentaje">{{pokemonInfo.specialDefense}}</p>
                    </div>
                    <p class="pokeHabilidatesText">Sp Defense</p>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  name: 'ModalPokemon',
  props:{
    pokemonInfo: Object,
  },
  data(){
      return{
      }
  },

  created(){
  },
  methods:{
    
  },
};
</script>

<style lang="scss" scoped>
.pokeModal {

  .pokeCardTitle {
    text-align: left;
    font-family: Karla;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #FDFDFD;
    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    text-transform: capitalize;
  }

  .pokeAbilities {
    background: #FDFDFD;
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    border-radius: 8px;
    padding: 0px 10px;

    p{
      font-family: Karla;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: #000000;

    }
  }

  .pokeStadistic {
    background: #FDFDFD;
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    border-radius: 8px;
    padding: 10px 10px;

    .pokeStadisticTitle{
      font-family: Karla;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      margin-bottom: 0px;
      text-align: left;
    }
  
    .pokeStadisticPoints {
      font-family: Karla;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      text-align: left;
      margin: 0px;
    }
  }


  .badge {
    text-transform: capitalize;
  }

  .pokeBackgronundColor{
    background: red;
  }

  .circle {
    padding: 10px 13px;
  }
 
  .circleMain {
    background: #FDFDFD;
    box-shadow: 4px 4px 24px rgba(1, 17, 38, 0.2);
    border-radius: 8px;
    padding-bottom: 10px;
    padding-top: 10px;

    .circlePercentaje{
      height:40px;
      width:40px;
      border:3px solid var(--Dark-color);
      -moz-border-radius:50px;
      -webkit-border-radius:50px;
      border-radius:50px;
      margin: auto;
      .pokePercentaje {
        font-family: Karla;
        font-size: 15px;
        line-height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--Dark-color);
        margin-bottom: 2px;
        margin-top: 7px;
      }
    }
  }

  .pokeHabilidatesText {
    font-family: Karla;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #4B4B4B;
    margin-top: 5px;
    margin-bottom: 0;
  }

}

</style>