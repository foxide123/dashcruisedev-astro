import plugin from 'tailwindcss/plugin';

export default {
    plugins: [
        plugin(({ addComponents }) => {
            addComponents({
                ".mobile-h2": {
                    "@apply text-2rem" : ""
                },
            });
        })
    ],
};