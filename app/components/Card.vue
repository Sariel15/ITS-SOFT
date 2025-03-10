<template>
  <div
    class="bg-white z-10 rounded-lg shadow-md w-full mx-auto outline outline-1 outline-greyoutline hover:scale-105 hover:shadow-lg transition-transform overflow-hidden"
  >
    <!-- Content Wrapper -->
    <div class="flex flex-col lg:flex-row h-full">
      <!-- Image Section -->
      <div class="w-full lg:w-1/2 relative h-full">
        <img :src="image" :alt="title" class="w-full h-full object-cover" />
      </div>

      <!-- Text Section -->
      <div class="lg:w-2/3 p-6 flex flex-col justify-center">
        <h3 class="font-semibold text-3xl sm:text-2xl mb-3">
          {{ title }}
        </h3>
        <p class="text-base text-gray-600">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
