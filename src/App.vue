<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <contact-us-form />
    <demo />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import $ from 'jquery'
import { useEffect } from 'react'
import Demo from "./components/react/Demo"

// eslint-disable-next-line no-unused-vars
import React from "react"
const ContactUsForm = () => {
  useEffect(() => {
    $("#send").click(() => {
      console.log($("#name").val());
    });
  }, []);

  return (
      <div
          dangerouslySetInnerHTML={{
            __html: `
      <h1>contactUsForm</h1>
      your name: <input id="name" >
      your email: <input id="email">
      <button id="send">send</button>
      `
          }}
      ></div>
  );
};

export default {
  name: 'App',
  components: {
    HelloWorld,
    ContactUsForm,
    Demo
  },
  data(){
    return {
      email: 123
    }
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
