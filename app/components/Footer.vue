<template>
  <footer class="bg-white py-10 border-t border-[#6AD2FF]">
    <div class="container mx-auto px-4 md:px-6">
      <!-- Grid with responsive columns -->
      <div
        class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-20 text-center md:text-left"
      >
        <!-- Company Info -->
        <div class="md:text-center lg:text-left">
          <NuxtLink to="#" class="logo-button">
            <nuxt-img
              class="mb-4 mx-auto"
              src="/its-logo-black.png"
              alt="IT Squarehub Logo"
              width="280"
              height="35"
            ></nuxt-img>
          </NuxtLink>
          <p
            class="text-sm lg:text-left md:text-center sm:text-sm md:text-base text-gray-600 mb-8"
          >
            We provide world-class services at a fraction of the cost without
            sacrificing quality.
          </p>
          <h4
            class="font-semibold text-base lg:text-left md:text-center sm:text-lg md:text-xl mb-2"
          >
            Contact and Follow Us on:
          </h4>
          <div class="mb-4">
            <a
              :href="`mailto:${email}`"
              class="block text-sm sm:text-sm md:text-base text-black hover:underline mb-2"
            >
              <Icon name="mdi-email" class="mr-2" /> {{ email }}
            </a>
          </div>
          <!-- Social Icons -->
          <div
            class="flex space-x-4 xl:text-left lg:justify-start md:justify-center sm:justify-center 2sm:justify-center"
          >
            <a
              :href="`${facebookLink}`"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center rounded-full bg-[#6AD2FF]"
            >
              <Icon
                name="mdi-facebook"
                class="text-white hover:text-gray-200 text-4xl"
              />
            </a>
            <a
              :href="`${instagramLink}`"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center rounded-full bg-[#6AD2FF]"
            >
              <Icon
                name="mdi-instagram"
                class="text-white hover:text-gray-200 text-4xl"
              />
            </a>
            <a
              :href="`${linkedInLink}`"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center rounded-full bg-[#6AD2FF]"
            >
              <Icon
                name="mdi-linkedin"
                class="text-white hover:text-gray-200 text-4xl"
              />
            </a>
            <a
              :href="`${twitterLink}`"
              target="_blank"
              rel="noopener noreferrer"
              class="w-12 h-12 flex items-center justify-center rounded-full bg-[#6AD2FF]"
            >
              <Icon
                name="mdi-twitter"
                class="text-white hover:text-gray-200 text-4xl"
              />
            </a>
          </div>
        </div>

        <!-- Contact Details -->
        <div class="text-center lg:text-left">
          <ul class="text-sm sm:text-base md:text-lg text-gray-600">
            <li
              v-for="(contact, index) in contactsData"
              :key="index"
              class="flex items-start mb-4 justify-center lg:justify-start"
            >
              <div>
                <span class="font-semibold text-base sm:text-lg md:text-xl"
                  >{{ contact.country }}:</span
                ><br />
                <div
                  v-for="(contactNumber, index) in contact.contactNumbers"
                  :key="index"
                >
                  <Icon name="mdi-phone" class="mr-1 text-black" />
                  <span class="text-sm sm:text-base md:text-lg">{{
                    contactNumber.number
                  }}</span
                  ><br />
                </div>

                <Icon name="mdi-map-marker" class="mr-1 text-black" />
                <span class="text-sm sm:text-base md:text-lg">{{
                  contact.address
                }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-6 grid grid-cols-3 gap-6 justify-center">
          <nuxt-img
            v-for="(cert, index) in certificationsData"
            :key="index"
            :class="'mb-4'"
            :src="cert.imageUrl"
            :alt="cert.alt"
            class="w-full sm:w-[400px] md:w-[500px] lg:w-[600px]"
            height="400"
          ></nuxt-img>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import sanityClient from "../sanity.js";

export default {
  data() {
    return {
      email: "",
      facebookLink: "",
      instagramLink: "",
      linkedInLink: "",
      twitterLink: "",
      outsourcingServicesData: [],
      otherServicesData: [],
      contactsData: [],
      certificationsData: [],
    };
  },
  async created() {
    await this.fetchServices();
  },
  methods: {
    async fetchServices() {
      try {
        // Expanded GROQ query to fetch all fields from the "services" schema
        const query = `*[_type == "services"]{
            email,
            facebook,
            instagram,
            linkedIn,
            twitter,
            outsourcingServices,
            otherServices,
            contacts[]{
              country,
              contactNumbers[]{
                number
              },
              address
            },
            certifications[]{
              titleOfCertification,
              imageOfCertification{
                asset->{
                  _id,
                  url
                }
              }
            }
          }`;

        // Fetch data from Sanity CMS
        const data = await sanityClient.fetch(query);

        // Process fetched data if available
        if (data.length) {
          const {
            email,
            facebook,
            instagram,
            linkedIn,
            twitter,
            outsourcingServices,
            otherServices,
            contacts,
            certifications,
          } = data[0];

          this.email = email || "";
          this.facebookLink = facebook || "";
          this.instagramLink = instagram || "";
          this.linkedInLink = linkedIn || "";
          this.twitterLink = twitter || "";

          this.outsourcingServicesData = outsourcingServices
            ? outsourcingServices.split(",").map((service) => service.trim())
            : [];
          this.otherServicesData = otherServices
            ? otherServices.split(",").map((service) => service.trim())
            : [];

          // Updating the contacts data based on new schema structure
          this.contactsData = contacts
            ? contacts.map((contact) => ({
                country: contact.country || "",
                contactNumbers: contact.contactNumbers || [],
                address: contact.address || "",
              }))
            : [];

          // Updating certifications data
          this.certificationsData = certifications
            ? certifications.map((cert) => ({
                alt: cert.titleOfCertification || "",
                imageUrl: cert.imageOfCertification?.asset?.url || "",
              }))
            : [];
        }
        console.log("Services:", data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    },
  },
};
</script>

<style scoped></style>
