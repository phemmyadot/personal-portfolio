<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="portfolioNavbar" @click="collapse()">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="portfolioNavbar" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        About me
      </a>
      <a class="navbar-item">
        Projects
      </a>
      <a class="navbar-item">
        Contact me
      </a>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
            <p class="share-text">Share to: </p>
          <a class="button is-light">
            Facebook
          </a>
          <a class="button is-light">
            Twitter
          </a>
          <a class="button is-light">
            WhatsApp
          </a>
          <a class="button is-light">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    collapse() {
      const hamburger: any = document.getElementById("portfolioNavbar");
      hamburger.style.display = hamburger.style.display === "none" ? "block" : "none";
    }
  }
});
</script>
<style lang="scss" scoped>
.share-text {
  margin-right: 1rem;
  color: $brownish-grey;
}
</style>
