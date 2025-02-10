<template>
    <footer :class="{ dark: isDarkMode }">
      <div class="footer-container">
        <!-- Logo / Branding -->
        <div class="brand">
          <img src="/images/logo_black_transparent.png" alt="AI Recruitment Agency Logo" class="logo" />
          <p>AI-powered hiring, simplified.</p>
        </div>
  
        <!-- Navigation Links -->
        <div class="footer-links">
          <router-link to="/">Home</router-link>
          <router-link to="/news">Industry News</router-link>
          <router-link to="/faq">FAQ</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/appointment">Book a Consultation</router-link>
        </div>
  
        <!-- Social Media Links -->
        <div class="social-icons">
          <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
  
      <!-- Copyright -->
      <div class="footer-bottom">
        <p>&copy; 2025 AI Recruitment Agency. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDarkMode: false,
      };
    },
    mounted() {
      this.isDarkMode = document.body.classList.contains('dark');
    },
  };
  </script>
  
  <style scoped>
  footer {
    background: #2d2d2b;
    color: #eae6df;
    padding: 20px 0;
    text-align: center;
  }
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .brand {
    text-align: center;
  }
  .logo {
    width: 120px;
  }
  .footer-links {
    display: flex;
    gap: 15px;
  }
  .footer-links a {
    color: #eae6df;
    text-decoration: none;
  }
  .footer-links a:hover {
    color: #b8926a;
  }
  .social-icons a {
    color: #b8926a;
    font-size: 20px;
    margin: 0 10px;
  }
  .social-icons a:hover {
    color: #d4c8be;
  }
  .footer-bottom {
    margin-top: 10px;
    font-size: 14px;
  }
  </style>
  