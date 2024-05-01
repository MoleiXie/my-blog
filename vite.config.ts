import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// node导入
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:{
      '@': path.resolve(__dirname, './src')
    }
  },
  
  base: '/my-blog',   // 配置资源公共基础路径
  build: {
    outDir: 'docs',            // 打包导出目录
    assetsInlineLimit: 4096, // 图片转 base64 编码的阈值
  }
})
