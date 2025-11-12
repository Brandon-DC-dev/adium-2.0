import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

export default defineConfig({
  integrations: [
    tailwind(), 
      robotsTxt(),
      react()
   
  ],
});


import robotsTxt from "astro-robots-txt"

// // https://astro.build/config


// export default defineConfig({
//   integrations: [tailwind(), robotsTxt()],
//   site: 'https://porfolio.dev/'
// })
