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

      for (let boundry of this.positions) {
        if (this.scrollPos >= boundry[1]) {
          return boundry[0];
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
      this.positions = arr
        .filter((el) => el.tagName === "SECTION" && el.id !== "")
        .map((el) => [el.id, el.offsetTop]).reverse()
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
