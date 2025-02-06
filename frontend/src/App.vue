<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import NewsFeed from './components/NewsFeed.vue';
import FAQ from './components/FAQ.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Navbar, Hero, About, NewsFeed, FAQ, Footer },
};
</script>

<style>

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--white);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>