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
      label="name"
      track-by="code"
      @select="select"
      @remove="remove"
    >
      <template slot="tag" slot-scope="{ option, remove }">
        <span class="badge badge-pill badge-primary badge-country p-1">
          <span class="mr-1">{{ option.name }}</span>
          <span class="badge-country-remove" @click="remove(option)">
            <font-awesome-icon :icon="['fas', 'times-circle']"/>
          </span>
        </span>
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
    if (this.countries && this.countries.length) {
      return;
    }
    try {
      var response = await axios.get("/countries", {
        responseType: "json",
        params: {
          compact: "true"
        }
      });
      this.countries = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    select(country) {
      this.$emit("select", country);
    },
    remove(country) {
      this.$emit("remove", country);
    }
  },
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
