import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/FoxSite/",   // 🔥 IMPORTANT : Nom EXACT du dépôt GitHub
});
