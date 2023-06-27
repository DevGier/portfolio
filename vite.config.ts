import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import sassGlobImports from 'vite-plugin-sass-glob-import';

export default defineConfig({
	plugins: [sveltekit(), sassGlobImports()],
	server: {
		port: process.env.PORT || 3000
	},
});
