// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Gerador de números para Mega Sena',
            htmlAttrs: {
                lang: 'pt-br'
            },
            meta: [
                
                { name: 'theme-color', content: '#111827' }
            ],
        }
    },
})
