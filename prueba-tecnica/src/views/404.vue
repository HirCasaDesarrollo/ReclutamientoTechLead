<template>
  <b-container fluid class="notFound d-flex justify-content-center pb-4">
    <b-row>
      <b-col cols="12">
        <h1 class="cuatrocientos">404</h1>
        <img class="roketImg" src="../assets/TeamRocket.png" alt="Logo - Pokemon pokedex" srcset="">
      </b-col>
      <b-col cols="12" class="mb-5">
        <div class="text-center">
          <p class="roketTitle">The rocket team <span class="roketTextDark">has won this time.</span></p>
          <b-button class="btn-notFound" :to="{ name: 'Home', force: true }">Return</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped lang="scss">
.notFound{
  background: #D93E30;
  height: 110%;


  .cuatrocientos{
    font-family: Karla;
    font-style: normal;
    font-weight: bold !important;
    font-size: 700px !important;
    line-height: 818px;
    letter-spacing: 4px;
    color: rgba(0, 0, 0, 0.5);
  }

  .roketImg{
    position: absolute;
    top: 20%;
    left: 30%;
  }

  .roketTitle{
    font-family: Karla;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #F2F2F2;

    .roketTextDark {
      color: var(--Dark-color);
    } 
  }

  .btn-notFound {
    background-color: #F2CB07;
    border-color: #F2CB07;
    box-shadow: inset 0 -9px 0 0 rgb(0 0 0 / 18%);
    border: transparent;
    border-radius: 8px;
    width: 10%;
    min-width: 200px;
    height: 60px;
    padding: 8px;
    cursor: pointer;
    font-size: 16px;
    color: rgb(33,33,33);
    outline: none;
    line-height: 40px;
    font-family: SourceSansPro;
    font-size: 16px;
    font-weight: 400;
  }

  .btn-notFound:hover, .btn-notFound:active{
     background: rgb(242,143,22);
     color: rgb(33,33,33);
  }
}
</style>