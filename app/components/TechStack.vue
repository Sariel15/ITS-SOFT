<template>
  <section class="py-14 relative">
    <div
      class="circlePosition w-[700px] h-[450px] bg-[#6AD2FF] bg-opacity-25 rounded-[100%] absolute z-0 top-[20%] md:left-[50%] translate-x-[50%] md:translate-y-[50%] translate-y-[90%] blur-[90px]"
    ></div>
    <div
      class="lg:flex lg:justify-center lg:gap-42 md:mx-10 md:grid md:grid-cols-1 md:gap-5 items-center lg:mt-12"
    >
      <div
        class="font-semibold text-4xl sm:text-5xl md:text-5xl lg:text-6xl lg:w-[50%] sm:text-center text-center 2sm:text-center lg:text-left mx-auto mb-10 lg:mx-0 sm:mb-6 md:mb-8"
      >
        Dream big, build bold —Our Tech Stack makes it happen.
      </div>
      <div
        class="grid grid-cols-2 justify-between justify-self-center sm:flex sm:flex-row gap-4"
      >
        <button
          v-for="(group, index) in techStack"
          :key="index"
          :class="{
            'bg-black text-white text-xl w-[8rem] py-2 rounded hover:scale-105 hover:bg-gray-800 transition-transform duration-300':
              activeButton === 'frontend',
            'bg-gray-200 text-black text-xl w-[8rem] py-2 rounded hover:bg-gray-300 hover:scale-105 transition-transform duration-300':
              activeButton !== 'frontend',
          }"
          @click="setActiveButton(group.techGroup)"
        >
          {{ group.techGroup }}
        </button>
      </div>
    </div>
    <div class="mt-10 mx-4 sm:mx-32">
      <div
        v-for="(group, index) in techStack"
        :key="index"
        class="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-14"
      >
        <div
          v-if="activeButton === group.techGroup"
          v-for="(tech, techIndex) in group.techs"
          :key="techIndex"
        >
          <Card
            :title="tech.techName"
            :description="tech.techDescription"
            :image="tech.techImageUrl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sanityClient from "../sanity.js";

export default {
  name: "TechStack",
  data() {
    return {
      activeButton: "",
      techStack: [],
    };
  },
  async created() {
    await this.fetchTechStackData();

    console.log("Fetched tech stack data:", this.techStack);

    if (this.techStack.length > 0) {
      this.activeButton = this.techStack[0].techGroup;
    }
  },
  methods: {
    setActiveButton(groupName) {
      console.log(`Button clicked: ${groupName}`);
      this.activeButton = groupName;
    },

    async fetchTechStackData() {
      const query = `*[_type == "Home"]{
            TechStack[] {
              TechGroup,
              Techs[] {
                TechName,
                TechLogo {
                  asset-> { url }
                },
                TechDescription
              }
            }
        }`;

      try {
        const data = await sanityClient.fetch(query);

        console.log("Fetched data from Sanity:", data);

        if (data.length) {
          const { TechStack } = data[0];

          this.techStack = TechStack
            ? TechStack.map((group) => ({
                techGroup: group.TechGroup || "",
                techs: group.Techs
                  ? group.Techs.map((tech) => ({
                      techName: tech.TechName || "",
                      techDescription: tech.TechDescription || "",
                      techImageUrl: tech.TechLogo?.asset?.url || "",
                    }))
                  : [],
              }))
            : [];
        }
      } catch (error) {
        console.error("Error fetching tech stack data:", error);
      }
    },
  },
};
</script>

<style scoped></style>
