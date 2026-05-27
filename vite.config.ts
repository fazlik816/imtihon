import { defineConfig, loadEnv } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      tailwindcss(),
    ],
    server: {
      port: env.VITE_PORT ? parseInt(env.VITE_PORT) : 3000,
      proxy: {
        "/api": {
          target: env.VITE_BACKEND_URL || "http://localhost:3000/api",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    preview: {
      port: env.VITE_PORT ? parseInt(env.VITE_PORT) : 3000,
    },
  };
});
