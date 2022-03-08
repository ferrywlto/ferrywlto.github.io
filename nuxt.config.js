let development = process.env.NODE_ENV !== 'production'

export default {
    router: {
        base: '/ferrywlto.github.io/',
        // base: development ? '.' : 'docs/'
    },
    components: true,
    target: 'static',
    ssr: false
}