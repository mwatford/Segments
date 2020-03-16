import Home from "../views/Home.vue";
import Product from "../components/popup.vue";

export default [
  { name: "home", path: "/", component: Home },
  { name: "product", path: "/product/:name", component: Product }
];
