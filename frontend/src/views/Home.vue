<template>
  <div class="home">
    <div>
      <search class="pb-3" :multiple="true"/>
      <div class="form-check">
        <input id="perCapitaCheckbox" class="form-check-input" type="checkbox" v-model="perCapita">
        <label class="form-check-label" for="perCapitaCheckbox">Per capita</label>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Search from "@/components/Search.vue";

export default {
  name: "home",
  data() {
    return {
      perCapita: false
    };
  },
  components: {
    HelloWorld,
    Search
  }
};
</script>
