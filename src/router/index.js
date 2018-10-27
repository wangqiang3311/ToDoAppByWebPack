import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import TodoList from '../components/TodoList'
import UpdateTodo from '../components/UpdateTodo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld 
    },
    {
      path:'/UpdateTodo',
      name:'UpdateTodo',
      component:UpdateTodo
    },
    {
      path:'/TodoList',
      name:'TodoList',
      component:TodoList
    }
  ]
})
