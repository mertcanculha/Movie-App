<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
    <div class="homePage">
      <h3>VUEFILX UYGULAMASINA HOŞGELDİNİZ</h3>
      <H3>PROD.BY MERT CULHA :) </H3>
      <a href="https://www.linkedin.com/in/mertculha/" target="_blank"
        >Linkedin</a
      >
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  name: "App",
};
</script>

<style>
.homePage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px;
}
</style>
