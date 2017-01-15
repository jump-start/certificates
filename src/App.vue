<template>
  <div>
    <div class="ui pointing menu">
      <a class="item">
        Home
      </a>

      <div class="right menu">
        <div class="item">
          <search-bar v-on:search="update"></search-bar>
        </div>
      </div>
    </div>
    <!-- <div class="ui segment">
      <transition name="fade" mode="out-in">
        <router-view class="child-view"></router-view>
      </transition>
    </div> -->
    <div id="resultsCount" v-if="hasSeached">{{numberOfResults}} results</div>

    <div class="ui list">
      <div v-for="(item, index) in certificates" class="item">
        <i class="book icon"></i>
        <div class="content">
          <a class="header">{{item.title}}</a>
          <div class="description">{{item.description}}</div>
        </div>
      </div>
    </div>

    <div id="pagination">
      <pagination></pagination>
    </div>

  </div>
</template>

<style>
  #app {
    margin-top: 20px;
  }

  #resultsCount {
    padding-bottom: 10px;
    font-style: italic;
  }

  #pagination {
    padding-top: 20px;
  }
</style>

<script>
  import SearchBar from './components/SearchBar';
  import Pagination from './components/Pagination';

  export default {
    data() {
      return {
        hasSeached: false,
        numberOfResults: 0,
        certificates: SearchBar.all()
      };
    },
    methods: {
      update(data) {
        this.hasSeached = true;
        this.certificates = data;
        this.numberOfResults = data.length;
      }
    },
    components: {
      SearchBar,
      Pagination
    }
  };

</script>
