<template>
  <div class="home">
    <div>
      <search class="pb-3" :multiple="true" @select="add" @remove="remove"/>
      <div class="form-check">
        <input id="perCapitaCheckbox" class="form-check-input" type="checkbox" v-model="perCapita">
        <label class="form-check-label" for="perCapitaCheckbox">Per capita</label>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "home",
  data() {
    return {
      countries: [],
      perCapita: false
    };
  },
  methods: {
    async add(country) {
      try {
        var response = await axios.get("/countries", {
          responseType: "json",
          params: {
            compact: "false",
            codes: country.code
          }
        });
        if (response.data.length) {
          this.countries.push(response.data[0]);
          console.log(this.countries);
        }
      } catch (error) {
        console.error(error);
      }
    },
    remove(country) {
      _.remove(this.countries, {
        code: country.code
      });
      console.log(this.countries);
    }
  },
  components: {
    Search
  }
};
</script>
