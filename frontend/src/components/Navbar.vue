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

<style scoped>
/* 🌟 Enable smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* 🌟 Neumorphic Navbar */
.neumorphic-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 25px;
  background: #e0e0e0;
  color: #333;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2),
    -6px -6px 12px rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 70px;
  border-radius: 15px;
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
  gap: 20px;
  align-items: center;
}

/* 🌟 Neumorphic Nav Links */
.nav-right a {
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: bold;
  padding: 6px 14px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  background: #e0e0e0;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

/* 🔥 Hover Effect - Inset (Indented Neumorphic) */
.nav-right a:hover {
  background: #e0e0e0;
  color: #28a745;
  transform: translateY(1px);
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.2),
    inset -3px -3px 6px rgba(255, 255, 255, 0.7);
}

/* 🚀 Raised Neumorphic Contact Button (Now with Black Border) */
.contact-button {
  border: 2px solid black;
  padding: 8px 16px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
  border-radius: 8px;
  background: #e0e0e0;
  box-shadow: -4px -4px 8px rgba(255, 255, 255, 1),
    4px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

/* 🔥 Contact Button Hover Effect */
.contact-button:hover {
  background: #28a745;
  color: white;
  border-color: black;
}

/* 📌 Neumorphic Dropdown Menu */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  font-size: 1rem;
  font-weight: bold;
  padding: 6px 14px;
  border-radius: 8px;
  background: #e0e0e0;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

/* 🔥 Dropdown Button Hover Effect */
.dropdown-toggle:hover {
  --background: #28a745;
  color: #28a745;
  transform: translateY(1px);
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
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2),
    -6px -6px 12px rgba(255, 255, 255, 0.7);
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
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2),
    -4px -4px 8px rgba(255, 255, 255, 0.7);
}

/* 🔥 Hover Effect - Indented Neumorphic */
.dropdown-menu a:hover {
  -background: #28a745;
  color: #28a745;
  transform: translateY(1px);
  box-shadow: inset 3px 3px 6px rgba(0, 0, 0, 0.2),
    inset -3px -3px 6px rgba(255, 255, 255, 0.7);
}
</style>
