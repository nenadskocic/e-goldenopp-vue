<template>
  <section class="hero">
    <div class="overlay"></div>
    <div class="content">
      <h1 class="headline">Smart hiring solutions</h1>
      <p class="subtext">Transform your recruitment process</p>
      <button class="cta">View Services</button>
    </div>
  </section>
</template>

<style scoped>
/* Hero Section - Full Width */
.hero {
  position: relative;
  width: 100vw; /* Full width */
  height: 100vh; /* Full screen height */
  background: url("/images/ai_robot_front.jpg") no-repeat center center fixed;
  background-size: cover; /* Ensures it stretches properly */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10%;
  color: white;
  overflow: hidden;
}

/* Dark Overlay for Better Contrast */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

/* Content Box */
.content {
  position: relative;
  z-index: 2;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligns text & button to the left */
  gap: 20px; /* Creates vertical spacing between elements */
}

/* Headline */
.headline {
  font-size: 3.2rem;
  font-weight: 700;
  margin: 0;
}

/* Subtext */
.subtext {
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 0.9;
  margin: 0;
}

/* Call-to-Action Button */
.cta {
  background: #28a745;
  color: white;
  padding: 12px 28px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

/* Button Hover Effect */
.cta:hover {
  background: #218838;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    text-align: center;
    justify-content: center;
    padding-left: 5%;
    padding-right: 5%;
  }

  .content {
    align-items: center; /* Center aligns text on smaller screens */
    text-align: center;
  }

  .headline {
    font-size: 2.8rem;
  }

  .subtext {
    font-size: 1.3rem;
  }

  .cta {
    font-size: 1rem;
    padding: 12px 24px;
  }
}
</style>
