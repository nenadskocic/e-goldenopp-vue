<template>
  <nav class="bg-white text-[#2D2D2B] fixed top-0 left-0 w-full z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo Positioned at Top Left with No Hover Effects -->
      <router-link to="/" class="logo-container">
        <img
          src="@/assets/logos/logo_black_transparent.png"
          alt="Logo"
          class="h-16 w-auto object-contain logo"
          draggable="false"
        />
      </router-link>

      <button @click="toggleMenu" class="lg:hidden focus:outline-none">
        <svg
          v-if="!menuOpen"
          class="w-8 h-8 text-[#B8926A]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
        <svg
          v-else
          class="w-8 h-8 text-[#B8926A]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <div :class="{ hidden: !menuOpen, block: menuOpen }" class="lg:flex lg:items-center">
        <ul class="lg:flex space-x-8">
          <li v-for="link in navLinks" :key="link.text">
            <router-link
              :to="link.path"
              class="text-lg font-medium text-[#2D2D2B] hover:text-[#B8926A] transition-all duration-300"
            >
              {{ link.text }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const navLinks = ref([
  { text: 'Home', path: '/' },
  { text: 'About', path: '/about' },
  { text: 'Contact', path: '/contact' },
])

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
nav {
  transition: all 0.3s ease-in-out;
}

/* Prevent logo hover effects */
.logo-container {
  pointer-events: none;
}

.logo {
  user-select: none;
  -webkit-user-drag: none;
  cursor: default;
}

/* Custom text highlight color */
::selection {
  background: #b8926a;
  color: #2d2d2b;
}

/* Navbar link active and hover state */
.router-link-active,
.router-link:hover {
  color: #b8926a;
  font-weight: 600;
}
</style>
