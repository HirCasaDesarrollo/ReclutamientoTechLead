<template>
  <b-navbar toggleable="lg" class="mainNav">
    <b-container  class="bv-example-row"> 
      <b-navbar-brand to="/">
        <img src="../assets/logo.png" alt="Logo - Pokemon pokedex" srcset="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
      
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/pokedex">Pokédex</b-nav-item>
          <b-nav-item to="/legends">Legendaries</b-nav-item>
          <b-nav-item to="/documentation">Documentation</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
     
    </b-container>
  </b-navbar>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mainNav{
    background: var(--Third-color);
    box-shadow: 0px 4px 16px rgb(1 28 64 / 20%);
    .nav-item a{
        font-family: 'Karla', sans-serif;
        font-size: 20px;
        line-height: 20px;
        color: var(--Dark-color) !important;
        margin: 0 0.8em;
    }

    .nav-item a{
        border-bottom: 3px solid transparent;
    }
    .nav-item a:hover{
        border-bottom: 3px solid var(--Dark-color);
    }
}
</style>
