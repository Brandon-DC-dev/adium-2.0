/* empty css                              */
import { c as createComponent, m as maybeRenderHead, r as renderSlot, a as renderTemplate, b as createAstro, d as addAttribute, s as spreadAttributes, e as createTransitionScope, f as renderComponent, g as renderHead } from './astro_C5BiJyZf.mjs';
/* empty css                         */

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/Badge.astro", void 0);

const $$Astro$b = createAstro();
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl px-4 sm:px-6 lg:px-8`, "class")}> ${renderSlot($$result, $$slots["default"])} </section> <!-- class={\`section \${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl\`} -->`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/SectionContainer.astro", void 0);

const $$Astro$a = createAstro();
const $$SocialPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SocialPill;
  return renderTemplate`${maybeRenderHead()}<a${spreadAttributes(Astro2.props)} target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/SocialPill.astro", void 0);

const $$Astro$9 = createAstro();
const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/icons/LinkedIn.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$GloboFondo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<canvas id="cobe" class="fixed top-0 left-0 w-full h-full z-[-1]" width="1200" height="1200"></canvas> <script type="module">\n  import createGlobe from "https://cdn.skypack.dev/cobe"\n\n  let phi = 0\n  const canvas = document.getElementById("cobe")\n\n  const globe = createGlobe(canvas, {\n    devicePixelRatio: 2,\n    width: canvas.offsetWidth * 2,\n    height: canvas.offsetHeight * 2,\n    phi: 0,\n    theta: 0.3,\n    dark: 0,\n    diffuse: 1.2,\n    scale: 1.1,\n    mapSamples: 16000,\n    mapBrightness: 6,\n    baseColor: [1, 1, 1],\n    markerColor: [1, 0.5, 1],\n    glowColor: [1, 1, 1],\n    offset: [0, 0],\n    markers: [\n      { location: [37.7595, -122.4367], size: 0.03 },\n      { location: [40.7128, -74.006], size: 0.1 },\n    ],\n    onRender: (state) => {\n      state.phi = phi\n      phi += 0.003 // m\xE1s lento para que parezca est\xE1tico\n    },\n  })\n\n  // Recalcular tama\xF1o al cambiar viewport\n  window.addEventListener("resize", () => {\n    globe.width = canvas.offsetWidth * 2\n    globe.height = canvas.offsetHeight * 2\n  })\n<\/script>'])), maybeRenderHead());
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/GloboFondo.astro", void 0);

const $$Astro$8 = createAstro();
const $$Sun = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Sun;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path> </svg>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/icons/Sun.astro", void 0);

const $$Astro$7 = createAstro();
const $$Moon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Moon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> </svg>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/icons/Moon.astro", void 0);

const $$Astro$6 = createAstro();
const $$System = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$System;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path> <path d="M7 20h10"></path> <path d="M9 16v4"></path> <path d="M15 16v4"></path> </svg>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/icons/System.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="relative ml-1 mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="appearance-none border-none flex hover:scale-125 transition" data-astro-cid-x3pjskd3', '> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu" class="absolute hidden scale-80 top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md" data-astro-cid-x3pjskd3', "> <ul data-astro-cid-x3pjskd3> ", ` </ul> </div> </div>  <script>
  let remove = null
  const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
  const themesMenu = document.getElementById("themes-menu")

  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system"
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  }

  const updateIcon = (themePreference) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element) => {
      element.style.scale = element.id === themePreference ? "1" : "0"
    })
  }

  const updateTheme = () => {
    if (remove != null) {
      remove()
    }
    matchMedia.addEventListener("change", updateTheme)
    remove = () => {
      matchMedia.removeEventListener("change", updateTheme)
    }

    const themePreference = getThemePreference()
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && matchMedia.matches)

    updateIcon(themePreference)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }

  updateTheme()

  document.addEventListener("click", () => themesMenu.classList.remove("open"))

  document.getElementById("theme-toggle-btn").addEventListener("click", (e) => {
    e.stopPropagation()
    const isClosed = !themesMenu.classList.contains("open")
    themesMenu.classList[isClosed ? "add" : "remove"]("open")
  })

  document.querySelectorAll(".themes-menu-option").forEach((element) => {
    element.addEventListener("click", (e) => {
      localStorage.setItem("theme", e.target.innerText.toLowerCase().trim())
      updateTheme()
    })
  })

  document.addEventListener('astro:after-swap', () => {
    updateTheme();
    window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
  })
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ko5uysgj"), "data-astro-transition-persist"), renderComponent($$result, "SunIcon", $$Sun, { "id": "light", "class": "theme-toggle-icon size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$Moon, { "id": "dark", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$System, { "id": "system", "class": "theme-toggle-icon absolute size-5 transition-all", "data-astro-cid-x3pjskd3": true }), addAttribute(createTransitionScope($$result, "d5hlxqxh"), "data-astro-transition-persist"), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/ThemeToggle.astro", "self");

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Agendas",
      label: "angendas",
      url: "/#agendas"
    },
    {
      title: "Taps",
      label: "taps",
      url: "/#taps"
    }
    // {
    //   title: "Sobre mí",
    //   label: "sobre-mi",
    //   url: "/#sobre-mi",
    // },
    // {
    //   title: "Habilidades",
    //   label: "habilidades",
    //   url: "/#habilidades",
    // },
    // {
    //   title: "Contacto",
    //   label: "contacto",
    //   url: "mailto:brandon062900@gmail.com",
    // }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="flex px-3 text-sm md:text-base font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </nav> </header>  `;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">&copy; ${currentYear}
Powered by <a href="https://www.linkedin.com/in/brandon-diaz-castillo-b22620273/" class="hover:underline">BrandonDC-dev</a>. All rights reserved.
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a href="/#sobre-mi" class="hover:underline me-4 md:me-6">Sobre mí</a> </li> <li> <a id="contacto" href="mailto:brandon062900@gmail.com" class="hover:underline">Contacto</a> </li> </ul> </div> </footer>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/Footer.astro", void 0);

const $$Astro$5 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/node_modules/.pnpm/astro@4.4.5_typescript@5.3.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="relative text-black dark:text-white"> <!-- <Globo client:load  /> --> <!-- <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    ></div> --> <!-- 🌞 Fondo modo claro: Dreamy Sky Pink Glow --> <div class="absolute inset-0 z-[-2] min-h-screen w-full bg-[#fefcff] dark:hidden" style="
      background-image:
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%);
      background-repeat: no-repeat;
      background-size: cover;
    "></div> <!-- Fondo modo oscuro --> <div class="absolute inset-0 z-[-2] min-h-screen w-full hidden dark:block bg-black" style="
      background:
        radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
        radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
        radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
        radial-gradient(ellipse 210% 80% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
        #000000;"></div> <!-- 
   <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    > </div> --> ${renderComponent($$result, "GloboFondo", $$GloboFondo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/GloboFondo.astro", "client:component-export": "default" })} ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/layouts/Layout.astro", void 0);

const $$Components = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Design System porfolio.dev", "description": "El cat\xE1logo de componentes de nuestro porfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-44 pb-32 flex flex-col gap-y-10" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt;Badge /&gt;</h1> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })} </article> <article class="mb-10"> <h1 class="mb-4 text-xl font-semibold">&lt SocialPill /&gt;</h1> <div class="flex"> ${renderComponent($$result3, "SocialPill", $$SocialPill, { "href": "https://www.linkedin.com/in/brandon-diaz-castillo-b22620273/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })}
LinkedIn
` })} </div> </article> ` })} ` })}`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/pages/components.astro", void 0);

const $$file$1 = "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/pages/components.astro";
const $$url$1 = "/components";

const components = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Components,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full min-h-screen flex flex-col justify-center items-center text-center px-8 font-orbitron"> <!-- PLANETA ADIUM --> <h1 class="text-6xl sm:text-3xl font-extrabold text-[#b3141d] tracking-widest tracking-[0.3em] dark:text-white">
PLANETA ADIUM
</h1> <!-- GEN A26 --> <h2 class="text-6xl sm:text-8xl font-extrabold text-[#b3141d] tracking-[0.15em]  border-b-4 border-[#b3141d] py-2 mt-2">
GEN A26
</h2> <!-- EVOLUCIÓN SIN LÍMITES --> <p class="mt-4 text-xl sm:text-2xl font-semibold tracking-widest text-[#27427a]">
EVOLUCIÓN SIN LÍMITES
</p> </div>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TitleSection;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${Astro2.props.className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h2>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/TitleSection.astro", void 0);

const $$Agendas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700"> <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">AGENDAS</h5> <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
Visualiza las Agendas para mantenerte al día de las actividades.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-6"> <!-- Botón OLE --> <a href="#" class="flex flex-col items-center justify-center w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg px-6 py-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"> <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-2" viewBox="0 -960 960 960" fill="currentColor"> <path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"></path> </svg> <div class="text-center"> <div class="text-base">Agenda</div> <div class="text-4xl font-bold -mt-1">OLE</div> </div> </a> <!-- Botón GEM --> <a href="#" class="flex flex-col items-center justify-center w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg px-6 py-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"> <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mb-2" viewBox="0 -960 960 960" fill="currentColor"> <path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"></path> </svg> <div class="text-center"> <div class="text-base">Agenda</div> <div class="text-4xl font-bold -mt-1">GEM</div> </div> </a> </div> </div>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/Agendas.astro", void 0);

const $$Astro$2 = createAstro();
const $$File = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$File;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.75569 16.3581C2.73952 16.5157 2.75791 16.6749 2.80957 16.8246C2.86124 16.9743 2.94495 17.111 3.05485 17.225C3.16476 17.3391 3.29822 17.4278 3.44593 17.4849C3.59364 17.5421 3.75204 17.5664 3.9101 17.5561C5.0986 17.5414 6.28524 17.6546 7.44953 17.8937C9.08489 18.0933 10.6472 18.6875 12.0018 19.6253V6.44768C10.6493 5.50223 9.08682 4.90042 7.44953 4.6943C6.26304 4.45796 5.05426 4.35205 3.84475 4.37847C3.55592 4.37847 3.27891 4.49321 3.07467 4.69745C2.87043 4.90168 2.75569 5.17869 2.75569 5.46753V16.3581Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.248 16.3581C21.2576 16.5122 21.2343 16.6665 21.1797 16.8109C21.125 16.9553 21.0403 17.0864 20.9312 17.1956C20.822 17.3048 20.6909 17.3895 20.5465 17.4441C20.4021 17.4987 20.2477 17.5221 20.0936 17.5125C18.9051 17.4978 17.7185 17.611 16.5542 17.8501C14.915 18.0627 13.3524 18.6721 12.002 19.6253V6.44768C13.3545 5.50223 14.9169 4.90042 16.5542 4.6943C17.7407 4.45796 18.9495 4.35205 20.159 4.37847C20.3077 4.3782 20.4548 4.40838 20.5914 4.46715C20.728 4.52592 20.8511 4.61204 20.9531 4.72019C21.0552 4.82834 21.134 4.95625 21.1847 5.09601C21.2354 5.23578 21.257 5.38445 21.248 5.53287V16.3581Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.62109 8.23364H6.87316" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.62109 14.2454H7.45493" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.7793 11.2395H9.1308" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/icons/File.astro", void 0);

const $$Astro$1 = createAstro();
const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`<!-- <svg {...Astro.props} viewBox="0 0 1052 1052"
  ><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path
    d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
    fill="#323330"></path></svg
> -->${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z"></path></svg>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/icons/Javascript.astro", void 0);

const $$Astro = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank"${addAttribute(href, "href")} role="link" class="inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/LinkButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Taps = createComponent(($$result, $$props, $$slots) => {
  const TAGS = {
    COMIDA: { name: "COMIDA", class: "bg-red text-white", icon: $$Javascript }
    //   BOOTSTRAP: {
    //     name: "Bootstrap",
    //     class: "bg-[#563d7c] text-white",
    //     icon: Bootstrap,
    //   },
    //   PHP: { name: "PHP", class: "bg-indigo-700 text-white", icon: Php },
    //   JAVASCRIPT: {
    //     name: "JavaScript",
    //     class: "bg-yellow-600 text-white",
    //     icon: Javascript,
    //   },
    //   HTML: { name: "HTML", class: "bg-red-600 text-white", icon: Html },
    //   MYSQL: { name: "MySQL", class: "bg-blue-700 text-white", icon: Sql },
  };
  const PROJECTS = [
    {
      title: "Toro Steakhouse",
      description: "Biblioteca online desarrollada en PHP con MySQL y Bootstrap.",
      maps: "https://maps.app.goo.gl/cH9xkjndNhADJq5Y8",
      link: "https://github.com/Brandon-DC-dev/biblioteca-virtua",
      image: "/projects/toro.png",
      tags: [TAGS.COMIDA]
    }
    //   {
    //     title: "360 Grados - Visualizador 3D con Tree.js",
    //     description: "Visualizador panorámico 3D basado en Three.js y Panolens.js.",
    //     link: "https://sparkling-sunshine-da227f.netlify.app",
    //     github: "https://github.com/Brandon-DC-dev/360-grados",
    //     image: "/projects/360recorrido.webp",
    //     tags: [TAGS.TORO],
    //   },
    // 👉 aquí puedes agregar más proyectos sin problema
  ];
  return renderTemplate(_a || (_a = __template(["<!-- \u{1F539} Tabs -->", '<div class="mb-6 border-b border-gray-200 dark:border-gray-700" data-astro-cid-kih27hi7> <ul id="tabs" class="flex flex-wrap text-sm font-medium text-center justify-center gap-x-4" data-astro-cid-kih27hi7> <li data-astro-cid-kih27hi7> <button data-tab="all" class="p-3 border-b-2 border-transparent hover:border-gray-300 dark:hover:text-gray-300 active-tab" data-astro-cid-kih27hi7>Todos</button> </li> <li data-astro-cid-kih27hi7> <button data-tab="COMIDA" class="p-3 border-b-2 border-transparent hover:border-gray-300 dark:hover:text-gray-300" data-astro-cid-kih27hi7>COMIDA</button> </li> <li data-astro-cid-kih27hi7> <button data-tab="JavaScript" class="p-3 border-b-2 border-transparent hover:border-gray-300 dark:hover:text-gray-300" data-astro-cid-kih27hi7>JavaScript</button> </li> <li data-astro-cid-kih27hi7> <button data-tab="HTML" class="p-3 border-b-2 border-transparent hover:border-gray-300 dark:hover:text-gray-300" data-astro-cid-kih27hi7>HTML</button> </li> <li data-astro-cid-kih27hi7> <button data-tab="Tree.js" class="p-3 border-b-2 border-transparent hover:border-gray-300 dark:hover:text-gray-300" data-astro-cid-kih27hi7>Tree.js</button> </li> <li data-astro-cid-kih27hi7> <button data-tab="MySQL" class="p-3 border-b-2 border-transparent hover:border-gray-300 dark:hover:text-gray-300" data-astro-cid-kih27hi7>MySQL</button> </li> </ul> </div> <!-- \u{1F539} Grid de proyectos --> <div id="projects-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-kih27hi7> ', ' </div> <!-- \u{1F539} Script de filtrado --> <!-- <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const tabs = document.querySelectorAll("#tabs button");\n    const projects = document.querySelectorAll(".project-card");\n\n    tabs.forEach((tab) => {\n      tab.addEventListener("click", () => {\n        tabs.forEach((t) =>\n          t.classList.remove("active-tab", "border-blue-500", "text-blue-600")\n        );\n        tab.classList.add("active-tab", "border-blue-500", "text-blue-600");\n\n        const selected = tab.dataset.tab;\n\n        projects.forEach((project) => {\n          const tags = project.dataset.tags.split(",");\n          if (selected === "all" || tags.includes(selected)) {\n            project.style.display = "flex";\n          } else {\n            project.style.display = "none";\n          }\n        });\n      });\n    });\n  });\n<\/script> --> <!-- \u{1F539} Script de filtrado -->  '])), maybeRenderHead(), PROJECTS.map(({ image, title, description, tags, link, maps }) => renderTemplate`<article class="project-card flex flex-col bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"${addAttribute(tags.map((t) => t.name).join(","), "data-tags")} data-astro-cid-kih27hi7> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="object-cover w-full h-48" loading="lazy" data-astro-cid-kih27hi7> <div class="flex flex-col flex-grow p-4" data-astro-cid-kih27hi7> <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2" data-astro-cid-kih27hi7> ${title} </h3> <ul class="flex flex-wrap mb-3 gap-2" data-astro-cid-kih27hi7> ${tags.map((tag) => renderTemplate`<li data-astro-cid-kih27hi7> <span${addAttribute(`flex items-center gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`, "class")} data-astro-cid-kih27hi7> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4", "data-astro-cid-kih27hi7": true })} ${tag.name} </span> </li>`)} </ul> <p class="text-gray-700 dark:text-gray-400 flex-grow" data-astro-cid-kih27hi7> ${description} </p> <footer class="flex items-center justify-start mt-4 gap-x-4" data-astro-cid-kih27hi7> ${maps && renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": maps, "data-astro-cid-kih27hi7": true }, { "default": ($$result2) => renderTemplate` <maps class="size-5" data-astro-cid-kih27hi7></maps> Code
` })}`} </footer> </div> </article>`));
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/components/Taps.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Asofarma - Sitio web oficial", "description": "Asifarma" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} </main> <div class="space-y-24"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "agendas" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "File", $$File, { "class": "size-8" })}
Agendas
` })} ${renderComponent($$result3, "Agendas", $$Agendas, {})} ` })} ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "taps" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "File", $$File, { "class": "size-8" })}
Taps
` })} ${renderComponent($$result3, "Taps", $$Taps, {})} ` })} <!-- <SectionContainer id="experiencia">
      <TitleSection>
        <Briefcase class="size-8" />
        Experiencia laboral
      </TitleSection>
      <Experience />
    </SectionContainer>

    
    <SectionContainer id="proyectos">
      <TitleSection>
        <CodeIcon class="size-7" />
        Proyectos
      </TitleSection>
      <Projects />
    </SectionContainer>


    <SectionContainer id="sobre-mi">
      <TitleSection>
        <ProfileCheck class="size-8" />
        Sobre mí
      </TitleSection>
      <AboutMe />
    </SectionContainer>


    <SectionContainer id="habilidades">
      <TitleSection>
        <Tools class="size-8" />
        Habilidades
      </TitleSection>
      <Habilidades />
    </SectionContainer> --> </div> ` })}`;
}, "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/pages/index.astro", void 0);

const $$file = "C:/xampp/htdocs/desarrollos/adium/adium-2.0/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i };
