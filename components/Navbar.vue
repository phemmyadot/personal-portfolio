<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <img src="@/assets/images/logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="portfolioNavbar"
        @click.prevent="collapse()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="portfolioNavbar" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" @click.prevent="collapse()" v-for="(navItem, i) in navItems" :key="i" v-scroll-to="`#${navItem.id}`">
          {{navItem.name}}
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a target="_blank" href="https://wa.me/+2349065195264">
              <icon-whatsapp :width="17.73" :height="17.73" iconName="whatsapp"></icon-whatsapp>
            </a>
            <a target="_blank" href="https://twitter.com/femiadot">
              <icon-twitter :width="17.73" :height="17.73" iconName="twitter"></icon-twitter>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/babafemi-adojutelegan/">
              <icon-linkedin :width="17.73" :height="17.73" iconName="linkedin"></icon-linkedin>
            </a>
            <a target="_blank" href="https://github.com/phemmyadot">
             <icon-github :width="17.73" :height="17.73" iconName="github"></icon-github>
            </a>
            <a>
              <icon-youtube :width="17.73" :height="17.73" iconName="youtube"></icon-youtube>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IconWhatsapp, IconTwitter, IconLinkedin, IconGithub, IconYoutube } from "@/components/icons";

@Component({
  components: {
    iconWhatsapp: IconWhatsapp,
    iconTwitter: IconTwitter,
    iconLinkedin: IconLinkedin,
    iconGithub: IconGithub,
    iconYoutube: IconYoutube
  }
})
export default class NavBar extends Vue {
  collapse() {
    const hamburger: any = document.getElementById("portfolioNavbar")
      ?.classList;
    const elClass =
      hamburger.length <= 1
        ? hamburger.add("expand")
        : hamburger.remove("expand");
  }

  navItems = [
    {id: 'header', name: 'Home'},
    {id: 'aboutMe', name: 'About Me'},
    {id: 'services', name: 'Services'},
    {id: 'projects', name: 'Projects'},
    {id: 'contactMe', name: 'Contact me'},
  ]
}
</script>
<style lang="scss" scoped>
.buttons {
  a {
    display: flex;
    margin: 0 0.5rem;
    .icon {
      fill: var(--bg-secondary);
    }
    .icon-stoke {
      stroke: var(--bg-secondary);
      fill: var(--bg);
    }
  }
}
.navbar {
  box-shadow: var(--color-primary) 1px 1px 1px;
  position: fixed;
  width: 100%;
  background: var(--bg);
}
@include media-sm {
  .expand {
    display: block;
    position: absolute;
    width: 100%;
  }
}
@include media-xs {
  .expand {
    display: block;
    position: absolute;
    width: 100%;
  }
}
</style>
