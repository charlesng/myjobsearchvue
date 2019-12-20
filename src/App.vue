<template>
  <ResponsiveDrawer />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ResponsiveDrawer from './components/ResponsiveDrawer.vue';

@Component({
  components: {
    ResponsiveDrawer,
  },
})
export default class App extends Vue {}
</script>
