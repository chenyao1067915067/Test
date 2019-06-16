import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './config/fetch'
import { Button } from 'vant'
import { NavBar } from 'vant'
import { Toast } from 'vant'
import { Tabbar, TabbarItem } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { List } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Loading } from 'vant';
import { Skeleton } from 'vant';
import { Search } from 'vant';
import { Tag } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Tab, Tabs } from 'vant';
import  'lib-flexible';
import { Icon } from 'vant';
import { PullRefresh } from 'vant';

Vue.use(PullRefresh);
Vue.use(Icon);
Vue.use(Tab).use(Tabs);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Tag);
Vue.use(Search);
Vue.use(Skeleton);
Vue.use(Loading);
Vue.use(Cell).use(CellGroup)
Vue.use(List);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Toast)
Vue.prototype.$fetch = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
