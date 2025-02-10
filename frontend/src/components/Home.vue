<template>
    <div>
      <Hero id="home"/>
      <About id="about"/>
      <Services id="services" />
      <Footer />
    </div>
  </template>
  
  <script>
  import Hero from '../components/Hero.vue';
  import About from '../components/About.vue';
  import Services from '../components/Services.vue';
  import NewsFeed from '../components/NewsFeed.vue';
  import FAQ from '../components/FAQ.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: { Hero, About, Services, NewsFeed, FAQ, Footer }
  };
  </script>
  