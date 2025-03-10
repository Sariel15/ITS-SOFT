<template>
  <section
    class="relative min-h-screen w-full flex items-start justify-start overflow-hidden"
  >
    <nuxt-img
      src="/dev-background.png"
      class="absolute inset-0 w-full h-full object-cover object-center"
      alt="Developer workspace with code editor"
      placeholder
      quality="80"
    />
    <div
      class="relative w-full max-w-7xl px-4 sm:px-8 md:px-16 lg:px-20 flex flex-col items-start mt-24 sm:mt-32 md:mt-48"
    >
      <div class="max-w-4xl self-start ml-6 mt-12 space-y-6 text-center">
        <h1
          class="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Effortless development with ITS SquareHub
        </h1>

        <p
          class="text-lg sm:text-lg md:text-2xl lg:text-3xl text-gray-800 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Streamline your software projects, boost efficiency, and deliver
          innovative solutions faster than ever.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <NuxtLink
            to="/contact"
            class="group flex items-center justify-center gap-2 bg-[#7DD8FF] hover:bg-white text-gray-900 px-6 py-4 text-base sm:text-xl transition-colors duration-200 rounded-sm"
          >
            <Icon name="mdi:eye" class="w-5 h-5" />
            <span class="text-center">Enquire Now</span>
          </NuxtLink>

          <NuxtLink
            to="#techstack"
            class="group flex items-center justify-center gap-2 bg-white hover:bg-[#7DD8FF] text-gray-900 border md:px-6 md:py-4 px-8 py-4 rounded-sm text-base sm:text-xl transition-colors duration-200"
            @click.prevent="scrollToTools"
          >
            <Icon name="mdi:tools" class="w-5 h-5" />
            <span class="text-center">View Tools</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <section
    class="CoreValues py-10 px-6"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="max-w-7xl mx-auto mt-10 text-center">
      <div class="overflow-x-hidden">
        <div
          class="circlePosition w-[700px] h-[450px] bg-[#6AD2FF] bg-opacity-30 rounded-[100%] absolute z-1 top-[20%] right-[100%] translate-x-[50%] translate-y-[50%] blur-[90px]"
        ></div>
      </div>

      <h2 class="font-semibold text-6xl font-montserrat mb-4">
        Our Core Values
      </h2>
      <p class="text-black text-xl mb-8">
        We offer customized software development services tailored to your
        business needs. We are client focused and we deem client engagement and
        collaboration essential in creating a successful software. We value the
        delivery of a well structured product that meet client needs and
        timelines.
      </p>

      <!-- Cards -->
      <div class="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-3 text-left">
        <div
          v-for="(core, index) in coreValue"
          :key="index"
          class="bg-[#F4F4F4] shadow-lg rounded-lg h-full flex flex-col outline outline-1 outline-[#C8C8C8] transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <!-- Image -->
          <NuxtImg
            :src="core.CoreValueImageUrl"
            :alt="core.CoreValueName"
            class="w-full h-80 object-cover rounded-t-lg"
          />
          <div class="p-6">
            <!-- Core Label -->
            <div
              class="text-sm font-bold mb-2 bg-[#6AD2FF] text-black py-0.5 px-4 rounded-lg inline-block text-left"
            >
              CORE {{ index + 1 }}
            </div>
            <!-- Title -->
            <h3 class="text-lg font-semibold text-black mb-2">
              {{ core.CoreValueName }}
            </h3>
            <!-- Description -->
            <p class="text-black">{{ core.CoreValueDescription }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="benefits" class="flex items-center justify-center min-h-screen">
    <Benefits data-aos="fade-up" />
  </section>
  <section id="techstack" class="flex items-center justify-center min-h-screen">
    <TechStack data-aos="fade-up" />
  </section>

  <FooterBanner/>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import sanityClient from "../sanity.js";

export default {
  data() {
    return {
      homeHeroTitle: "",
      homeHeroDescription: "",
      coreValueTitle: "",
      coreValuesSubTitle: "",
      coreValue: [],
    };
  },
  async created() {
    await this.fetchHomeData();
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: false,
    });
  },
  methods: {
    scrollToTechStack() {
      const section = document.getElementById("techstack");
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    },
    scrollToTools() {
      const element = document.getElementById("techstack");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },

    async fetchHomeData() {
      try {
        const query = `*[_type == "Home"]{
            CoreValues[] {
              CoreValueName,
              CoreValueDescription,
              CoreValueImage {
                asset->{
                  url
                }
              }
            }
          }`;

        const data = await sanityClient.fetch(query);

        if (data.length) {
          const {
            CoreValues,
          } = data[0];
          
          this.coreValue = CoreValues
            ? CoreValues.map((core) => ({
                CoreValueName: core.CoreValueName || "",
                CoreValueDescription: core.CoreValueDescription || "",
                CoreValueImageUrl: core.CoreValueImage?.asset?.url || "",
              }))
            : [];
        }
        console.log("HomePage data:", data);
      } catch (error) {
        console.error("Error fetching HomePage data:", error);
      }
    },
  },
};
</script>
