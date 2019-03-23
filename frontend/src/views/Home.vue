<template>
  <div class="home">
    <search :multiple="true"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Search from "@/components/Search.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Search
  }
};
</script>
