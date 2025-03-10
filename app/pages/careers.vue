<template>
  <section>
    <!-- Career Section Start -->
    <div class="bg-[#6AD2FF] py-20 relative">
      <div class="container mx-auto px-6 relative">
        <h1
          class="text-8xl font-bold text-black text-center mb-4 md:mx-20"
          data-aos="fade-down"
        >
          Careers
        </h1>
        <div
          class="flex justify-center items-center relative"
          data-aos="zoom-in"
        >
          <!-- Left Decorative Image -->
          <img
            src="/design-left.png"
            alt="Design Left"
            class="hidden md:block absolute left-[-60px] top-1/2 transform -translate-y-1/2 w-[254px] h-auto"
          />

          <!-- Main Image -->
          <div
            class="md:max-w-[1000px] mx-auto mb-6 md:h-[500px] w-[985px] h-[463px]"
          >
            <img
              src="/careers.png"
              alt="Team meeting"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>

          <!-- Right Decorative Image -->
          <img
            src="/design-right.png"
            alt="Design Right"
            class="hidden md:block absolute right-[-60px] top-1/2 transform -translate-y-1/2 w-[254px] h-auto"
          />
        </div>
        <p
          class="md:text-4xl text-[26px] text-gray-700 text-center mb-10 mt-10 w-2/3 mx-auto"
          data-aos="fade-up"
        >
          Join ITSquareHub and become part of a dynamic team driving innovation
          in technology solutions.
        </p>
      </div>
    </div>
    <div class="container mx-auto px-6 lg:px-32 -mt-18">
      <div class="relative">
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center relative z-10 mt-[-3rem]"
        >
          <div
            v-for="(job, index) in paginatedJobs"
            :key="index"
            class="bg-[#EBF9FF] shadow-md rounded-lg p-6 transition-transform duration-300 hover:shadow-xl flex flex-col justify-between h-auto max-w-lg w-full"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="flex items-center justify-between mb-4">
              <span
                class="bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full"
              >
                AVAILABLE
              </span>
            </div>
            <h3 class="text-xl font-semibold text-black mb-2">
              {{ job.careerTitle }}
            </h3>
            <p class="text-sm text-black mb-3 flex-grow">
              {{ job.careerDescription }}
            </p>
            <button
              class="bg-black text-white text-xs font-semibold px-5 py-2 rounded hover:bg-[#6AD2FF] hover:text-black self-start"
              @click="openModal(job.careerTitle, job.careerImage)"
            >
              Apply Now
            </button>
          </div>
        </div>
        <div
          v-if="jobs.length > itemsPerPage"
          class="flex justify-center gap-4 mt-16"
        >
          <button
            class="bg-black text-white px-4 py-2 rounded-md hover:bg-[#6AD2FF] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            @click="prevPage"
            :disabled="currentPage <= 1"
          >
            Previous
          </button>
          <button
            class="bg-black text-white px-4 py-2 rounded-md hover:bg-[#6AD2FF] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
            @click="nextPage"
            :disabled="currentPage >= totalPages"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    <!-- Career Section End -->

    <!-- Pop Up Start -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      data-aos="fade-in"
    >
      <div class="relative bg-white w-96 h-auto rounded-lg overflow-hidden">
        <button
          class="absolute top-4 right-4 text-black font-bold text-lg cursor-pointer z-10"
          @click="closeModal"
        >
          X
        </button>
        <h2 class="text-2xl font-bold p-4 bg-[#6AD2FF]">{{ careerTitle }}</h2>
        <div class="relative w-full h-full">
          <img
            :src="careerImage"
            alt="Job application"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <!-- Pop Up End -->

    <!-- Build Career Start -->
    <div class="bg-white py-10 mt-4">
      <div class="container mx-auto px-6 text-center">
        <h2
          class="md:text-7xl text-[40px] font-bold text-black mb-4"
          data-aos="fade-up"
        >
          Build Your Career at IT SquareHub
        </h2>
        <p
          class="text-black text-center mb-10 md:text-4xl text-3xl max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          Step into the future of outsourcing with innovation and quality at its
          core. Become a part of the ITS Family today!
        </p>
      </div>
    </div>
    <!-- FAQ Section End -->
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import sanityClient from "../sanity.js";

export default {
  mounted() {
    AOS.init();
    this.updateItemsPerPage();
    window.addEventListener("resize", this.updateItemsPerPage);
    this.fetchData();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateItemsPerPage);
  },
  data() {
    return {
      isModalOpen: false,
      careerTitle: "",
      careerDescription: "",
      careerImage: "",
      careerAvailability: "",
      currentPage: 1,
      itemsPerPage: 6,
      jobs: [], // Ensure jobs is initialized
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.jobs.length / this.itemsPerPage);
    },
    paginatedJobs() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.jobs.slice(startIndex, startIndex + this.itemsPerPage);
    },
  },
  methods: {
    async fetchData() {
      try {
        const query = `*[_type == "careers"][0]{
          careerCards[]->{
            Availability,
            CareerTitle,
            CareerDescription,
            CareerImage {
              asset->{
                url
              }
            }
          }
        }`;

        const data = await sanityClient.fetch(query);

        if (data && data.careerCards) {
          this.jobs = data.careerCards.map((card) => ({
            careerAvailability: card.Availability,
            careerTitle: card.CareerTitle,
            careerDescription: card.CareerDescription,
            careerImage: card.CareerImage?.asset?.url || "",
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    openModal(title, image) {
      this.careerTitle = title;
      this.careerImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    updateItemsPerPage() {
      this.itemsPerPage = window.innerWidth < 640 ? 3 : 6; // Adjust for smaller screens
    },
  },
};
</script>
