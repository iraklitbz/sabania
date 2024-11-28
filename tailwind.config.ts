import type { Config } from 'tailwindcss'
import FormKitVariants from '@formkit/themes/tailwindcss'
export default {
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        container: {
            padding: '1.25rem',
            screens: {
                sm: '100%',
                md: '728px',
                lg: '1024px',
                xl: '1280px'
            }
        },
        extend: {
            fontSize: {
                xxs: [ '0.625rem', { lineHeight: '0.75rem' } ]
            }
        }
    },
    plugins: [ FormKitVariants ],
    content: [
        './components/**/*.{vue,js,ts}',
        './containers/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './store/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        'formkit.theme.mjs',
        // Split in two files to avoid watching issues (https://github.com/nuxt-community/tailwindcss-module/issues/359)
        './nuxt.config.js',
        './nuxt.config.ts'
    ]
} satisfies Config
