/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                gold: '#D4AF37',
                amourette: '#67A89A', // The extracted brand green
                dark: '#0a0a0a',
                stone: '#1c1917',
                paper: '#FDFCF8', // Warm cream/off-white
            }
        },
    },
    plugins: [],
}
