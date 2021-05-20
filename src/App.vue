<template>
  <div id="app">
    <hu-button>默认按钮</hu-button>
    <hu-button type="primary">默认按钮</hu-button>
    <hu-button type="warning">默认按钮</hu-button>
    <hu-button type="danger">默认按钮</hu-button>
    <hu-button type="success">默认按钮</hu-button>
    <hu-button type="info">默认按钮</hu-button>
    <hu-button type="info" icon="sousuo" icon-position="right"
      >带icon按钮</hu-button
    >
    <hu-button type="success" icon="sousuo" icon-position="left">
      带icon按钮
    </hu-button>
    <hu-row :gutter="20">
      <hu-col :span="8">
        <div class="green">12</div>
      </hu-col>
      <hu-col :span="8">
        <div class="blue">12</div>
      </hu-col>
      <hu-col :span="8">
        <div class="red">12</div>
      </hu-col>
    </hu-row>
    <hu-row>
      <hu-col :span="6">aaa</hu-col>
      <hu-col :span="6" :offset="12">bbb</hu-col>
    </hu-row>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "@/styles/_var.scss";
</style>
