import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression2";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/issakass/",
	plugins: [
		react(),
		compression(),
		VitePWA({
			manifest: {
				name: "IssaKass portfolio website",
				short_name: "IssaKass",
				description:
					"Abdallah-Issa Kass's full stack developer portfolio website",
				icons: [
					{
						src: "/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
				],
			},
		}),
	],
});
