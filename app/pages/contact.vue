<template>
  <section>
    <!-- Hero Section -->
    <div
      class="bg-[#BCEBFF] w-full h-auto md:h-[750px] flex items-center justify-center flex-col mb-10"
      data-aos="fade-up"
    >
      <div
        class="circlePosition w-[700px] h-[450px] bg-[#6AD2FF] bg-opacity-25 rounded-[100%] absolute z-1 md:left-[50%] left-[10%] translate-x-[50%] md:translate-y-[210%] translate-y-[380%] blur-[90px]"
      ></div>
      <div
        class="flex flex-col md:flex-row items-center justify-between w-full h-full"
      >
        <!-- Image on the left -->
        <div class="md:w-1/2 w-full h-full relative mb-8 md:mb-0">
          <img
            src="/contactus-pic.jpg"
            alt="Image description"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content on the right -->
        <div
          class="md:w-1/2 w-full h-full flex justify-center items-center text-center md:text-left p-10"
        >
          <div>
            <h1
              class="font-semibold md:text-3xl text-5xl 2xl:text-7xl overflow-hidden 2xl:border-r-4 md:border-[#6AD2FF] animate-fadeIn 2xl:animate-typing mb-8 md:whitespace-nowrap text-center"
            >
              We’re here to help
            </h1>

            <!-- Parent container with flex to center the h2 -->
            <div class="flex justify-center items-center w-full h-full">
              <h2
                class="font-regular text-base md:text-[25px] xl:px-2 w-[280px] xl:w-auto xl:leading-[40px] mb-8 text-center"
                data-aos="fade-up"
              >
                IT Squarehub combines the best practices and strategies to help
                you achieve your company objectives.
              </h2>
            </div>

            <div
              class="flex flex-col justify-center items-center gap-6 mt-8 sm:gap-4 sm:mt-4"
            >
              <div
                class="bg-white w-[280px] md:w-[331px] h-[109px] flex items-center rounded-[15px] p-4 hover:animate-tada"
                style="filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5))"
              >
                <Icon
                  name="ic:outline-mail-outline"
                  class="w-[60px] h-[50px]"
                />
                <div class="text-left ml-3">
                  <p
                    class="font-semibold text-[20px] sm:text-[18px] md:text-[22px]"
                  >
                    Email
                  </p>
                  <p
                    class="font-regular text-[14px] sm:text-[12px] md:text-[14px]"
                  >
                    {{ contactEmail }}
                  </p>
                </div>
              </div>
              <div
                class="bg-white w-[280px] md:w-[331px] h-[109px] flex items-center rounded-[15px] p-4 hover:animate-tada"
                style="filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5))"
              >
                <Icon
                  name="solar:phone-calling-linear"
                  class="w-[60px] h-[50px]"
                />
                <div class="text-left ml-3">
                  <p
                    class="font-semibold text-[20px] sm:text-[18px] md:text-[22px]"
                  >
                    Phone
                  </p>
                  <p
                    class="font-regular text-[14px] sm:text-[12px] md:text-[14px]"
                  >
                    {{ contactNumber }}
                  </p>
                </div>
              </div>
              <div
                class="bg-white w-[280px] md:w-[331px] h-[109px] flex items-center rounded-[15px] p-4 hover:animate-tada"
                style="filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5))"
              >
                <Icon
                  name="material-symbols:location-on-outline"
                  class="w-[60px] h-[50px]"
                />
                <div class="text-left ml-3">
                  <p
                    class="font-semibold text-[20px] sm:text-[18px] md:text-[22px]"
                  >
                    Location
                  </p>
                  <p
                    class="font-regular text-[14px] sm:text-[12px] md:text-[14px]"
                  >
                    {{ contactLocation }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="flex items-center justify-center px-4">
      <div
        class="flex flex-col md:flex-row gap-10 sm:gap-6 justify-between items-center p-8 w-full max-w-[1240px]"
      >
        <!-- Left Content -->
        <div class="w-full md:w-[50%] flex justify-center md:justify-start">
          <div
            class="animate-fadeInRight animate-on-scroll transition-all duration-1000"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1000"
          >
            <h1
              class="text-[35px] md:text-[50px] font-medium text-center md:text-left w-full max-w-[700px] mb-4"
            >
              Get in touch with one of our business Development Experts.
            </h1>
            <p
              class="mt-2 text-[18px] md:text-[20px] text-center md:text-left w-full max-w-[636px] leading-[33px] mb-4"
            >
              Our development experts will provide you with a comprehensive
              guide on our next generation outsourcing that will help your
              business grow. Get in touch now to unlock the benefits of having a
              well-qualified offshore team while keeping your costs to a
              minimum.
            </p>
            <div class="text-center md:text-left">
              <p class="mb-0 text-[18px] md:text-[20px]">
                You could give us a call.
              </p>
              <p class="font-semibold mb-0 text-[18px] md:text-[20px]">
                {{ cSectionEmail }}
              </p>
              <div v-for="(contact, index) in sectionContacts" :key="index">
                <p class="mb-0 text-[18px] md:text-[20px]">
                  {{ contact.countryName }} : {{ contact.contactNumber }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div
          class="bg-[#F4F4F4] rounded-lg p-6 w-full max-w-[539px] flex flex-col justify-start items-center animate-fadeInLeft animate-on-scroll transition-all duration-1000"
          style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1000"
        >
          <h2 class="font-semibold text-[20px] md:text-[25px]">
            We can’t wait to hear from you.
          </h2>
          <p class="text-[13px] md:text-[15px] mt-1 text-center">
            By clicking "Submit" you agree to the TOS and Privacy Policy.
          </p>
          <form class="flex flex-col mt-3 w-full items-center">
            <div class="relative w-full mb-[20px]">
              <Icon
                name="ic:outline-person-outline"
                class="absolute left-5 top-2.5 w-[21px] h-[21px] text-[#292D32]"
              />
              <input
                type="text"
                placeholder="Your full name"
                class="border p-2 pl-[50px] rounded-[10px] w-full"
              />
            </div>

            <div class="relative w-full mb-[20px]">
              <Icon
                name="ic:outline-mail-outline"
                class="absolute left-5 top-2.5 w-[21px] h-[21px] text-[#292D32]"
              />
              <input
                type="email"
                placeholder="Enter your mail"
                class="border p-2 pl-[50px] rounded-[10px] w-full"
              />
            </div>

            <div class="relative w-full mb-[40px]">
              <Icon
                name="material-symbols:chat-rounded"
                class="absolute left-5 top-3 w-[21px] h-[21px] text-[#292D32]"
              />
              <textarea
                placeholder="Type your message..."
                class="border p-2 pl-[50px] rounded-[10px] h-[210px] resize-none w-full bg-no-repeat bg-center"
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-black text-white rounded-[10px] w-full h-[46px]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- FAQ Section Start -->
    <div v-if="faqs.length > 0" class="bg-white py-10 mt-12">
      <div class="container mx-auto px-6 text-center">
        <h3 class="text-4xl font-semibold text-black mb-6" data-aos="fade-up">
          Frequently Asked Questions
        </h3>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
          data-aos="fade-up"
        >
          <div v-for="(faq, index) in faqs" :key="index" class="text-left">
            <h4 class="font-semibold text-black mb-8 text-2xl">
              {{ faq.question }}
            </h4>
            <p class="text-xl mb-8 text-gray-600">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- FAQ Section End -->
  </section>
  <FooterBanner />
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import sanityClient from "../sanity.js";

export default {
  mounted() {
    AOS.init({});

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });

    this.fetchData();
  },
  data() {
    return {
      contactEmail: "",
      contactNumber: "",
      contactLocation: "",
      cSectionEmail: "",
      sectionContacts: [
        {
          countryName: "",
          contactNumber: "",
          sectionContacts: "",
        },
      ],
      faqs: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const query1 = `*[_type == "contacts"]{
            ContactEmail,
            ContactNumber,
            ContactLocation,
            CSectionEmail,
            SectionContacts
          }`;

        const query2 = `*[_type == "faqs"]{
            random_id,
            Question,
            Answer
          }`;

        const data = await sanityClient.fetch(query1);
        const data2 = await sanityClient.fetch(query2);

        if (data.length) {
          const {
            ContactEmail,
            ContactNumber,
            ContactLocation,
            CSectionEmail,
            SectionContacts,
          } = data[0];

          this.contactEmail = ContactEmail || "";
          this.contactNumber = ContactNumber || "";
          this.contactLocation = ContactLocation || "";

          this.cSectionEmail = CSectionEmail || "";

          this.sectionContacts = SectionContacts
            ? SectionContacts.map((contact) => ({
                countryName: contact.CountryName || "",
                contactNumber: contact.ContactNumber || "",
              }))
            : [];
        }

        if (data2.length) {
          this.faqs = data2.map((faq) => ({
            randomID: faq.random_id || "",
            question: faq.Question || "",
            answer: faq.Answer || "",
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
