<template>
  <div class="register center">
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
              <router-link class='pink-text' :to="{ name: 'Login' }"><b>Already Register?</b></router-link>
            </label>
          </div>

          <br />
          <center>
            <div class='row'>
              <button type='submit' class='col s12 btn btn-large waves-effect indigo' @click.prevent="register()">Register</button>
            </div>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase-config'

export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(success => {
          toastr.success("Register and Login successfully!")
          this.$router.push({ name: 'Home' })
        })
        .catch(error => {
          toastr.error(error.message)
        })
    }
  }
}
</script>

<style scoped>
.register {
  margin: 70px 0;
}
</style>
