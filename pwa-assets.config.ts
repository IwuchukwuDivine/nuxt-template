import {
  defineConfig,
  minimal2023Preset,
} from "@vite-pwa/assets-generator/config";

// Match your brand background (same as pwa.manifest.background_color)
const BACKGROUND_COLOR = "#ffffff";

export default defineConfig({
  preset: {
    ...minimal2023Preset,
    maskable: {
      sizes: [192, 512],
      padding: 0.3,
      resizeOptions: { fit: "contain", background: BACKGROUND_COLOR },
    },
    apple: {
      sizes: [180],
      padding: 0.3,
      resizeOptions: { fit: "contain", background: BACKGROUND_COLOR },
    },
  },
  // Point at your source logo (svg preferred), then run:
  //   npm run generate-pwa-assets
  images: ["public/logo.svg"],
});
