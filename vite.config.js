import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/raushan-portfolio/",  // <--- MATCH YOUR GITHUB PAGES REPO NAME
});
