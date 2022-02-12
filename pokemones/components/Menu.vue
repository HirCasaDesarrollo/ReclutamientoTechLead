<template lang="pug">
.menu-wrapper
  .backdrop(v-on:click="isActiveMenuMobile = !isActiveMenuMobile" v-if="isActiveMenuMobile")
  .menu-mobile
    .menu-container-mobile
      .menu-logo-mobile
        button(@click="$router.push('/')")
          img.w-72.inline-block(src="@/assets/img/logo.svg")
      .menu-icon
        font-awesome-icon(
          v-on:click="isActiveMenuMobile = !isActiveMenuMobile",
          :icon="['fa', 'bars']",
          size="2x",
          :style="{ color: 'black' }"
        )

    .mobile-items(v-if="isActiveMenuMobile")
      div(v-on:click="isActiveMenuMobile = false")
        img.w-32.inline-block.my-5(src="@/assets/img/logo.svg")
      div(v-on:click="isActiveMenuMobile = false")
        NuxtLink.link-mobile(to="/") Home
      div(v-on:click="isActiveMenuMobile = false")
        NuxtLink.link-mobile(to="/pokedex") Pokédex
      div(v-on:click="isActiveMenuMobile = false")
        NuxtLink.link-mobile(to="/legendaries") Legendaries
      div(v-on:click="isActiveMenuMobile = false")
        NuxtLink.link-mobile(to="/documentation") Documentation

  .menu
    .menu-container
      .menu-logo
        NuxtLink(to="/")
          img(src="@/assets/img/logo.svg")
      .menu-items(class="w-9/12 xl:w-9/12")
        NuxtLink.link(to="/") Home
        NuxtLink.link(to="/pokedex") Pokédex
        NuxtLink.link(to="/legendaries") Legendaries
        NuxtLink.link(to="/documentation") Documentation

    
</template>
<script>
export default {
  data() {
    return {
      isActiveMenuMobile: false,
    };
  },
};
</script>
<style lang="postcss" scoped>
.menu-wrapper {
  background-color: #f5db13;
}
.menu {
  @apply   mx-auto hidden md:flex w-full  justify-center items-center py-5 shadow-md;
}
.menu-mobile {
  @apply container mx-auto block md:hidden;
}
.menu-container {
  @apply flex flex-wrap lg:w-10/12 items-center justify-end;
}
.menu-container-mobile {
  @apply flex justify-between py-5 px-4 relative;
}
.menu-logo {
  @apply w-3/12;
}
.menu-logo img {
  @apply w-10/12 xl:w-full;
  width: 157.17px;
}
.menu-logo-mobile {
  @apply w-6/12 ;
}
.menu-logo-mobile img {
  width: 58.41px;
}
.menu-icon {
  @apply w-2/12 text-right;
}
.menu-items {
  @apply flex justify-end;
}
.mobile-items {
  @apply  py-4 fixed w-full left-0 text-center rounded-b-xl;
  z-index: 10000;
  top: 0;
  background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
}
.mobile-items .link {
  @apply block;
}
.link-mobile {
  @apply text-black p-2 self-end block;
  font-size: 27px;
}
.link {
  @apply text-black  ml-6 self-end  text-base mr-10  py-2;
  font-size: 25px;
}
.menu-container .nuxt-link-exact-active {
  @apply border-b-2 border-black;
}
.link:hover {
  font-weight: bold;
}

.icon {
  @apply ml-4;
}

@media (min-width: 768px) {
  .link {
    font-size: 19px;
  }
  .menu-logo img {
    width: 121px;
  }
}

.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #21212171;
}


</style>
