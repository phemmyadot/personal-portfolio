<template>
  <div>
    <button class="button is-fab" v-if="isDarkMode" @click="changeColorMode()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          class="is-fab__icon"
          d="M12,19.58V19.58C10.4,19.58 8.89,18.96 7.76,17.83C6.62,16.69 6,15.19 6,13.58C6,12 6.62,10.47 7.76,9.34L12,5.1M17.66,7.93L12,2.27V2.27L6.34,7.93C3.22,11.05 3.22,16.12 6.34,19.24C7.9,20.8 9.95,21.58 12,21.58C14.05,21.58 16.1,20.8 17.66,19.24C20.78,16.12 20.78,11.05 17.66,7.93Z"
        />
      </svg>
    </button>
    <button class="button is-fab" v-else @click="changeColorMode()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          class="is-fab__icon"
          d="M20.65,20.87L18.3,18.5L12,12.23L8.44,8.66L7,7.25L4.27,4.5L3,5.77L5.78,8.55C3.23,11.69 3.42,16.31 6.34,19.24C7.9,20.8 9.95,21.58 12,21.58C13.79,21.58 15.57,21 17.03,19.8L19.73,22.5L21,21.23L20.65,20.87M12,19.59C10.4,19.59 8.89,18.97 7.76,17.83C6.62,16.69 6,15.19 6,13.59C6,12.27 6.43,11 7.21,10L12,14.77V19.59M12,5.1V9.68L19.25,16.94C20.62,14 20.09,10.37 17.65,7.93L12,2.27L8.3,5.97L9.71,7.38L12,5.1Z"
        />
      </svg>
    </button>
    <app-nav-bar></app-nav-bar>
    <app-header></app-header>
    <app-about-me></app-about-me>
    <app-services></app-services>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { NavBar, Header, Services, AboutMe } from "@/components";
import "reflect-metadata";

@Component({
  components: {
    appNavBar: NavBar,
    appHeader: Header,
    appServices: Services,
    appAboutMe: AboutMe
  }
})
export default class App extends Vue {
  isDarkMode = false;
  addDarkTheme(rootEl) {
    rootEl.classList.remove("light-mode");
    rootEl.classList.add("dark-mode");
  }
  removeDarkTheme(rootEl) {
    rootEl.classList.remove("dark-mode");
    rootEl.classList.add("light-mode");
  }
  changeColorMode() {
    let rootEl = document.querySelector("html");
    this.isDarkMode = !this.isDarkMode;
    this.isDarkMode ? this.addDarkTheme(rootEl) : this.removeDarkTheme(rootEl);
  }
}
</script>

<style lang="scss" scoped>
.is-fab {
  position: fixed;
  left: 0;
  top: 50%;
  border: 1px solid var(--bg-secondary);
  background-color: var(--bg-secondary);
  box-shadow: var(--bg-secondary) 1px 1px 1px;
  z-index: 9999;
  &:focus {
    outline: none;
    box-shadow: var(--bg-secondary) 1px 1px 1px;
  }
  &__icon {
    fill: var(--bg);
  }
}
</style>
