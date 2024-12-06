/** @type {import('tailwindcss').Config} */
module.exports = {
        prefix: 'tw-',
        important: true,
        content: [
                "./**/*.{html,js,css}",
                "./css/**/*.css",
                "./scripts/**/*.js"
        ],
        darkMode: 'class',
        theme: {
                extend: {
                        fontFamily: {
                                poly: ['"poly"', "serif"],
                                ubuntu: ['"Ubuntu"', "sans-serif"],
                        },
                        colors: {
                                primary: 'var(--primary-text-color)',
                                background: 'var(--bg-color)',
                                'btn-color': 'var(--btn-color)',
                                'btn-bg': 'var(--btn-bg)',
                        },
                },
        },
        plugins: [
                function({ addVariant }) {
                        addVariant('firefox', ':-moz-any(&)')
                }
        ],
}