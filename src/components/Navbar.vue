<template>
  <nav>
    <div class="container">
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">ShareQuote</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'Quotes'}">Quotes</router-link></li>
          <li><router-link :to="{ name: 'MyQuotes' }" v-if="user">My Quotes</router-link></li>
          <li><router-link :to="{ name: 'About' }">About</router-link></li>
          <li v-if="!user"><router-link :to="{ name: 'Login' }" >Login</router-link></li>
          <span v-else>
            <li v-if="user.displayName"><a>{{ user.displayName }}</a></li>
            <li v-else><a>{{ user.email }}</a></li>
            <li><a v-on:click="logout">Logout</a></li>
          </span>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'Quotes'}">Quotes</router-link></li>
          <li><router-link :to="{ name: 'MyQuotes' }">My Quotes</router-link></li>
          <li><router-link :to="{ name: 'About' }">About</router-link></li>
          <li v-if="!user"><router-link :to="{ name: 'Login' }" >Login</router-link></li>
          <span v-else>
            <li><a>{{ user.displayName }}</a></li>
            <li><a v-on:click="logout">Logout</a></li>
          </span>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from '../firebase-config'
import Router from 'vue-router'

export default {
  name: 'navbar',
  data() {
    return {
      user: null
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      }
    })
  },
  methods: {
    logout() {
      firebase.auth().signOut()
        .then(() => {
          this.user = null
          this.$router.push({ name: 'Login' })
        })
        .catch(error => {
          console.log(error.reason)
        })
    }
  }
}
</script>

<style scoped>
.nav-wrapper {
  border: 0
}
</style>
