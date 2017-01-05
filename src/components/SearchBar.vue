<template>
  <div class="ui transparent icon input">
    <input id="search-bar" v-model="searchTerm" type="text" placeholder="Search...">
    <i v-on:click="search()" class="search link icon"></i>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchTerm: ''
      };
    },
    methods: {
      search() {
        return [
          {
            title: 'Certificates',
            description: 'Lorem ipsum'
          }
        ];
      }
    }
  };
</script>
