import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A29875',
      },
      fontFamily: {
        Rye: ['Rye', 'serif'],
        LibreBodoni:['Libre Bodoni','serif']
       
      },
    },
  },
  plugins: [],
};
export default config;