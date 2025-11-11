import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  integrations: [
    tailwind(), 
      robotsTxt(),
   
  ],
});


import robotsTxt from "astro-robots-txt"

// // https://astro.build/config


// export default defineConfig({
//   integrations: [tailwind(), robotsTxt()],
//   site: 'https://porfolio.dev/'
// })
