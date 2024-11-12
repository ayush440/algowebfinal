<template>
  <section ref="statsSection" class="w-full py-8 sm:py-12 md:py-16 lg:py-20">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6">
      <div class="w-full bg-[#304838] rounded-2xl sm:rounded-3xl lg:rounded-[32px] py-10 sm:py-12 md:py-16 lg:pt-[56px] lg:pb-[56px]">
        <!-- Heading -->
        <h2 class="text-white text-3xl sm:text-4xl lg:text-5xl font mb-10 sm:mb-12 lg:mb-20 text-center px-4">
          What makes algorithm different?
        </h2>

        <!-- Statistics Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 lg:px-16">
          <!-- Customizable Strategies -->
          <div class="text-center">
            <p class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4">
              {{ animatedNumbers.strategies }}+
            </p>
            <p class="text-white text-base sm:text-lg font-normal">Customizable Strategies</p>
          </div>

          <!-- Active Users -->
          <div class="text-center">
            <p class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4">
              {{ animatedNumbers.users.toLocaleString() }}+
            </p>
            <p class="text-white text-base sm:text-lg font-normal">Active Users</p>
          </div>

          <!-- Trade Execution Accuracy -->
          <div class="text-center">
            <p class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4">
              {{ animatedNumbers.accuracy.toFixed(1) }}%
            </p>
            <p class="text-white text-base sm:text-lg font-normal">Trade Execution Accuracy</p>
          </div>

          <!-- Leading broker connect -->
          <div class="text-center">
            <p class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 lg:mb-4">
              {{ animatedNumbers.brokers }}+
            </p>
            <p class="text-white text-base sm:text-lg font-normal">Leading broker<br/>connect</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const statsSection = ref(null);
const animatedNumbers = ref({
  strategies: 0,
  users: 0,
  accuracy: 0,
  brokers: 0
});

const finalNumbers = {
  strategies: 12,
  users: 5000,
  accuracy: 99.9,
  brokers: 20
};

const animateValue = (start, end, duration, updateFn) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    updateFn(value);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const startAnimation = () => {
  animateValue(0, finalNumbers.strategies, 2000, (value) => animatedNumbers.value.strategies = value);
  animateValue(0, finalNumbers.users, 2000, (value) => animatedNumbers.value.users = value);
  animateValue(0, finalNumbers.accuracy, 2000, (value) => animatedNumbers.value.accuracy = value);
  animateValue(0, finalNumbers.brokers, 2000, (value) => animatedNumbers.value.brokers = value);
};

let observer;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startAnimation();
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });

  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  font-family: 'Inter', sans-serif;
}
</style>