import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "w2qkfye8",
  dataset: "sofdev",
  apiVersion: "2023-01-01", 
  useCdn: true,
});
