/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html"],
    theme: {
        extend: {
            colors: {
                "s-green": "#008060",
                "s-green-dark": "#004c3f",
            },
            screens: {
                lg: "1080px",
                md: "750px",
                1440: "1440px",
            },
        },
    },
    plugins: [],
};
