import Vue from "vue"
import VueMeta from "vue-meta"
import App from "./App.vue"
import router from "./router"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHome, faGamepad } from "@fortawesome/free-solid-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

Vue.use(VueMeta)

library.add(faHome, faGamepad, faDiscord)

Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
