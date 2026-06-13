export default {
  methods: {
    imagePath(type, filename) {
      const base = window.config?.image_base
        || this.$store?.getters?.currentUser?.image_base
        || '/images';
      return type ? `${base}/${type}/${filename}` : `${base}/${filename}`;
    },
    flagPath(filename) {
      const base = window.config?.flag_base
        || this.$store?.getters?.currentUser?.flag_base
        || '/flags';
      return `${base}/${filename}`;
    }
  }
};
