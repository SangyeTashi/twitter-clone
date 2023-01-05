/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                twitterwhite: '#d6d9db',
                twitterpurple: '#3c2b7f',
                twitterPurpleLight: '#7856ff',
                twitterblack: '#000000',
                twittergrey: '#202327',
                twitterblue: '#1c99ee',
            },
            flexGrow: {
                2: 2,
            },
        },
    },
    plugins: [],
};
