let development = process.env.NODE_ENV !== 'production'

export default {
    router: {
        base: development ? '' : 'docs/'
    },
    components: true,
    target: 'static',
    ssr: false
}