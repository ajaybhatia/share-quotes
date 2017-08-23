import Vue from 'vue'
import Router from 'vue-router'
import firebase from '../firebase-config';
import Home from '@/components/Home'
import Quotes from '@/components/Quotes'
import About from '@/components/About'
import MyQuotes from '@/components/MyQuotes'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/quotes',
      name: 'Quotes',
      component: Quotes
    },
    {
      path: '/my-quotes',
      name: 'MyQuotes',
      component: MyQuotes,
      beforeEnter(to, from, next) {
        firebase.auth().onAuthStateChanged(user => {
          if (!user) {
            next({ name: 'Home' })
          } else {
            next()
          }
        })
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  // mode: 'history'
})
