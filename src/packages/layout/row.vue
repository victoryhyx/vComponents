<template>
  <div class="hu-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "hu-row",
  data() {
    return {};
  },
  props: {
    gutter: {
      type: Number,
      defalut: 0,
    },
  },
  mounted() {
    this.$children.forEach((child) => {
      child.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      let style = {};
      if (this.gutter) {
        style = {
          ...style,
          marginLeft: -this.gutter / 2 + "px",
          marginRight: -this.gutter / 2 + "px",
        };
      }
      return style;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
.hu-row {
  display: flex;
  width: 100%;
}
</style>
