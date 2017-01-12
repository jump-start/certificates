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
        searchTerm: '',
        result: []
      };
    },
    methods: {
      search() {
        this.result = Certificates.data;
      }
    }
  };
</script>
