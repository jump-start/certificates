<template>
  <div>
    <div class="ui pointing menu">
      <a @click="reset" class="item">
        Home
      </a>

      <div class="right menu">
        <div class="item">
          <search-bar @search="update"></search-bar>
        </div>
      </div>
    </div>

    <div id="resultsCount" v-if="hasSearched">
      <i>{{numberOfResults}} results</i>
    </div>

    <table class="ui striped table accordion">
      <thead>
        <tr>
          <th class="one wide">
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in currentPageCertificates">
          <tr class="item">
            <td>
              <i class="dropdown icon hover" :class="{rotated: !activeCertificates[item.id], counterclockwise: !activeCertificates[item.id]}" @click="toggleActiveCertificate(item.id)"></i>
            </td>
            <td class="three wide">{{item.title}}</td>
            <td class="two wide">£{{item.price.toFixed(2)}}</td>
            <td>{{item.description.substring(0, 100)}}...</td>
          </tr>
          <tr v-if="activeCertificates[item.id]">
            <td colspan="1"></td>
            <td colspan="3">
              <div class="ui segment">
                {{item.description}}
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>

    <div v-if="isPaginationVisible" id="pagination">
      <pagination @pageChange="filterResults" :currentPage="page" :totalPages="totalPages"></pagination>
    </div>

  </div>
</template>

<style>
  #app {
    margin-top: 20px;
  }

  #resultsCount {
    padding-bottom: 10px;
  }

  #pagination {
    padding-top: 20px;
  }

  .hover {
    cursor: pointer;
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
        page: 1,
        activeCertificates: []
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
      },
      isPaginationVisible: function isPaginationVisible() {
        return this.certificates.length > Constants.resultsPerPage;
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
        this.page = 1;
        EventBus.$emit('reset');
      },
      filterResults(pageNumber) {
        this.page = pageNumber;
      },
      toggleActiveCertificate(certificateId) {
        this.activeCertificates.splice(certificateId, 1, !this.activeCertificates[certificateId]);
      }
    },
    components: {
      SearchBar,
      Pagination
    },
    created() {
      for (let i = 0; i < this.certificates.length; i += 1) {
        this.activeCertificates[this.certificates[i].id] = false;
      }
    }
  };

</script>
