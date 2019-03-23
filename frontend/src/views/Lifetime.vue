<template>
  <div class="lifetime">
    <search :multiple="false"/>
    <input class="form-control" type="number">
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
export default {
  name: "Lifetime",
  data() {
    return {};
  },
  methods: {},
  components: {
    Search
  }
};
</script>

<style scoped lang="scss">
</style>