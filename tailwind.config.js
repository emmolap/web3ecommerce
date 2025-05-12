// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        primary: '#C2933E',
        primaryHover: '#a87c32',
        background: '#FDF7F0',
        textLight: '#ffffff',

        // Neutrals
        neutral: {
          50: '#ffffff',
          100: '#f9f9f9',
          200: '#e5e7eb',
          300: '#d1d5db',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },

        // Status colors (optional, for alerts/messages)
        success: '#22C55E',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
      },
    },
  },
  plugins: [],
}

{
  /* < button className = "bg-primary text-textLight px-4 py-2 rounded hover:bg-primaryHover" >
    Login <
    /button> */
}