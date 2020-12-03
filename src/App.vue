<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Demo />
    <Demo2/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { VuePlugin } from 'vuera'
import Demo from "./components/react/Demo"
import Demo2 from "./components/react/Demo2"
import Vue from "vue"

Vue.use(VuePlugin)

export default {
  name: 'App',
  components: {
    HelloWorld,
    Demo,
    Demo2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
