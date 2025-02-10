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
  data() {
    return { isDarkMode: false };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark', this.isDarkMode);
    }
  }
};
</script>

<style>
:root {
  --primary-color: #2D2D2B;
  --secondary-color: #B8926A;
  --background-color: #EAE6DF;
  --text-color: #2D2D2B;
  --accent-color: #D4C8BE;
  --border-color: #B0B0B0;
  --white: white;
}

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