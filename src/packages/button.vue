<template>
  <div>
    <!-- slot -->
    <button class="hu-button" :class="btnClass">
      <span v-if="this.$slots.default">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "hu-button",
  props: {
    type: {
      type: String,
      default: "",
      validator(type) {
        console.log(type);
        if (
          type &&
          !["primary", "warning", "danger", "success", "info"].includes(type)
        ) {
          console.error(
            "类型为" +
              ["primary", "warning", "danger", "success", "info"].join(",")
          );
        }
        return true;
      },
    },
  },
  computed: {
    btnClass() {
      let classes = [];
      if (this.type) {
        classes.push(`hu-button-${this.type}`);
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_var.scss";

/* @each */
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$actived-color: #3a8ee6;
.hu-button {
  border: 1px solid $border-color;
  border-radius: $border-radius;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color;
    background: $background;
  }
  &:focus,
  &:hover {
    color: $actived-color;
    border-color: $border-color;
    outline: none;
  }
  @each $type,
    $color
      in (
        primary: $primary,
        success: $success,
        info: $info,
        warning: $warning,
        danger: $danger
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
}
</style>
