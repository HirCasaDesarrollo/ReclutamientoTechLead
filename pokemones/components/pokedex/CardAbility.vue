<template lang="pug">
.content
  p {{data.title}}
  p.font-bold.mb-1 {{data.amount}}
  .barra-verde
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          title: "hgjg",
          amount: 45,
          percent: 345,
        };
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.content {
  @apply sm:mb-3;
}
.barra-verde {
  @apply w-full rounded-md;
  max-width: 80%;
  height: 5px;
}
.barra-verde {
  background: linear-gradient(270deg, #64d368 0.15%, #64d368 70.88%);
}
</style>
