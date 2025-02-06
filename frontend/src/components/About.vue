<template>
    <section id="about" class="about-section">
      <div class="container">
        <!-- Left Side: Text Content -->
        <div class="text-content">
          <h4 class="highlight">INNOVATIVE HIRING SOLUTIONS</h4>
          <h2 class="title">Transforming recruitment with AI</h2>
          <p class="description">
            AI Recruitment Agency revolutionizes the hiring landscape by harnessing the power of AI-driven automation and data intelligence.
          </p>
          <p class="description">
            Our platform streamlines the recruitment process with features like AI-powered candidate matching, automated resume screening, 
            and smart interview scheduling.
          </p>
          <p class="description">
            Experience a seamless hiring journey with customizable job pipelines and a floating AI chatbot for instant support. Stay updated
            with our auto-fetching industry news and LinkedIn job feed, designed to keep you ahead in the competitive job market.
          </p>
        </div>
  
        <!-- Right Side: Image -->
        <div class="image-container">
          <img src="/images/ai_robot.png" alt="AI Recruitment Illustration" />
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* Section Layout */
  .about-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 80px 10%;
    background: #fff;
  }
  
  /* Container for Text + Image */
  .container {
    display: flex;
    align-items: stretch; /* Makes both sides equal height */
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
  }
  
  /* Left Content: Text */
  .text-content {
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically centers content */
    padding-right: 5%;
  }
  
  /* Highlighted text */
  .highlight {
    color: #28a745;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 1px;
  }
  
  /* Main Title */
  .title {
    font-size: 2.8rem;
    font-weight: 800;
    margin: 10px 0;
  }
  
  /* Description */
  .description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #333;
    margin-bottom: 15px;
  }
  
  /* Right Content: Image */
  .image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .image-container img {
    width: 100%;
    height: 100%; /* Ensures the image matches the text height */
    object-fit: cover; /* Prevents distortion */
    border-radius: 10px;
  }
  
  /* Responsive Design */
  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
  
    .text-content {
      max-width: 100%;
      text-align: left; /* Keep text left-aligned even in mobile */
      padding-right: 0;
    }
  
    .image-container {
      width: 100%;
      height: auto;
      margin-top: 30px;
    }
  
    .image-container img {
      width: 100%;
      height: auto;
    }
  }
  </style>
  