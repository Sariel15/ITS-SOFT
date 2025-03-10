<template>
  <nav class="bg-white font-instrument relative">
    <div class="container mx-auto flex justify-between items-center py-5 px-6">
      <!-- Logo -->
      <div class="text-xl font-bold text-gray-800">
        <NuxtLink to="/">
          <nuxt-img
            src="/its-logo-black.png"
            alt="IT Squarehub Logo"
            width="280"
            height="35"
          ></nuxt-img>
        </NuxtLink>
      </div>
      <!-- Desktop Navigation Links -->
      <ul
        class="hidden lg:flex lg:flex-row lg:space-x-9 text-gray-600 text-sm lg:ml-auto"
      >
        <li>
          <NuxtLink
            to="/"
            @click="closeMenu"
            class="hover:underline underline-offset-8"
            exact-active-class="underline underline-offset-8"
            >Home</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/careers"
            @click="closeMenu"
            class="hover:underline underline-offset-8"
            exact-active-class="underline underline-offset-8"
            >Careers</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/about"
            @click="closeMenu"
            class="hover:underline underline-offset-8"
            exact-active-class="underline underline-offset-8"
            >About Us</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            to="/contact"
            @click="closeMenu"
            class="hover:underline underline-offset-8"
            exact-active-class="underline underline-offset-8"
            >Contact Us</NuxtLink
          >
        </li>

        <li>
          <NuxtLink
            to="/techInquiry"
            @click="closeMenu"
            class="hover:underline underline-offset-8"
            exact-active-class="underline underline-offset-8"
            >Tech Inquiry</NuxtLink
          >
        </li>
      </ul>

      <!-- Hamburger Icon for Mobile -->
      <div class="lg:hidden ml-auto">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            class="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div
      v-if="menuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-50"
      @click.self="toggleMenu"
    >
      <div class="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-6">
        <button
          @click="toggleMenu"
          class="focus:outline-none mb-4 absolute top-4 right-4"
        >
          <svg
            class="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul
          class="flex flex-col space-y-4 text-gray-600 text-sm text-right mt-8"
        >
          <li>
            <NuxtLink
              to="/"
              @click="toggleMenu"
              class="hover:text-gray-900 transition-colors"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/careers"
              @click="toggleMenu"
              class="hover:text-gray-900 transition-colors"
              >Careers</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/about"
              @click="toggleMenu"
              class="hover:text-gray-900 transition-colors"
              >About Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contact"
              @click="toggleMenu"
              class="hover:text-gray-900 transition-colors"
              >Contact Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/techInquiry"
              @click="toggleMenu"
              class="hover:text-gray-900 transition-colors"
              >Tech Inquiry</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr class="mx-[55px] border-b-[3px] border-solid border-[#6AD2FF]" />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const menuOpen = ref(false);

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };

    const closeMenu = () => {
      menuOpen.value = false;
    };

    return { menuOpen, toggleMenu, closeMenu };
  },
};
</script>

<style scoped></style>
