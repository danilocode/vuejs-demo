import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DataTables from '@/components/datatables/datatables'
import JsonEditor from '@/components/jsoneditor/jsoneditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/datatables',
      name: 'DataTables',
      component: DataTables
    },
    {
      path: '/jsoneditor',
      name: 'JsonEditor',
      component: JsonEditor
    }
  ]
})
