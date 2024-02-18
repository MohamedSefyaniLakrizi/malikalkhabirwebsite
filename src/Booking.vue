<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <router-view />
  <!-- Calendly inline widget begin -->
  <div
    class="calendly-inline-widget"
    data-url="https://calendly.com/mohamedsefyani?hide_gdpr_banner=1"
    style="min-width: 320px; height: 700px"
  ></div>
  <!-- Calendly inline widget end -->
</template>
