const production = process.env.NODE_ENV !== "development";

module.exports = {
    purge: {
        content: ["./src/**/*.svelte", "./public/**/*.html"],
        css: ["./public/**/*.css"],
        enabled: production, // disable purge in dev
        options: {
            // Support class binding syntax
            defaultExtractor: (content) => [...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []), ...(content.match(/(?<=class:)[^=>\/\s]*/g) || [])],
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
