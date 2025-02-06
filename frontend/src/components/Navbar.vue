<template>
  <nav class="neumorphic-nav">
    <div class="nav-container">
      <!-- Left: Logo & Company Name -->
      <div class="nav-left">
        <img src="/images/logo_golden_opportunity_transparent.png" alt="Recruitment App Logo" class="nav-logo" />
        <span class="company-name">Golden Opportunity Consulting</span>
      </div>

      <!-- Right: Navigation Links -->
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

        <!-- Prioritized Contact Button -->
        <a href="#contact" class="contact-button">CONTACT</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* 🌟 Enable smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* 🌟 Neumorphic Navbar */
.neumorphic-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  background: #e0e0e0;
  color: #333;
  box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.6),
    inset -2px -2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 70px;
  border-radius: 15px;
}

/* 🌟 Set Width to Match Services.vue */
.nav-container {
  max-width: 1200px; /* Matches Services.vue width */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Keeps content aligned */
}

/* 📌 Left Section: Logo & Company Name */
.nav-left {
  display: flex;
  align-items: center;
}

.nav-logo {
  height: 40px;
  width: auto;
}

.company-name {
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 12px;
  color: #333;
}

/* 📌 Right Section: Navigation Links */
.nav-right {
  display: flex;
  gap: 15px;
  align-items: center;
}

/* 🌟 Smaller Nav Links */
.nav-right a {
  text-decoration: none;
  color: #333;
  font-size: 0.9rem; /* Smaller size */
  font-weight: 600;
  padding: 5px 12px; /* Adjusted padding */
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  background: #e0e0e0;
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.7),
    inset -2px -2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

/* 🔥 Hover Effect */
.nav-right a:hover {
  background: #e0e0e0;
  color: var(--text-color);
  transform: translateY(1px);
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.15),
    inset -3px -3px 6px rgba(255, 255, 255, 0.7);
}

/* 🚀 Emphasized Contact Button */
.contact-button {
  border: 2px solid black;
  padding: 10px 20px; /* Bigger than other links */
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
  border-radius: 8px;
  background: #e0e0e0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2),
    -2px -2px 5px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease-in-out;
}

/* 🔥 Contact Button Hover Effect */
.contact-button:hover {
  background: var(--text-color);
  color: white;
  border-color: black;
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2),
    inset -2px -2px 4px rgba(255, 255, 255, 0.7);
}

/* 📌 Neumorphic Dropdown */
.dropdown {
  position: relative;
}

/* Dropdown Button */
.dropdown-toggle {
  font-size: 0.9rem; /* Match other links */
  font-weight: bold;
  padding: 5px 12px;
  border-radius: 6px;
  background: #e0e0e0;
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.7),
    inset -2px -2px 4px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

/* 🔥 Dropdown Hover Effect */
.dropdown-toggle:hover {
  background: #e0e0e0;
  color: var(--text-color);
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.2),
    inset -3px -3px 6px rgba(255, 255, 255, 0.7);
}

/* Dropdown Menu */
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #e0e0e0;
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.7),
    inset -2px -2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px 0;
}

/* Show dropdown on hover */
.dropdown:hover .dropdown-menu {
  display: block;
}

/* Neumorphic Dropdown Links */
.dropdown-menu a {
  display: block;
  padding: 8px 14px;
  font-size: 0.9rem;
  text-decoration: none;
  color: #333;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  background: #e0e0e0;
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.7),
    inset -2px -2px 4px rgba(0, 0, 0, 0.2);
}

/* 🔥 Hover Effect - Subtle Indentation */
.dropdown-menu a:hover {
  background: #e0e0e0;
  color: var(--text-color);
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.15),
    inset -3px -3px 6px rgba(255, 255, 255, 0.7);
}
</style>
