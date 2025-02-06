<template>
    <section>
      <h2>Book a Consultation</h2>
      <vue-cal :events="appointments" @event-click="selectTimeSlot"></vue-cal>
    </section>
  </template>
  
  <script>
  import VueCal from "vue-cal";
  import "vue-cal/dist/vuecal.css";
  
  export default {
    components: { VueCal },
    data() {
      return { appointments: [{ start: "2025-02-05 10:00", end: "2025-02-05 11:00", title: "Available Slot" }] };
    },
    methods: {
      selectTimeSlot(event) {
        alert(`You booked a meeting at ${event.start}`);
      },
    },
  };
  </script>
  