<script setup lang="ts">
import { onMounted } from 'vue';
import Header from './components/Header.vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <Header />
  <!-- Calendly inline widget begin -->
  <div
    class="calendly-inline-widget"
    data-url="https://calendly.com/mohamedsefyani"
    style="min-width: 320px; height: 700px"
  ></div>
  <!-- Calendly inline widget end -->
</template>
