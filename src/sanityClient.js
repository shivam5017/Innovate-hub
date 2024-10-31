import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "wn7zx56l", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  token: process.env.SANITY_TOKEN,
  useCdn: true, // `false` if you want fresh data
});
