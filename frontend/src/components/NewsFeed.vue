<template>
    <section>
      <h2>Latest Industry News</h2>
      <ul v-if="news.length">
        <li v-for="article in news" :key="article.id">
          <a :href="article.url" target="_blank">{{ article.title }}</a>
        </li>
      </ul>
      <p v-else>Loading news...</p>
    </section>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return { news: [] };
    },
    async mounted() {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?category=technology&apiKey=YOUR_API_KEY");
      this.news = response.data.articles;
    },
  };
  </script>
  