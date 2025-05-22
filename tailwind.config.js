/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/lib/firebase/**/*.ts',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    preflight: false, // 与 Firebase UI 兼容
  },
  theme: {
    extend: {
      // 可以在这里添加自定义主题配置
    },
  },
  plugins: [],
};
