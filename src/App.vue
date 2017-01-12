<template>
  <div>
    <div class="ui pointing menu">
      <a class="item">
        Home
      </a>

      <div class="right menu">
        <div class="item">
          <search-bar></search-bar>
        </div>
      </div>
    </div>
    <!-- <div class="ui segment">
      <transition name="fade" mode="out-in">
        <router-view class="child-view"></router-view>
      </transition>
    </div> -->
    <li v-for="(item, index) in certificates">
      {{item.title}}
    </li>
  </div>
</template>

<style>
  #app {
    margin-top: 20px;
  }
</style>

<script>
  import SearchBar from './components/SearchBar';
  import Certificates from './resources/certificates';

  export default {
    data() {
      return {
        certificates: Certificates.data
      };
    },
    components: {
      SearchBar
    }
  };

</script>
