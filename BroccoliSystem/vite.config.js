import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(), // This will enable Vue DevTools for development
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)), // Alias for '@' to point to src
        },
    },
    build: {
        outDir: "dist", // Set output directory for production build
        rollupOptions: {
            // Customize Rollup build options if needed
        },
    },
    server: {
        // Optional: configure the server for development mode
        port: 3000, // Set the dev server port (you can change this as needed)
        open: true, // Auto-open the browser
    },
});
