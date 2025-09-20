/***** Tailwind v3 config *****/
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
    theme: {
        extend: {
            colors: {
                // Clean, minimal palette inspired by professional resume
                primary: "#FF6B6B", // subtle coral/pink accent
                secondary: "#2C2C2C", // dark gray for text
                background: "#FFFFFF", // pure white
                surface: "#FAFAFA", // very light gray
                text: "#2C2C2C", // dark gray for readability
                textSecondary: "#6B7280", // medium gray
                accent: "#FF6B6B", // coral accent
                neutral: "#F5F5F5", // light neutral
                cream: "#FFFEF7", // warm white/cream
                charcoal: "#1A1A1A", // deep black
                border: "#E5E7EB", // light border
            },
            boxShadow: {
                sm: "0 2px 8px rgba(0,0,0,0.06)",
                md: "0 4px 20px rgba(0,0,0,0.08)",
                lg: "0 8px 32px rgba(0,0,0,0.12)",
            },
            borderRadius: {
                xl: "24px",
            },
            fontFamily: {
                sans: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
                display: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
            },
            fontWeight: {
                black: "900",
            },
            backgroundImage: {
                "subtle-gradient":
                    "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
                "accent-subtle":
                    "linear-gradient(90deg, #FF6B6B 0%, #FF8A8A 100%)",
                "cream-gradient":
                    "linear-gradient(180deg, #FFFEF7 0%, #F9F9F9 100%)",
            },
        },
    },
    plugins: [],
};
