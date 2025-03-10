<template>
  <!-- Main Part Start-->
  <section
    class="px-6 py-10 md:py-16 min-h-screen flex flex-col justify-center w-full overflow-x-hidden"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div
      class="lg:flex mt-0 lg:mt-14 lg:justify-center lg:gap-60 sm:grid sm:grid-cols-1 md:mb-12 items-center"
    >
      <p
        class="font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl w-[50%] sm:text-center text-center 2sm:text-center lg:text-left mx-auto mb-10 lg:mx-0 sm:mb-6 md:mb-0"
      >
        {{ titlePage }}
      </p>
      <div class="flex justify-center lg:mt-[3em] sm:mt-[1rem]">
        <NuxtLink
          to="/contact"
          class="bg-[#6AD2FF] text-black text-2xl w-[12rem] py-3 rounded-md hover:bg-[#4DA8E0] transition duration-200 text-center flex justify-center mb-10"
          aria-label="Get Started"
        >
          Get Started
        </NuxtLink>
      </div>
    </div>
    <div class="relative flex space-x-6 mb-20 justify-center">
      <div
        v-for="(heroImg, index) in heroImages"
        :key="index"
        :class="[
          'relative group rounded-lg overflow-hidden transition-transform duration-300',
          index % 2 === 0 ? 'top-0' : 'top-10',
          'w-full md:w-80 lg:w-96',
          'h-72 md:h-80 lg:h-96',
        ]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <nuxt-img
          :src="heroImg.heroImageUrl"
          :alt="heroImg.heroAlt"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1"
        ></nuxt-img>
      </div>
    </div>
  </section>
  <!-- Main Part End-->

  <!-- Banner Start -->
  <section
    class="relative bg-[#6AD2FF] text-black py-16 px-6 flex items-center justify-center"
    data-aos="fade-left"
    data-aos-duration="1000"
  >
    <div
      class="relative w-full flex flex-col items-center justify-center space-y-8 sm:space-x-10 sm:flex-row"
    >
      <div class="flex-shrink-0 w-80 hidden sm:block">
        <img
          src="/designLeft.png"
          alt="Decorative Image"
          class="w-[50%] h-auto object-contain"
        />
      </div>
      <div class="w-full sm:w-1/2 text-center sm:text-left">
        <h1 class="text-4xl font-bold mb-4">{{ heroBannerTitle }}</h1>
        <p class="text-lg leading-relaxed">
          {{ heroBannerDescription }}
        </p>
      </div>
    </div>
  </section>
  <!-- Banner End -->

  <!-- Building Success Together Start -->

  <section
    class="relative text-black py-16 px-6 flex items-center justify-center overflow-x-hidden"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div
      class="circlePosition w-[500px] h-[450px] bg-[#6AD2FF] bg-opacity-30 rounded-[100%] absolute z-0 top-[20%] md:left-[66%] translate-x-[50%] lg:translate-y-[0%] translate-y-[90%] blur-[90px]"
    ></div>
    <div
      class="relative flex flex-col lg:flex-row items-center justify-center space-x-0 space-y-8 lg:space-y-0 lg:space-x-12"
    >
      <div class="relative gap-6 flex flex-col lg:flex-row justify-center">
        <div class="lg:w-1/2 text-center lg:text-left">
          <h2
            class="text-5xl font-semibold text-gray-800 mb-10 ml-1 lg:ml-10 lg:mb-6"
          >
            {{ titleOfSection }}
          </h2>
          <nuxt-img
            :src="sectionImage.secImageUrl"
            :alt="sectionImage.secAlt"
            class="w-full lg:w-3/4 ml-0 lg:ml-10 h-[500px] transition-transform duration-700 ease-in-out transform hover:scale-110 hover:translate-x-0"
          ></nuxt-img>
        </div>

        <div class="w-full lg:w-1/2 lg:text-left mt-10">
          <div class="space-y-16">
            <div
              v-for="(benefit, index) in benefits"
              :key="index"
              class="benefit-item"
            >
              <h1 class="text-3xl font-semibold">{{ benefit.BenefitTitle }}</h1>
              <p
                class="text-lg text-[#878787] leading-relaxed border-b-2 pb-4 mb-4 border-gray-300"
              >
                {{ benefit.BenefitDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Building Success Together End -->
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import sanityClient from "../sanity.js";

export default {
  data() {
    return {
      titlePage: "",
      heroImages: [],
      heroBannerTitle: "",
      heroBannerDescription: "",
      titleOfSection: "",
      sectionImage: {},
      benefits: [],
      memberCards: [],
    };
  },
  async created() {
    await this.fetchAboutHero();
  },
  mounted() {
    AOS.init();
  },
  methods: {
    async fetchAboutHero() {
      try {
        const query = `*[_type == "AboutHero"]{
            TitlePage,
            HeroImages[] {
              HeroImageTitle,
              HeroImageImg {
                asset->{
                  url
                }
              }
            },
            HeroBannerTitle,
            HeroBannerDescription,
            TitleOfSection,
            SectionImage[] {
              titleOfImage,
              BenefitImage {
                asset->{
                  url
                }
              }
            },
            Benefits[] {
              BenefitTitle,
              BenefitDescription
            },
            MemberCards[] {
              MemberName,
              MemberPosition,
              MemberLinkedIn,
              MemberImage {
                asset->{
                  url
                }
              }
            }
          }`;

        const data = await sanityClient.fetch(query);

        if (data.length) {
          const {
            TitlePage,
            HeroImages,
            HeroBannerTitle,
            HeroBannerDescription,
            TitleOfSection,
            SectionImage,
            Benefits,
            MemberCards,
          } = data[0];

          this.titlePage = TitlePage || "";
          this.heroImages = HeroImages
            ? HeroImages.map((heroImg) => ({
                heroAlt: heroImg.HeroImageTitle || "",
                heroImageUrl: heroImg.HeroImageImg?.asset.url || "",
              }))
            : [];
          this.heroBannerTitle = HeroBannerTitle || "";
          this.heroBannerDescription = HeroBannerDescription || "";
          this.titleOfSection = TitleOfSection || "";
          this.sectionImage =
            SectionImage && SectionImage[0]
              ? {
                  secAlt: SectionImage[0].titleOfImage || "",
                  secImageUrl: SectionImage[0].BenefitImage?.asset.url || "",
                }
              : {};
          this.benefits = Benefits || [];
          this.memberCards = MemberCards
            ? MemberCards.map((member) => ({
                MemberName: member.MemberName || "",
                MemberPosition: member.MemberPosition || "",
                MemberLinkedIn: member.MemberLinkedIn || "",
                MemberImageUrl: member.MemberImage?.asset?.url || "",
              }))
            : [];
        }
      } catch (error) {
        console.error("Error fetching AboutHero data:", error);
      }
    },
  },
};
</script>

<style scoped></style>
