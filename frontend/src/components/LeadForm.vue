<template>
    <section>
      <h2>Get in Touch</h2>
      <form @submit.prevent="submitForm">
        <input v-model="formData.name" placeholder="Your Name" required />
        <input v-model="formData.email" placeholder="Your Email" type="email" required />
        <textarea v-model="formData.message" placeholder="Your Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <p v-if="successMessage">{{ successMessage }}</p>
    </section>
  </template>
  
  <script>
  import { createClient } from "@supabase/supabase-js";
  const supabase = createClient("https://your-supabase-url.supabase.co", "your-supabase-anon-key");
  
  export default {
    data() {
      return { formData: { name: "", email: "", message: "" }, successMessage: "" };
    },
    methods: {
      async submitForm() {
        const { data, error } = await supabase.from("leads").insert([this.formData]);
        if (error) console.error(error);
        else this.successMessage = "Thank you! We'll be in touch.";
      },
    },
  };
  </script>
  