<template>
  <section class="services">
    <!-- Header Section -->
    <div class="services-header">
      <p class="highlight">SMART RECRUITMENT</p>
      <h2 class="title">Streamline your hiring process with AI.</h2>
    </div>

    <!-- Services Grid -->
    <div class="services-grid">
      <div class="service-card">
        <img
          src="/images/ai_matching.jpg"
          alt="AI Matching"
          class="service-image"
        />
        <div class="service-content">
          <h3 class="service-title">
            AI-Powered candidate matching <span>➝</span>
          </h3>
          <p class="service-description">
            Find the perfect candidates effortlessly using AI technology.
          </p>
        </div>
      </div>

      <div class="service-card">
        <img
          src="/images/automated_resume.jpg"
          alt="Automated Resume"
          class="service-image"
        />
        <div class="service-content">
          <h3 class="service-title">
            Automated resume screening <span>➝</span>
          </h3>
          <p class="service-description">
            Streamline your resume review process with automation.
          </p>
        </div>
      </div>

      <div class="service-card">
        <img
          src="/images/smart_interview.jpg"
          alt="Smart Interview"
          class="service-image"
        />
        <div class="service-content">
          <h3 class="service-title">
            Smart interview scheduling <span>➝</span>
          </h3>
          <p class="service-description">
            Simplify your interview process with intelligent scheduling.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <style scoped>
/* Services Section - Matches About.vue Width */
.services {
  text-align: left; /* Left-align content */
  padding: 60px 19%; /* Matches About.vue content width */
  background: #f7f8fa;
}

/* Header Section */
.services-header {
  margin-bottom: 40px;
}

.highlight {
  color: #28a745;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 1px;
  text-align: left;
}

/* Title - Left Indented */
.title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-top: 10px;
  color: #222;
  text-align: left;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
}

/* Service Card */
.service-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Hover Effect */
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Service Image */
.service-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

/* Service Content */
.service-content {
  padding: 20px;
  text-align: left;
}

/* Service Title */
.service-title {
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Service Arrow */
.service-title span {
  font-size: 1.3rem;
  font-weight: bold;
}

/* Service Description */
.service-description {
  font-size: 1rem;
  color: #555;
  margin-top: 8px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .services {
    padding: 60px 5%; /* Reduce padding for smaller screens */
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    width: 100%;
  }
}
</style>
  