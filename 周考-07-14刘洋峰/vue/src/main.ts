
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { 
    Search,
    Sidebar,
    SidebarItem,
    Grid,
    GridItem

 } from 'vant';
 //  import { Sidebar, SidebarItem } from 'vant';
// 2. 引入组件样式
 import 'vant/lib/index.css';


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Search)
app.use(Sidebar)
app.use(SidebarItem)
app.use(Grid)
app.use(GridItem)





 
app.mount('#app')
