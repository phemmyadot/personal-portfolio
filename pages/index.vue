<template>
  <section class="app">
    <div class="app__fab">
      <div class="app__fab__wrapper">
        <input type="checkbox" checked />
        <div class="app__fab__wrapper__fab">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
          >
            <path
              class="icon"
              d="M8.61 22a2.25 2.25 0 0 1-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22a2.06 2.06 0 0 0 .23-1.86l-.06-.16a1.83 1.83 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.18 2.18 0 0 1 1.12-1.41a2.14 2.14 0 0 1 1.68-.12a1.93 1.93 0 0 0 1.78-.29l.13-.1a1.94 1.94 0 0 0 .73-1.51v-.24A2.32 2.32 0 0 1 10.66 2h2.55a2.26 2.26 0 0 1 1.6.67a2.37 2.37 0 0 1 .68 1.68v.28a1.76 1.76 0 0 0 .69 1.43l.11.08a1.74 1.74 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.89 1.89 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.38 2.38 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-1.5-.78a1.8 1.8 0 0 0-1.43.77l-.23.33A2.25 2.25 0 0 1 9 22a2 2 0 0 1-.39 0zM4.4 11.62a3.83 3.83 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62a.38.38 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18a.3.3 0 0 0 .18.12a.25.25 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38A4 4 0 0 1 17.1 14a3.92 3.92 0 0 1 2.49-2.61l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.35.35 0 0 0-.2-.19a.21.21 0 0 0-.19 0l-.34.11a3.74 3.74 0 0 1-3.43-.57L15 7.65a3.76 3.76 0 0 1-1.49-3v-.31a.37.37 0 0 0-.1-.26a.31.31 0 0 0-.21-.08h-2.54a.31.31 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.91 3.91 0 0 1-3.63.59a.22.22 0 0 0-.14 0a.28.28 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z"
              data-name="&lt;Group&gt;"
            />
            <path
              class="icon"
              d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5z"
            />
            <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
          </svg>
        </div>
        <div class="app__fab__wrapper__fac">
          <a @click.prevent="$colorMode.preference = 'light'"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 2267 2267"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            >
              <path
              class="icon"
                d="M0 1133q0-39 27-66q28-26 64-26h218q37 0 61.5 27t24.5 65t-24.5 64.5T309 1224H91q-37 0-64-27t-27-64zm305 739q0-37 25-65l157-152q24-25 63-25q38 0 63.5 24t25.5 61q0 39-26 68l-152 152q-65 51-131 0q-25-27-25-63zm0-1477q0-37 25-65q31-26 68-26q35 0 63 26l152 157q26 24 26 63q0 38-25.5 63.5T550 639q-39 0-63-26L330 461q-25-27-25-66zm272 738q0-149 75-277.5T855.5 652t277.5-75q112 0 215 44.5t177.5 119T1644 918t44 215q0 150-74.5 278T1411 1613.5t-278 74.5t-278-74.5T652 1411t-75-278zm181 0q0 156 109.5 266.5T1133 1510t266.5-110.5T1510 1133q0-154-110.5-263T1133 761q-155 0-265 109t-110 263zm284 829q0-38 26.5-64t64.5-26q39 0 65 26t26 64v212q0 39-26.5 66t-64.5 27t-64.5-27t-26.5-66v-212zm0-1653V91q0-37 27-64t64-27t64 27t27 64v218q0 37-26.5 61.5T1133 395t-64.5-24.5T1042 309zm589 1406q0-37 24-60q24-25 60-25q39 0 64 25l156 152q26 28 26 65t-26 63q-64 50-128 0l-152-152q-24-27-24-68zm0-1165q0-40 24-63l152-157q28-26 63-26q38 0 64.5 27t26.5 64q0 40-26 66l-156 152q-29 26-64 26q-36 0-60-25.5t-24-63.5zm241 583q0-38 26-66q26-26 61-26h216q37 0 64.5 27.5t27.5 64.5t-27.5 64t-64.5 27h-216q-37 0-62-26.5t-25-64.5z"
              />
              <rect
                x="0"
                y="0"
                width="24"
                height="24"
                fill="rgba(0, 0, 0, 0)"
              /></svg
          ></a>
          <a @click.prevent="$colorMode.preference = 'dark'"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
            >
              <path
              class="icon"
                d="M17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31z"
              />
              <rect
                x="0"
                y="0"
                width="24"
                height="24"
                fill="rgba(0, 0, 0, 0)"
              /></svg
          ></a>
        </div>
      </div>
    </div>

    <app-nav-bar></app-nav-bar>
    <app-header></app-header>
    <app-about-me></app-about-me>
    <!-- <app-services></app-services> -->
  </section>
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
  created() {
    console.log(this.$colorMode.preference);
  }
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
.app {
  z-index: 1;
  position: relative;
  &__fab {
    position: fixed;
    top: 50%;
    left: 1%;
    z-index: 100;
    &__wrapper {
      width: 2.5rem;
      height: 2.5rem;
      position: relative;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &__fab {
        background: var(--bg-secondary);
        width: 2.5rem;
        height: 2.5rem;
        position: relative;
        z-index: 103;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fab-animation-reverse 0.4s ease-out forwards;
      }
      &__fac {
        width: 32px;
        height: 150px;
        border-radius: 64px;
        position: absolute;
        background: var(--bg-secondary);
        z-index: 102;
        padding: 0.5rem 0.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        opacity: 0;
        top: -110px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        transition: opacity 0.2s ease-in, top 0.2s ease-in, width 0.1s ease-in;
        a {
          color: var(--bg-secondary);
          opacity: 0.8;
          &:hover {
            transition: 0.2s;
            opacity: 1;
            color: darken(#344955, 2%);
          }
        }
      }
      input {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        z-index: 105;
        opacity: 0;
        &:checked {
          ~ .app__fab__wrapper__fab {
            animation: fab-animation 0.4s ease-out forwards;
          }
          ~ .app__fab__wrapper__fac {
            width: 32px;
            height: 150px;
            animation: fac-animation 0.4s ease-out forwards 0.1s;
            top: -180px;
            opacity: 1;
          }
        }
      }
    }

    @keyframes fab-animation {
      0% {
        transform: rotate(0) scale(1);
      }
      20% {
        transform: rotate(60deg) scale(0.93);
      }
      55% {
        transform: rotate(35deg) scale(0.97);
      }
      80% {
        transform: rotate(48deg) scale(0.94);
      }
      100% {
        transform: rotate(45deg) scale(0.95);
      }
    }

    @keyframes fab-animation-reverse {
      0% {
        transform: rotate(45deg) scale(0.95);
      }
      20% {
        transform: rotate(-15deg);
      }
      55% {
        transform: rotate(10deg);
      }
      80% {
        transform: rotate(-3deg);
      }
      100% {
        transform: rotate(0) scale(1);
      }
    }

    @keyframes fac-animation {
      0% {
        transform: scale(1, 1);
      }
      33% {
        transform: scale(0.95, 1.05);
      }
      66% {
        transform: scale(1.05, 0.95);
      }
      100% {
        transform: scale(1, 1);
      }
    }
  }
}

.icon {
  fill: var(--bg);
}
</style>
