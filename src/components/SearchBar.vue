<template>
  <div v-bind:class="{ error: !isSearchValid, 'loading': isSearching }" class="ui transparent icon input">
    <input id="search-bar" v-model="searchTerm" type="text" placeholder="Search...">
    <i v-on:click="search()" class="search link icon"></i>
  </div>
</template>

<script>
  import Certificates from '../resources/certificates';

  export default {
    all() {
      return Certificates.data;
    },
    data() {
      return {
        searchTerm: '',
        isSearchValid: true,
        isSearching: false
      };
    },
    methods: {
      search() {
        this.isSearching = true;

        const results = [];

        if (this.searchTerm.length > 0) {
          this.isSearchValid = true;

          const certificates = Certificates.data;

          for (let i = 0; i < certificates.length; i += 1) {
            if (certificates[i].title.toUpperCase().includes(this.searchTerm.toUpperCase())) {
              results.push(certificates[i]);
            }
          }
        } else {
          this.isSearchValid = false;
        }

        this.$emit('search', results);

        this.isSearching = false;
      }
    }
  };
</script>
