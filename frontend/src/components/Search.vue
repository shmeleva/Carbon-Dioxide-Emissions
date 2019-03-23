<template>
  <div>
    <multiselect
      v-model="selectedCountries"
      :options="countries"
      :multiple="multiple"
      :searchable="true"
      :limit="3"
      :max-height="600"
    >
      <template slot="tag" slot-scope="{ option, remove }">
        <span class="badge badge-pill badge-primary badge-country p-1">
          <span class="mr-1">{{ option }}</span>
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
export default {
  name: "Search",
  data() {
    return {
      options: ["list", "of", "options"],
      selectedCountries: [],
      countries: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda"
      ]
    };
  },
  props: {
    multiple: Boolean
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
