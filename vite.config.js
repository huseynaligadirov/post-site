import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  output: {
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  }
  // server: {
  //   host: "192.168.42.249"
  // }
})
