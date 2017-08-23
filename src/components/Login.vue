<template>
  <div class="login center">
    <div class="container">
      <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">

        <form class="col s12" method="post">
          <div class='row'>
            <div class='col s12'>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <input class='validate' type='email' name='email' id='email' v-model="email" required />
              <label for='email'>Enter your email</label>
            </div>
          </div>

          <div class='row'>
            <div class='input-field col s12'>
              <input class='validate' type='password' name='password' id='password' v-model="password" required />
              <label for='password'>Enter your password</label>
            </div>
            <label style='float: right;'>
              <router-link class='pink-text' :to="{ name: 'Register' }"><b>Not Registered?</b></router-link>
            </label>
          </div>

          <br />
          <center>
            <div class='row'>
              <button type='submit' class='col s12 btn btn-large waves-effect indigo' @click.prevent="login()">Login</button>
            </div>
          </center>
        </form>
      </div>
    </div>
    <router-link :to="{ name: 'Register' }">Create Account</router-link>
    <p>- or -</p>
    <p>
      <button class='col s12 btn btn-large waves-effect indigo social' @click="loginWithFB()">Login with Facebook <i class="fa fa-facebook"></i></button>
    </p>
    <p>
      <button class='col s12 btn btn-large waves-effect indigo social' @click="loginWithGoogle()">Login with Google <i class="fa fa-google"></i></button>
    </p>
  </div>
</template>

<script>
import firebase from '../firebase-config'
import toastr from 'toastr'

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(result => {
          this.$router.push({ name: 'Home' })
          toastr.success("Login successfully!")
        })
        .catch(error => {
          toastr.error(error.message)
        })
    },
    loginWithFB() {
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          this.$router.push({ name: 'Home' })
          toastr.success("Login successfully!")
        })
        .catch(error => {
          toastr.error(error.message)
        })
    },
    loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(result => {
          this.$router.push({ name: 'Home' })
          toastr.success("Login successfully!")
        })
        .catch(error => {
          toastr.error(error.message)
        })
    }
  }
}
</script>

<style scoped>
.login {
  margin: 70px 0;
}
.social {
  width: 26%;
}
</style>
