<template>
  <div class="min-h-screen bg-[#6AD2FF] py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1
          class="text-4xl md:text-5xl font-medium text-gray-900 mb-4 px-2 leading-tight"
        >
          Upgrade Your Website – Get Professional Tech Assistance!
        </h1>
        <p class="text-xl md:text-3xl text-black">
          Expert Solutions for Your Website Needs
        </p>
      </div>

      <div class="relative">
        <NuxtImg
          src="/clover-icon.png"
          alt="Decorative Background"
          class="w-[400px] h-[350px] absolute z-0 top-[-25%] left-[85%] opacity-100 hidden 2xl:block"
        />
        <NuxtImg
          src="/leaf-icon.png"
          alt="Decorative Background"
          class="w-[200px] h-[200px] absolute z-0 top-[-25%] right-[100%] opacity-100 hidden 2xl:block"
        />
        <NuxtImg
          src="/circle-icon.png"
          alt="Decorative Background"
          class="w-[400px] h-[400px] absolute z-0 bottom-[-25%] right-[85%] opacity-100 hidden 2xl:block"
        />
        <NuxtImg
          src="/2circle-icon.png"
          alt="Decorative Background"
          class="w-[150px] h-[100px] absolute z-0 bottom-[-10%] left-[105%] opacity-100 hidden 2xl:block"
        />

        <!-- Assessment Form -->
        <div
          class="bg-white rounded-3xl shadow-xl p-8 border-black border-2 relative z-10"
        >
          <div v-if="!isSubmitted">
            <!-- Progress Indicator -->
            <div class="mb-8">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-gray-700">Progress</span>
                <span class="text-sm font-medium text-gray-700"
                  >{{ currentStep }}/5</span
                >
              </div>
              <div class="bg-gray-200 rounded-full h-2">
                <div
                  class="bg-[#6AD2FF] h-2 rounded-full transition-all duration-500"
                  :style="{ width: `${(currentStep / 5) * 100}%` }"
                ></div>
              </div>
            </div>

            <!-- Step 1: Technology Stack -->
            <div v-if="currentStep === 1" class="space-y-6">
              <h2
                class="text-3xl font-medium text-gray-900 mb-4 md:text-left text-center"
              >
                Current Technology Stack
              </h2>

              <div
                class="grid grid-cols-1 md:grid-cols-2 gap-8 md:text-left text-center"
              >
                <div>
                  <h3 class="text-sm font-medium text-black">
                    Front-end Technologies
                  </h3>
                  <select
                    v-model="assessment.frontend"
                    multiple
                    class="mt-2 block w-full md:text-left text-center"
                    style="height: auto; overflow: hidden"
                  >
                    <option
                      v-for="tech in frontendTech"
                      :key="tech.frontendTechValue"
                      :value="tech.frontendTechValue"
                    >
                      {{ tech.frontendTechName }}
                    </option>
                  </select>
                  <hr class="border-gray-400 border-1 mt-4" />
                </div>

                <div>
                  <h3 class="text-sm font-medium text-black">
                    Cloud Technologies
                  </h3>
                  <select
                    v-model="assessment.cloud"
                    multiple
                    class="mt-2 block w-full md:text-left text-center"
                    style="height: auto; overflow: hidden"
                  >
                    <option
                      v-for="tech in cloudTech"
                      :key="tech.cloudTechValue"
                      :value="tech.cloudTechValue"
                    >
                      {{ tech.cloudTechName }}
                    </option>
                  </select>
                  <hr class="border-gray-400 border-1 mt-4" />
                </div>

                <div>
                  <h3 class="text-sm font-medium text-black">
                    Back-end Technologies
                  </h3>
                  <select
                    v-model="assessment.backend"
                    multiple
                    class="mt-2 block w-full md:text-left text-center"
                    style="height: auto; overflow: hidden"
                  >
                    <option
                      v-for="tech in backendTech"
                      :key="tech.backendTechValue"
                      :value="tech.backendTechValue"
                    >
                      {{ tech.backendTechName }}
                    </option>
                  </select>
                  <hr class="border-gray-400 border-1 mt-4" />
                </div>

                <div>
                  <h3 class="text-sm font-medium text-black">
                    Database Technologies
                  </h3>
                  <select
                    v-model="assessment.database"
                    multiple
                    class="mt-2 block w-full md:text-left text-center"
                    style="height: auto; overflow: hidden"
                  >
                    <option
                      v-for="tech in dbTech"
                      :key="tech.databaseTechValue"
                      :value="tech.databaseTechValue"
                    >
                      {{ tech.databaseTechName }}
                    </option>
                  </select>
                  <hr class="border-gray-400 border-1 mt-4" />
                </div>
              </div>
            </div>

            <!-- Step 2: Business Requirements -->
            <div v-if="currentStep === 2" class="space-y-6">
              <h2
                class="text-3xl font-medium text-black mb-4 md:text-left text-center"
              >
                Business Requirements
              </h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-black"
                    >Expected User Base</label
                  >
                  <input
                    v-model="assessment.userBase"
                    type="number"
                    placeholder="Enter number of users..."
                    class="mt-1 block w-full rounded-md border border-gray-400 focus:outline-black p-2"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-black"
                    >Scalability Requirements</label
                  >
                  <select
                    v-model="assessment.scalability"
                    class="mt-1 block w-full rounded-md border border-gray-400 focus:outline-black p-2"
                  >
                    <option
                      v-for="option in scalabilityReqs"
                      :key="option.scalabilityValue"
                      :value="option.scalabilityValue"
                    >
                      {{ option.scalabilityOption }}
                    </option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-black"
                    >Budget Range</label
                  >
                  <select
                    v-model="assessment.budget"
                    class="mt-1 block w-full rounded-md border border-gray-400 focus:outline-black p-2"
                  >
                    <option
                      v-for="option in budgetRange"
                      :key="option.budgetRangeValue"
                      :value="option.budgetRangeValue"
                    >
                      {{ option.budgetRangeOption }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Step 3: Pain Points -->
            <div v-if="currentStep === 3" class="space-y-6">
              <h2
                class="text-3xl font-medium text-gray-900 mb-4 md:text-left text-center"
              >
                Current Challenges
              </h2>
              <div class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    v-for="(challenge, index) in challenges"
                    :key="index"
                    class="flex items-center"
                  >
                    <input
                      type="checkbox"
                      v-model="assessment.challenges"
                      :value="challenge.id"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label class="ml-2 block text-sm text-gray-900">
                      {{ challenge.text }}
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-black"
                    >Others</label
                  >
                  <input
                    v-model="assessment.others"
                    type="string"
                    placeholder="Type Here..."
                    class="mt-1 block w-full rounded-md border border-gray-400 focus:outline-black p-2"
                  />
                </div>
              </div>
            </div>

            <!-- Step 4: Timeline and Goals -->
            <div v-if="currentStep === 4" class="space-y-6">
              <h2
                class="text-3xl font-medium text-black mb-4 md:text-left text-center"
              >
                Project Timeline and Goals
              </h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-black"
                    >Implementation Timeline</label
                  >
                  <select
                    v-model="assessment.timeline"
                    class="mt-1 block w-full rounded-md border border-gray-400 focus:outline-black p-2"
                  >
                    <option
                      v-for="option in timelinePeriod"
                      :key="option.timelineValue"
                      :value="option.timelineValue"
                    >
                      {{ option.timelineOption }}
                    </option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-black"
                    >Primary Goals</label
                  >
                  <textarea
                    v-model="assessment.goals"
                    rows="4"
                    class="mt-1 block w-full rounded-md border border-gray-400 focus:outline-black p-2"
                    placeholder="Describe your main objectives..."
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- Step 5: Personal Information -->
            <div v-if="currentStep === 5" class="space-y-6">
              <h2
                class="text-3xl font-medium text-black mb-4 md:text-left text-center"
              >
                Personal Information
              </h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-black"
                    >Name</label
                  >
                  <input
                    v-model="assessment.userName"
                    type="string"
                    placeholder="Type Here..."
                    class="mt-1 block w-full rounded-md border border-gray-400 focus:outline-black p-2"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-black"
                    >Email</label
                  >
                  <input
                    v-model="assessment.userEmail"
                    type="string"
                    placeholder="Type Here..."
                    class="mt-1 block w-full rounded-md border border-gray-400 focus:outline-black p-2"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-black"
                    >Phone Number</label
                  >
                  <input
                    v-model="assessment.userNumber"
                    type="number"
                    placeholder="Enter your Phone number here..."
                    class="mt-1 block w-full rounded-md border border-gray-400 focus:outline-black p-2"
                  />
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="mt-8 flex justify-between">
              <button
                @click="previousStep"
                v-if="currentStep > 1"
                class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-300 hover:text-black"
              >
                Previous
              </button>
              <button
                @click="currentStep === 5 ? submitAssessment() : nextStep()"
                class="ml-auto bg-black text-white px-4 py-2 rounded-md hover:bg-gray-300 hover:text-black"
              >
                {{ currentStep === 5 ? "Submit" : "Next" }}
              </button>
            </div>
          </div>

          <!-- Results Overlay -->
          <div
            v-if="isSubmitted"
            class="fixed inset-0 bg-white flex items-center justify-center"
          >
            <div
              class="bg-[#6AD2FF] rounded-3xl shadow-xl p-2 py-10 md:p-16 border-black border-2 text-center relative"
            >
              <!-- Close Button (Icon) -->
              <button
                @click="isSubmitted = false"
                class="absolute top-4 right-4 text-black hover:text-white"
              >
                <!-- Close Icon (X) using Heroicons -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <p class="text-black font-medium text-3xl md:text-4xl mb-8 p-4">
                You have successfully submitted.
              </p>
              <NuxtLink
                to="/contact"
                class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-300 hover:text-black"
              >
                Consult Now
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import sanityClient from "../sanity.js";

const currentStep = ref(1);
const isSubmitted = ref(false);

const assessment = reactive({
  frontend: [],
  backend: [],
  cloud: [],
  database: [],
  userName: "",
  userBase: "",
  others: "",
  userEmail: "",
  userNumber: "",
  scalability: "",
  budget: "",
  challenges: [],
  timeline: "",
  goals: "",
});

const challenges = [
  { id: "performance", text: "Performance Issues" },
  { id: "scaling", text: "Scaling Challenges" },
  { id: "security", text: "Security Concerns" },
  { id: "maintenance", text: "Maintenance Difficulties" },
  { id: "integration", text: "Integration Problems" },
  { id: "costs", text: "High Operational Costs" },
];

const frontendTech = ref([]);
const backendTech = ref([]);
const cloudTech = ref([]);
const dbTech = ref([]);
const scalabilityReqs = ref([]);
const budgetRange = ref([]);
const timelinePeriod = ref([]);

const nextStep = () => {
  if (currentStep.value < 5) currentStep.value++;
};

const previousStep = () => {
  if (currentStep.value > 1) currentStep.value--;
};

const submitAssessment = async () => {
  isSubmitted.value = true;
  // You can handle submission logic here
  console.log("Assessment submitted:", assessment);
};

const fetchData = async () => {
  try {
    const query = `*[_type == "techInquiry"][0]{
      frontendTech,
      backendTech,
      cloudTech,
      dbTech,
      scalabilityReqs,
      budgetRange,
      timelinePeriod
    }`;

    const data = await sanityClient.fetch(query);

    if (data) {
      frontendTech.value = data.frontendTech || [];
      backendTech.value = data.backendTech || [];
      cloudTech.value = data.cloudTech || [];
      dbTech.value = data.dbTech || [];
      scalabilityReqs.value = data.scalabilityReqs || [];
      budgetRange.value = data.budgetRange || [];
      timelinePeriod.value = data.timelinePeriod || [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchData);
</script>
