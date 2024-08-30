import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'

export default {
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, './components/home/home.html'),
        vehicleSearch: resolve(__dirname, './components/vehicleSearch/vehicleSearch.html'),
        dashboard: resolve(__dirname, './components/dashboard/dashboard.html'),
        login: resolve(__dirname, './components/auth/login.html' ),
        register: resolve(__dirname, './components/auth/register.html' )
      }
    }
  }, 
  server: {
    open: './components/home/home.html'
  }
}