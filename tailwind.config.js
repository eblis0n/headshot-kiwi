/*
 * @version: 1.0.0
 * @Author: Eblis
 * @Date: 2025-05-21 18:29:16
 * @LastEditTime: 2025-05-21 18:30:42
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
