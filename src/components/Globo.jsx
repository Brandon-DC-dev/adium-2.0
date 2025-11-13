// import { useEffect, useRef, useState } from "react"
// import createGlobe from "cobe"

// export default function Globo() {
//   const canvasRef = useRef(null)
//   const [isDark, setIsDark] = useState(false)

//   useEffect(() => {
//     setIsDark(document.documentElement.classList.contains("dark"))

//     const observer = new MutationObserver(() => {
//       setIsDark(document.documentElement.classList.contains("dark"))
//     })
//     observer.observe(document.documentElement, { attributes: true })

//     let phi = 0
//     const canvas = canvasRef.current

//     const globe = createGlobe(canvas, {
//       devicePixelRatio: 2,
//       width: canvas.offsetWidth * 2,
//       height: canvas.offsetHeight * 2,
//       phi: 0,
//       theta: 0.3,
//       dark: isDark ? 1 : 0,
//       diffuse: 1.2,
//       scale: 1.15,
//       mapSamples: 20000,
//       mapBrightness: isDark ? 7 : 6,

//       // 🎨 Colores inspirados en la imagen de Planeta Adium
//       baseColor: isDark ? [1, 1, 1] : [0.1, 0.1, 0.1], // blanco en oscuro, gris tenue en claro
//       markerColor: isDark ? [1, 0.3, 0.3] : [0.8, 0, 0], // marcadores rojos con neón
//       glowColor: isDark ? [1, 0.1, 0.1] : [1, 0.1, 0.1], // brillo rojo intenso tipo holograma

//       offset: [0, 0],
//       markers: [
//         { location: [37.7595, -122.4367], size: 0.03 },
//         { location: [40.7128, -74.006], size: 0.1 },
//       ],
//       onRender: (state) => {
//         state.phi = phi
//         phi += 0.003
//       },
//     })

//     const resize = () => {
//       globe.width = canvas.offsetWidth * 2
//       globe.height = canvas.offsetHeight * 2
//     }
//     window.addEventListener("resize", resize)

//     return () => {
//       globe.destroy()
//       window.removeEventListener("resize", resize)
//       observer.disconnect()
//     }
//   }, [isDark])

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full h-full z-[-1] transition-colors duration-1000 ${
//         isDark
//           ? // 🌑 MODO OSCURO → Futurista con reflejos rojos
//             "bg-gradient-to-b from-black via-[#1a0000] to-[#330000]"
//           : // ☀️ MODO CLARO → Metálico con luz cálida y rojo suave
//             "bg-gradient-to-b from-[#ffffff] via-[#e1e1e1] to-[#a30000]"
//       }`}
//     >
//       <canvas
//         ref={canvasRef}
//         width="1200"
//         height="1200"
//         className="w-full h-full opacity-95 mix-blend-screen transition-all"
//       />
//       {/* 🌌 Brillo ambiental tipo neón */}
//       <div
//         className={`absolute inset-0 pointer-events-none blur-3xl ${
//           isDark
//             ? "bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15)_0%,transparent_70%)]"
//             : "bg-[radial-gradient(circle_at_center,rgba(255,60,60,0.2)_0%,transparent_80%)]"
//         }`}
//       ></div>
//     </div>
//   )
// }



import { useEffect, useRef } from "react"
import createGlobe from "cobe"

export default function Globo() {
  const canvasRef = useRef(null)

  useEffect(() => {
    let phi = 0
    const canvas = canvasRef.current

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: canvas.offsetWidth * 2,
      height: canvas.offsetHeight * 2,
      phi: 0,
      theta: 0.3,
      dark: 0, // modo claro para fondo luminoso
      diffuse: 1.1,
      scale: 1.1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.9, 0.95, 1.0], // blanco-azulado brillante 🌐
      markerColor: [1, 0.1, 0.3], // rojo neón intenso 🔴
      glowColor: [0.4, 0.8, 1], // azul eléctrico 🌌
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003
      },
    })

    const resize = () => {
      globe.width = canvas.offsetWidth * 2
      globe.height = canvas.offsetHeight * 2
    }
    window.addEventListener("resize", resize)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width="1200"
      height="1200"
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  )
}
