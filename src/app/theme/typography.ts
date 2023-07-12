import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const typography = {
  fontSize: 12,
  fontFamily: poppins.style.fontFamily,
  h1: {
    fontSize: 76,
    fontWeight: 700,
  },
  h2: {
    fontSize: 48,
    fontWeight: 500,
  },
  h3: {
    fontSize: 30,
    fontWeight: 500,
  },
  h4: {
    fontSize: 18,
    fontWeight: 500,
  },
};

export default typography;
