<template>
  <div id="app">
    <div class="ui centered grid">
      <div class="six wide tablet ten wide computer column">
        <hello></hello>
      </div>
    </div>
  </div>
</template>

<script>
  import Hello from './components/Hello';

  export default {
    name: 'app',
    components: {
      Hello,
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
</style>
