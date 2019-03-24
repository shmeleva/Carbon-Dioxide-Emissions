import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle, faUserAstronaut, faSmog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pictorialBar";
import "echarts/lib/chart/pie";
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';

library.add(faTimesCircle);
library.add(faUserAstronaut);
library.add(faSmog);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("v-chart", ECharts);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
