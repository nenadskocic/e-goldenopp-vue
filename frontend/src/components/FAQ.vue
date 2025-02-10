<template>
    <section>
      <h2>Frequently Asked Questions</h2>
      <details v-for="faq in faqs" :key="faq.question">
        <summary>{{ faq.question }}</summary>
        <p>{{ faq.answer }}</p>
      </details>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          { question: 'How does AI improve hiring?', answer: 'AI helps automate resume screening, candidate matching, and interview scheduling.' },
          { question: 'Can I integrate my ATS with your platform?', answer: 'Yes, we support ATS integrations via API.' }
        ]
      };
    }
  };
  </script>
  