<template>
  <div class="pokeBannerContainer">
    <img src="../assets/Cloud.png" class="cloud" alt="" srcset="" />
    <img src="../assets/Cloud.png" class="cloud2" alt="" srcset="" />
    <img src="../assets/PokeBall1.png" class="pokeball1" alt="" srcset="" />
    <img src="../assets/Pikachu.png" class="pikachu" alt="" srcset="" />
    <img src="../assets/Pokeball2.png" class="pokeball2" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  name: "PokeImg",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pokeBannerContainer {
  position: relative;
  width: 100%;
  min-height: 100%;
  height: auto;
  img {
    position: relative;
  }
  .cloud {
    position: absolute;
    z-index: 2;
    top: 255px;
    left: 60px;
    width: 20%;
  }
  .cloud2 {
    position: absolute;
    z-index: 3;
    top: 50px;
    right: 60px;
    width: 60%;
  }
  .pokeball1 {
    position: absolute;
    z-index: 4;
    top: 50px;
    left: -20px;
    width: 20%;
  }
  .pikachu {
    position: absolute;
    z-index: 4;
    top: 30px;
    left: -20px;
    width: 80%;
  }

  .pokeball2 {
    position: absolute;
    z-index: 5;
    top: 30px;
    right: -165px;
    overflow: hidden;
    width: 50%;
  }
}
</style>
