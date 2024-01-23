import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import * as x from 'dotenv';

x.config()

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['addons/']
		}	
	},
	build: {
		target: 'esnext',
	}
});
