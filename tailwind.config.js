/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";
 

export default withUt ({
  content: [
    "./Apppages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "red-600",
        darkblue: "#080b12",
        // blue: "blue-500"
      }
    },
  },
  plugins: [],
});
