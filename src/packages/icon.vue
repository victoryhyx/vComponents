<template>
  <svg class="hu-icon"
       aria-hidden="true" >
    <use :xlink:href="`#icon-${icon}`" ></use>
  </svg>
</template>

<script>
import '../styles/icon.js'
export default {
  name: "hu-icon",
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.hu-icon {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
</style>
