<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href>
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
        <a
          class="navbar-item"
          @click.prevent="collapse()"
          v-for="(navItem, i) in navItems"
          :key="i"
          v-scroll-to="`#${navItem.id}`"
        >{{navItem.name}}</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a target="_blank" href="https://www.linkedin.com/in/babafemi-adojutelegan/">
              <icon-linkedin :width="17.73" :height="17.73" iconName="linkedin"></icon-linkedin>
            </a>
            <a target="_blank" href="https://github.com/phemmyadot">
              <icon-github :width="17.73" :height="17.73" iconName="github"></icon-github>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import {
  IconWhatsapp,
  IconTwitter,
  IconLinkedin,
  IconGithub
} from "@/components/icons";

@Component({
  components: {
    iconWhatsapp: IconWhatsapp,
    iconTwitter: IconTwitter,
    iconLinkedin: IconLinkedin,
    iconGithub: IconGithub,
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
    { id: "header", name: "Home" },
    { id: "aboutMe", name: "About" },
    { id: "works", name: "Works" },
    { id: "contact", name: "Contact" }
  ];
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
  box-shadow: var(--box-shadow);
  position: fixed;
  width: 100%;
  background-color: var(--bg);
}
.navbar-menu {
  background-color: var(--bg);
}
.navbar-burger {
  .span {
    color: var(--color-primary)
  }
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
