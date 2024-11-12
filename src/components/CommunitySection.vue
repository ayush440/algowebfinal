<template>
  <section id="pricing" class="w-full py-20 bg-ffffff">
    <div class="max-w-[1400px] mx-auto px-6">
      <div class="rounded-[32px] bg-[#2d4339] overflow-hidden">
        <div 
          class="flex flex-col md:flex-row items-center p-8 md:p-16 gap-8"
          :style="{
            background: 'radial-gradient(circle at top left, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0) 60%)'
          }"
        >
          <!-- Left Content -->
          <div class="flex-1">
            <h2 class="text-4xl md:text-5xl font text-white mb-4">
              Get Started with Just
              <div class="text-[#FFB800] mt-2  font-bold ">₹2500 Per month</div>
            </h2>
            
            <p class="text-white/90 text-lg leading-relaxed mb-8 max-w-[500px]">
              Join our dynamic trading community to share strategies, gain insights, and enhance your skills. Connect with fellow traders and support your journey to trading success.
            </p>

            <button class="w-full max-w-[400px] bg-[#FFB800] text-[#304838] py-4 rounded-xl text-lg font-medium hover:bg-opacity-90 transition-all duration-300">
              Join Now
            </button>
          </div>

          <!-- Right Content - Laptop Image -->
          <div class="flex-1 flex items-center justify-center">
  <img 
    src="../assets/images/Laptop.png"
    alt="Trading Platform Interface"
    class="hidden sm:block w-[120%] h-auto object-contain transform translate-x-4"
  />
</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  font-family: 'Inter', sans-serif;
}

h2 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>