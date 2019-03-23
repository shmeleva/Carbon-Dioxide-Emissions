<template>
  <div class="lifetime">
    <h3 class="text-primary font-weight-bold pb-3">
      How the situation has&nbsp;changed
      <br>during your lifetime?
    </h3>
    <div class="form-row">
      <div class="form-group col-12 col-lg-6">
        <label for="countrySearch">Country</label>
        <search id="countrySearch" :multiple="false"/>
      </div>
      <div class="form-group col-12 col-lg-6">
        <label for="ageInput">Age</label>
        <input id="ageInput" class="form-control" type="number" placeholder="Age">
      </div>
    </div>
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