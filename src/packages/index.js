// 所有组件的入口
import Button from "./button/button";
import Icon from "./icon";
import Row from "./layout/row";
import Col from "./layout/col";

const install = (Vue) => {
  Vue.component(Button.name, Button);
  Vue.component(Icon.name, Icon);
  Vue.component(Row.name, Row);
  Vue.component(Col.name, Col);
};

if (typeof window.Vue !== "undefined") {
  install(vue);
}

export default {
  install,
};
