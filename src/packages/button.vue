<template>
  <div>
    <!-- slot -->
    <button class="hu-button"
            :class="btnClass">
      <hu-icon :icon="icon"
               class="icon"
               v-if="icon"></hu-icon>
      <span v-if="this.$slots.default">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
import huIcon from './icon'
export default {
  name: "hu-button",
  props: {
    type: {
      type: String,
      default: "",
      validator (type) {
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
      }
    },
    icon: {
      type: String
    }
  },
  component: {
    huIcon
  },
  computed: {
    btnClass () {
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
  @each $type, $color in ( primary: $primary,  success: $success,info: $info,warning: $warning,danger: $danger )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
















      
  {
    &-#{$type}:hover {
      background: $color;
      border: 1px solid $color;
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &-#{$type}:active {
      background: $color;
      border: 1px solid $color;
      color: #fff;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
  }
}
</style>
