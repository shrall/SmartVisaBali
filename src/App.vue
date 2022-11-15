<template>
  <router-view></router-view>
</template>

<script>
export default {
  setup() {},
  watch: {
    $route(to) {
      document.title = `Smart Visa Bali - ${to.meta.title}`;
    },
  },
  methods: {},
  created() {},
};
</script>