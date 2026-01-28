/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                }
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                slideDown: {
                    from: {
                        opacity: '0',
                        transform: 'translateY(-50px) scale(0.9)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)',
                    },
                },
                'pulse-custom': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.3s ease-out',
                slideDown: 'slideDown 0.5s ease-out',
                'pulse-custom': 'pulse-custom 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
