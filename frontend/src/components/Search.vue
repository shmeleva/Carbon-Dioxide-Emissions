<template>
  <div>
    <multiselect
      v-model="selectedCountries"
      :options="countries"
      :multiple="multiple"
      :searchable="true"
      :limit="5"
      :max-height="600"
      openDirection="below"
      :placeholder="multiple ? 'Countries' : 'Country'"
    >
      <template slot="tag" slot-scope="{ option, remove }">
        <span class="badge badge-pill badge-primary badge-country p-1">
          <span class="mr-1">{{ option.name }}</span>
          <span class="badge-country-remove" @click="remove(option)">
            <font-awesome-icon :icon="['fas', 'times-circle']"/>
          </span>
        </span>
      </template>
      <template slot="singleLabel" slot-scope="props">
        <span>{{ props.option.name }}</span>
      </template>
      <template slot="option" slot-scope="props">
        <span>{{ props.option.name }}</span>
      </template>
      <span slot="noResult">Oops! No countries found.</span>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      selectedCountries: [],
      countries: []
    };
  },
  props: {
    multiple: Boolean
  },
  async mounted() {
    try {
      var response = await axios.get("/countries?compact=true", {
        responseType: "json"
      });
      this.countries = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {},
  components: {
    Multiselect
  }
};
</script>

<style scoped lang="scss">
.badge-country {
  margin-left: 5px;
  margin-bottom: 8px;
}
.badge-country-remove {
  cursor: pointer;
}
</style>
