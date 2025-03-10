<template>
  <section class="relative">
    <div
      class="bg-[#6AD2FF] flex flex-col justify-center text-black text-center h-full"
    >
      <!-- Top Image -->
      <div class="absolute top-0 left-0 hidden md:block">
        <NuxtImg src="/CustomerUpper.png" class="lg:w-full lg:h-auto" />
      </div>

      <div class="py-12 sm:py-24 md:py-36 flex-1 w-1/2 self-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
          Your partner in software innovation
        </h1>
        <p class="text-base sm:text-lg md:text-xl mb-6">
          Stay ahead of the competition with cutting-edge development, seamless
          integration, and collaborative tools from ITS SquareHub.
        </p>
        <div class="flex justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-base sm:text-xl text-black font-semibold py-3 px-6 rounded shadow"
            >Get Started</NuxtLink
          >
        </div>
      </div>

      <!-- Bottom Image -->
      <div class="absolute bottom-0 right-0 hidden md:block">
        <NuxtImg src="/CustomerBottom.png" class="lg:w-full lg:h-auto" />
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped></style>
