<template>
  <div class="ui transparent icon input">
    <input id="search-bar" v-model="searchTerm" type="text" placeholder="Search...">
    <i v-on:click="search()" class="search link icon"></i>
  </div>
</template>

<script>
  import Certificates from '../resources/certificates';

  export default {
    data() {
      return {
        searchTerm: ''
      };
    },
    methods: {
      search() {
        const results = [];

        if (this.searchTerm.length > 0) {
          const certificates = Certificates.data;

          for (let i = 0; i < certificates.length; i += 1) {
            if (certificates[i].title.toUpperCase().includes(this.searchTerm.toUpperCase())) {
              results.push(certificates[i]);
            }
          }
        }

        this.$emit('search', results);
      },
      get() {
        return Certificates.data;
      }
    }
  };
</script>
