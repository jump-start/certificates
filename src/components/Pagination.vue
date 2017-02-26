<template>
  <div class="ui pagination menu">
    <a class="item" @click="setPage(currentPage - 1)">
      Previous
    </a>

    <template v-if="currentPage <= 4">
      <a class="item" :class="{active: pageNumber === currentPage}" v-for="pageNumber in 5" @click="setPage(pageNumber)">
        {{pageNumber}}
      </a>
      <a class="item disabled">
        ...
      </a>
      <a class="item" @click="setPage(totalPages)">
        {{totalPages}}
      </a>
    </template>

    <template v-if="currentPage >= 5 && currentPage <= totalPages - 4">
      <a class="item" @click="setPage(1)">
        1
      </a>
      <a class="item disabled">
        ...
      </a>
      <a class="item" :class="{active: pageNumber === currentPage}" v-for="pageNumber in range(currentPage - 2, currentPage + 2)" @click="setPage(pageNumber)">
        {{pageNumber}}
      </a>
      <a class="item disabled">
        ...
      </a>
      <a class="item" @click="setPage(totalPages)">
        {{totalPages}}
      </a>
    </template>

    <template v-if="currentPage >= totalPages - 3">
      <a class="item" @click="setPage(1)">
        1
      </a>
      <a class="item disabled">
        ...
      </a>
      <a class="item" :class="{active: pageNumber === currentPage}" v-for="pageNumber in range(totalPages - 4, totalPages)" @click="setPage(pageNumber)">
        {{pageNumber}}
      </a>
    </template>

    <a class="item" @click="setPage(currentPage + 1)">
      Next
    </a>
  </div>
</template>

<script>

export default {
  methods: {
    setPage(pageNumber) {
      if (pageNumber !== 0 && pageNumber <= this.totalPages) {
        this.$emit('pageChange', pageNumber);
      }
    },
    range(begin, end) {
      const offset = begin > end ? end : begin;
      const delta = Math.abs(end - begin);
      const result = [];
      for (let i = 0; i <= delta; i += 1) {
        result.push(i + offset);
      }

      return result;
    }
  },
  props: ['currentPage', 'totalPages']
};

</script>
