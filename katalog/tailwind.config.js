 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html"],
   theme: {
                extend: {
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'bounce-slow': 'bounce 3s infinite',
                        'fade-in': 'fadeIn 2s ease-in',
                        'slide-up': 'slideUp 1s ease-out',
                        'scale-in': 'scaleIn 0.8s ease-out'
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-20px)' }
                        },
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' }
                        },
                        slideUp: {
                            '0%': { transform: 'translateY(100px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' }
                        },
                        scaleIn: {
                            '0%': { transform: 'scale(0.5)', opacity: '0' },
                            '100%': { transform: 'scale(1)', opacity: '1' }
                        }
                    },
                    colors: {
                        primary: '#6366f1',
                        secondary: '#8b5cf6',
                        accent: '#f59e0b'
                    }
                }
            },
   plugins: [],
 }