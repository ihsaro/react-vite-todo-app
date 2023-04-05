import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "~/components": path.resolve(__dirname, "./src/components"),
            "~/contexts": path.resolve(__dirname, "./src/contexts"),
            "~/pages": path.resolve(__dirname, "./src/pages"),
        },
    },
});
