<template>
  <div>
    <div class="ui pointing menu">
      <a class="item">
        Home
      </a>

      <div class="right menu">
        <div class="item">
          <div class="ui transparent icon input">
            <input type="text" placeholder="Search...">
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="ui segment">
      <transition name="fade" mode="out-in">
        <router-view class="child-view"></router-view>
      </transition>
    </div>
  </div>
</template>

<style>
  #app {
    margin-top: 20px;
  }
</style>
