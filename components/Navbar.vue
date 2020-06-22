<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="">
      <img src="@/assets/images/logo.png" width="112" height="28">
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
          <a>
            <img src="@/assets/images/facebook-logo.svg" alt="">
          </a>
          <a>
            <img src="@/assets/images/instagram-logo.svg" alt="">
          </a>
          <a>
            <img src="@/assets/images/twitter-logo.svg" alt="">
          </a>
          <a>
            <img src="@/assets/images/linkedin.svg" alt="">
          </a>
          <a>
            <img src="@/assets/images/youtube-logo.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
  // @Prop(Number) readonly propA: number | undefined
  collapse() {
      const hamburger: any = document.getElementById("portfolioNavbar")?.classList;
      const elClass = hamburger.length <= 1 ? hamburger.add('expand') : hamburger.remove('expand');
    }
}
</script>
<style lang="scss" scoped>
.share-text {
  margin-right: 1rem;
  color: $brownish-grey;
}
.buttons {
  a {
    display: flex;
    margin: 0 0.5rem;
    img {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
}
@include media-sm {
  .expand {
    display: block;
  }
}
</style>
