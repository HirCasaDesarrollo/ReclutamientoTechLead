<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col lg="6" md="12">
          <b-jumbotron bg-variant="transparent">
            <template #header
              ><b>Find</b> all your favorite <b>Pokemon</b></template
            >

            <template #lead>
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </template>
            <div class="text-left">
              <b-button class="btn-pokemon" to="/pokedex"
                >See pokemons</b-button
              >
            </div>
          </b-jumbotron>
        </b-col>
        <b-col lg="6" md="12">
          <PokeImg />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PokeImg from "@/components/PokeImg.vue";

export default {
  name: "Home",
  components: {
    PokeImg,
  },
};
</script>

<style scoped lang="scss">
.home {
  background: linear-gradient(
    180deg,
    var(--Third-color) 0%,
    var(--Primary-color) 100%
  );
  overflow-x: hidden;
  min-height: 91vh;
}

.jumbotron {
  padding: 0px;
  color: var(--Dark-color);
  h1 {
    text-align: left;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }
  p {
    font-size: 32px;
    text-align: left;
    margin: 26px 0;
    font-family: SourceSansPro;
  }

  .btn-pokemon {
    background-color: #73d677;
    border-color: #73d677;
    box-shadow: inset 0 -9px 0 0 rgb(0 0 0 / 18%);
    border: transparent;
    border-radius: 8px;
    width: 10%;
    min-width: 200px;
    height: 60px;
    padding: 8px;
    cursor: pointer;
    font-size: 16px;
    color: rgb(33, 33, 33);
    outline: none;
    line-height: 40px;
    font-family: SourceSansPro;
    font-size: 16px;
    font-weight: 400;
  }

  .btn-pokemon:hover,
  .btn-pokemon:active {
    background: rgb(242, 143, 22);
    color: rgb(33, 33, 33);
  }
}
</style>
