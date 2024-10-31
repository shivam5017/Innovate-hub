

import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize your Sanity client
export const client = createClient({
  projectId: 'wn7zx56l', // replace with your project ID
  dataset: 'production',   
  token: process.env.SANITY_TOKEN,    
  useCdn: true,                
});

// Create a builder instance
const builder = imageUrlBuilder(client);

// Function to generate image URLs
export function urlFor(source) {
  return builder.image(source);
}

// Export the client

