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
      <pagination v-on:pageChange="filterResults" :currentPage="page" :totalPages="totalPages"></pagination>
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
  import EventBus from './event-bus';
  import Constants from './constants';

  export default {
    data() {
      return {
        hasSearched: false,
        numberOfResults: 0,
        certificates: SearchBar.all(),
        page: 1
      };
    },
    computed: {
      totalPages: function totalPages() {
        return Math.ceil(this.certificates.length / Constants.resultsPerPage);
      },
      currentPageCertificates: function currentPageCertificates() {
        const offset = (this.page - 1) * Constants.resultsPerPage;

        return this
          .certificates
          .slice(offset, Constants.resultsPerPage + offset);
      }
    },
    methods: {
      update(data) {
        this.hasSearched = true;
        this.certificates = data;
        this.numberOfResults = data.length;
      },
      reset() {
        this.hasSearched = false;
        this.certificates = SearchBar.all();
        this.currentPageCertificates = SearchBar.all().slice(0, Constants.resultsPerPage);
        this.page = 0;
        EventBus.$emit('reset');
      },
      filterResults(pageNumber) {
        this.page = pageNumber;
      }
    },
    components: {
      SearchBar,
      Pagination
    }
  };

</script>
