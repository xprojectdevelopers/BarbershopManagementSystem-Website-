import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import sitemap from "vite-plugin-sitemap"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      jpg: {
        quality: 80, 
      },
      png: {
        quality: 80, 
      },
    }),
    sitemap({
      hostname: "https://molavestreetbarbers.vercel.app/", // ← replace with your real domain or localhost
      routes: [
        "/", 
        "/services",
        "/faq",
        "/terms",
        "/privacy-policy"
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsInclude: [
      '**/*.ttf',
      '**/*.woff',
      '**/*.woff2',
      '**/*.png',
      '**/*.jpg',
      '**/*.jpeg',
    ],
  },
})
