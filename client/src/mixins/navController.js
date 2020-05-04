const asd = (name, displayAfter) => ({
  data() {
    return {
      scrollPos: "",
      parentHeight: "",
      positions: undefined,
    };
  },
  computed: {
    active() {
      if (!this.positions) return;

      for (let el in this.positions) {
        if (
          this.scrollPos >= this.positions[el][0] &&
          this.scrollPos <= this.positions[el][1]
        ) {
          return el;
        }
      }
    },
  },
  methods: {
    setScrollPos() {
      this.scrollPos = Math.ceil(window.scrollY);
    },
    setParentHeight() {
      this.parentHeight = document.getElementById(displayAfter).clientHeight;
    },
    getDOMElementsPositions() {
      let arr = Array.from(document.getElementsByName(name)[0].children);
      arr = arr.filter((el) => el.id !== "");

      const reduced = arr.reduce((acc, current) => {
        acc[current.id] = [
          current.offsetTop,
          current.clientHeight + current.offsetTop - 1,
        ];
        return acc;
      }, {});
      this.positions = reduced || [];
    },
  },
  mounted() {
    this.setParentHeight();
    this.getDOMElementsPositions();
    document.addEventListener("scroll", this.setScrollPos);
  },
  beforeUpdate() {
    this.setParentHeight();
    this.getDOMElementsPositions();
  },
});

export default asd;
