import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        articulat: ['"Articulat-CF"', 'sans-serif'],
        powerGrotesk: ['"PowerGrotesk-Regular"', 'sans-serif'],
      },
      fontSize: {
        xxs: "10px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maker: "#E9FE97",
        "featured-maker": "#C7D0FF",
        transparent: "transparent",
        "footer-background": "#111111",
        bannerTextColor: "#111",
        jonquil: "#E9FE97",
        "featured-color": "#111111"
      },
      maxWidth: {
        600: "600px",
        860: "860px",
        1600: "1600px",
        "1138": "1138px",
      },
      padding: {
        7.5: "30px",
        90: "90px",
      },
      gap: {
        7.5: "30px",
      },
      height: {
        760: "760px",
      },
      width: {
        50: "200px",
      },
      spacing: {
        102: "102px",
      },
    },
  },
  plugins: [],
};
export default config;
