<template>
  <div>
    <div class="ui pointing menu">
      <a v-on:click="reset" class="item">
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
    <div id="resultsCount" v-if="hasSearched">{{numberOfResults}} results</div>

    <table class="ui striped table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in currentPageCertificates" class="item">
          <td class="three wide">{{item.title}}</td>
          <td class="two wide">£{{item.price.toFixed(2)}}</td>
          <td>{{item.description}}</td>
        </tr>
      </tbody>
    </table>

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
        hasSearched: false,
        numberOfResults: 0,
        certificates: SearchBar.all(),
        currentPageCertificates: SearchBar.all().slice(0, 25)
      };
    },
    methods: {
      update(data) {
        this.hasSearched = true;
        this.certificates = data;
        this.currentPageCertificates = data.slice(0, 25);
        this.numberOfResults = data.length;
      },
      reset() {
        SearchBar.clear();
        this.hasSearched = false;
        this.certificates = SearchBar.all();
        this.currentPageCertificates = SearchBar.all().slice(0, 25);
      }
    },
    components: {
      SearchBar,
      Pagination
    }
  };

</script>
