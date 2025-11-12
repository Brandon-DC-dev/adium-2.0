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
      dark: 0, // 0 = modo claro, 1 = oscuro
      diffuse: 1.2,
      scale: 1.1,
      mapSamples: 16000,
      mapBrightness: 6,
       baseColor: [1, 1, 1], // 🌍 color del contorno del mundo (rojo)
    markerColor: [1, 0.5, 0.5], // color de los marcadores (rojo suave)
    glowColor: [1, 0, 0], // brillo también rojo
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003 // velocidad lenta (parece casi estático)
      },
    })

    // 🔹 Ajuste al redimensionar ventana
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
