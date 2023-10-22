import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
    intergrations: [
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                page: 'storyblok/Page',
            },
            apiOptions: {
                // Choose your Storyblok space region
                region: 'eu', // optional,  or 'eu' (default)
              },
    })]
});
