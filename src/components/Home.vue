<template>
  <div class="col s12 m12 center">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">
          <h1>ShareQuote</h1>
        </span>
        <p>
          Created with <i class="fa fa-heart"></i> using <img class="responsive-img" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg"> and
          <img class="responsive-img" src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-128.png">
        </p>
      </div>
      <div class="card-action">
        <router-link class="waves-effect waves-light btn-large" :to="{ name: 'Quotes' }">Get Started</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  height: 50vh;
  border: 0;
}

p {
  font-size: 1.25rem;
}

img {
  width: 30px;
  vertical-align: bottom;
}
</style>
