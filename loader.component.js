export default {
  name: 'loader',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {

    }
  },
  computed: {
    styles () {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`
      }
    }
  },
  mounted () {

  },
  methods: {

  }
}
