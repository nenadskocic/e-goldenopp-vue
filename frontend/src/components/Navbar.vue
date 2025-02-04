<template>
  <nav class="neumorphic-nav">
    <!-- Left: Logo & Company Name -->
    <div class="nav-left">
      <img
        src="/images/logo_golden_opportunity_transparent.png"
        alt="Recruitment App Logo"
        class="nav-logo"
      />
      <span class="company-name">Golden Opportunity Consulting</span>
    </div>

    <!-- Right: Smooth Scrolling Navigation Links -->
    <div class="nav-right">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>

      <!-- Neumorphic Dropdown for "More" -->
      <div class="dropdown">
        <button class="dropdown-toggle">More ▼</button>
        <div class="dropdown-menu">
          <router-link to="/HowItWorks">How it Works</router-link>
          <router-link to="/News">News</router-link>
        </div>
      </div>

      <!-- Raised Neumorphic Contact Button -->
      <a href="#contact" class="contact-button">CONTACT</a>
    </div>
  </nav>
</template>

