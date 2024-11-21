import * as colors from "tailwindcss/colors";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.neutral[950],
        secondary: colors.neutral[800],
        action: colors.blue[500],
        light: colors.neutral[50],
        border: colors.neutral[800],
      },
    },
  },
  plugins: [],
};
export default config;
