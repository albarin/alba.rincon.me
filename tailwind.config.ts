import type { Config } from 'tailwindcss'
import daisyui from "daisyui";

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {},
    },
    plugins: [daisyui],
    darkMode: ['class', '[data-theme="dark"]'],
    daisyui: {
        themes: [
            {
                light: {
                    "primary": "#3B82F6",        // Bright blue
                    "primary-content": "#ffffff",
                    "secondary": "#6D55A3",      // Deep purple
                    "secondary-content": "#ffffff",
                    "accent": "#00A6A6",         // Teal
                    "accent-content": "#ffffff",
                    "neutral": "#7FB3B0",      // Blue-tinted neutral
                    "neutral-content": "#ffffff",
                    "base-100": "#C5EAE6",       // Light mint (provided)
                    "base-200": "#B2D8D4",       // Slightly darker mint
                    "base-300": "#9FC6C2",       // Even darker mint
                    "base-content": "#1E293B",   // Deep blue-grey
                    "info": "#2563EB",
                    "info-content": "#ffffff",
                    "success": "#059669",
                    "success-content": "#ffffff",
                    "warning": "#EAB308",
                    "warning-content": "#ffffff",
                    "error": "#DC2626",
                    "error-content": "#ffffff",
                },
            },
            {
                dark: {
                    "primary": "#7B8CFF",        // Bright indigo
                    "primary-content": "#ffffff",
                    "secondary": "#FF84B7",      // Rose pink
                    "secondary-content": "#ffffff",
                    "accent": "#45CAFF",         // Electric blue
                    "accent-content": "#ffffff",
                    "neutral": "#5B4F76",        // Muted purple-blue
                    "neutral-content": "#ffffff",
                    "base-100": "#382757",       // Deep purple-blue
                    "base-200": "#2D1F46",       // Darker purple-blue
                    "base-300": "#221735",       // Even darker purple-blue
                    "base-content": "#E6EAF0",   // Light grey-blue
                    "info": "#67A9FF",
                    "info-content": "#ffffff",
                    "success": "#3DD598",
                    "success-content": "#ffffff",
                    "warning": "#FFB547",
                    "warning-content": "#ffffff",
                    "error": "#FF6B8B",
                    "error-content": "#ffffff",
                }
            }
        ],
    },
} satisfies Config
