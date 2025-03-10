<template>
  <section class="mx-8 md:mx-0">
    <div
      class="lg:flex mt-0 lg:mt-14 lg:justify-center sm:grid sm:grid-cols-1 md:mb-12 items-center"
    >
      <p
        class="font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl lg:w-[50%] sm:text-center text-center 2sm:text-center lg:text-left mx-auto mb-10 lg:mx-0 sm:mb-6 md:mb-0"
      >
        Main Benefits of Software Development
      </p>
      <div class="flex justify-center mt-10">
        <NuxtLink
          to="/contact"
          class="bg-[#6AD2FF] text-black text-2xl w-[12rem] py-3 rounded-md hover:bg-[#4DA8E0] transition duration-200 text-center flex justify-center"
          aria-label="Get Started"
        >
          Get Started
        </NuxtLink>
      </div>
    </div>
    <div
      class="grid lg:grid-cols-2 lg:justify-center items-center md:mx-10 sm:mx-20 2sm:mx-5 md:grid-cols-1 md:gap-6 sm:gap-6 2sm:gap-6 mt-10"
    >
      <div class="flex flex-col space-y-6 xl:ml-[40%] lg:ml-[30%]">
        <div
          v-for="(benefits, index) in homeBenefits"
          :key="index"
          class="bg-greybox p-4 rounded-lg shadow-md flex items-center outline outline-1 outline-greyoutline hover:scale-105 hover:bg-gray-200 transition-transform duration-300"
        >
          <NuxtImg :src="benefits.benefitIcon" class="w-12 h-12 mr-4" />
          <div>
            <h3 class="font-semibold text-3xl">{{ benefits.benefitName }}</h3>
          </div>
        </div>
      </div>
      <div
        v-if="homeTestimonials.length > 0"
        class="bg-[#EBF9FF] p-6 rounded-lg shadow-md flex flex-col items-start mt-10 sm:mt-0 xl:mr-[40%] lg:mr-[30%] justify-between outline outline-1 outline-greyoutline h-[100%]"
      >
        <div>
          <img src="~/public/its-logo_v1.3 - on dark.png" class="my-6 ml-6" />
          <p class="text-2xl mx-8 text-center italic overflow-y-auto">
            {{ homeTestimonials[currentIndex].testimonials }}
          </p>
        </div>

        <div class="mt-10 flex justify-between items-center w-full">
          <div class="flex items-center mr-12">
            <NuxtImg
              :src="homeTestimonials[currentIndex].profilePicture"
              class="mr-8"
            />
            <div class="flex flex-col">
              <p>{{ homeTestimonials[currentIndex].name }}</p>
              <p>{{ homeTestimonials[currentIndex].position }}</p>
            </div>
          </div>

          <div class="flex flex-row space-x-2">
            <button @click="changeReview('left')">
              <NuxtImg src="/Arrow-left.png" />
            </button>
            <button @click="changeReview('right')">
              <NuxtImg src="/Arrow-right.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sanityClient from "../sanity.js";

export default {
  data() {
    return {
      homeBenefits: [],
      homeTestimonials: [],
      currentIndex: 0,
    };
  },
  async created() {
    await this.fetchBenefitsData();
  },

  methods: {
    changeReview(direction) {
      if (direction === "left") {
        this.currentIndex =
          this.currentIndex === 0
            ? this.homeTestimonials.length - 1
            : this.currentIndex - 1;
      } else if (direction === "right") {
        this.currentIndex =
          this.currentIndex === this.homeTestimonials.length - 1
            ? 0
            : this.currentIndex + 1;
      }
    },
    async fetchBenefitsData() {
      try {
        const query = `*[_type == "Home"]{
                        HomeBenefits[] {
                        BenefitName,
                        BenefitIcon {
                            asset->{
                            url
                            }
                        }
                        },
                        HomeTestimonials[] {
                            NameOfTestimonee,
                            TestimonialStatement,
                            ImageOfTestimonee {
                                asset->{
                                    url
                                }
                            },
                            TestimoneePosition,
                        }
                    }`;

        const data = await sanityClient.fetch(query);

        if (data.length) {
          const { HomeBenefits, HomeTestimonials } = data[0];

          this.homeBenefits = HomeBenefits
            ? HomeBenefits.map((benefits) => ({
                benefitName: benefits.BenefitName || "",
                benefitIcon: benefits.BenefitIcon?.asset?.url || "",
              }))
            : [];
          this.homeTestimonials = HomeTestimonials
            ? HomeTestimonials.map((testimonial) => ({
                name: testimonial.NameOfTestimonee || "",
                testimonials: testimonial.TestimonialStatement || "",
                profilePicture: testimonial.ImageOfTestimonee?.asset?.url || "",
                position: testimonial.TestimoneePosition || "",
              }))
            : [];
        }
        console.log("Benefits data:", data);
      } catch (error) {
        console.error("Error fetching Benefits data:", error);
      }
    },
  },
};
</script>

<style></style>
