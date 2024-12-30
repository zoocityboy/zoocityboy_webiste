// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://zoocityboy.github.io/",
  base: "zoocityboy.github.io",
  trailingSlash: "never",
  integrations: [
    starlight({
      title: "ZOOCITYBOY",
      logo: {
        alt: "ZOOCITYBOY",
        src: "./src/assets/zoocityboy_light.png",
        dark: "./src/assets/zoocityboy_dark.png",
        light: "./src/assets/zoocityboy_light.png",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/zoocityboy",
        twitter: "https://twitter.com/zoocityboy",
        blueSky: "https://bluesky.dev",
      },
      sidebar: [
        // { label: 'Home', link: '/' },
        {
          label: "Getting Started",
          collapsed: false,
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Intro", slug: "guides/intro" },
          //   { label: "Installation", slug: "guides/installation" },
          //   { label: "Usage", slug: "guides/usage" },
          //   { label: "Example Guide", slug: "guides/example" },
          // ],
          autogenerate: { directory: "start" },
        },
        {
          label: "Create Bricks",
          collapsed: true,
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: "Intro", slug: "guides/intro" },
          //   { label: "Installation", slug: "guides/installation" },
          //   { label: "Usage", slug: "guides/usage" },
          //   { label: "Example Guide", slug: "guides/example" },
          // ],
          autogenerate: { directory: "create" },
        },
        {
          label: "Reference",
          collapsed: true,
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
