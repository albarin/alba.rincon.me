import type { Config } from 'tailwindcss'
import daisyui from "daisyui";

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                light: {
                    primary: "#9FD8D4", // mint
                    "primary-content": "#2c2c2c", // dark text for light background
                    secondary: "#8B7BA8", // purple
                    "secondary-content": "#ffffff", // white text for dark background

                    // Base colors
                    "base-100": "#ffffff", // main background
                    "base-200": "#f2f2f2", // slightly darker background
                    "base-300": "#e5e5e5", // even darker background
                    "base-content": "#2c2c2c", // main text color

                    // State colors (keeping them on-theme)
                    info: "#9FD8D4",
                    success: "#86C8C3", // darker mint for success
                    warning: "#8B7BA8", // using purple for warning
                    error: "#A08DB9", // lighter purple for error

                    // Neutral shades
                    neutral: "#2c2c2c",
                    "neutral-content": "#ffffff",
                },
                dark: {
                    primary: "#8B7BA8", // purple
                    "primary-content": "#ffffff", // white text for dark background
                    secondary: "#9FD8D4", // mint
                    "secondary-content": "#2c2c2c", // dark text for light background

                    // Base colors
                    "base-100": "#1f1f1f", // main background
                    "base-200": "#2c2c2c", // slightly lighter background
                    "base-300": "#393939", // even lighter background
                    "base-content": "#ffffff", // main text color

                    // State colors (keeping them on-theme)
                    info: "#9FD8D4",
                    success: "#86C8C3", // darker mint for success
                    warning: "#8B7BA8", // using purple for warning
                    error: "#A08DB9", // lighter purple for error

                    // Neutral shades
                    neutral: "#ffffff",
                    "neutral-content": "#2c2c2c",
                },
            },
        ],
    },
} satisfies Config
