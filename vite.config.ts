import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'; 
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(), 
    cesium(),
  ],
  build: {
    "rollupOptions": {
			"output": {
				"manualChunks": (id: string) => {
					if (id.includes("node_modules")) {
						return "vendor"
					}
				}
			}
		},
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    // port: 3000,
    host: '0.0.0.0',
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/variable.scss";',
      },
    },
  },
}))
