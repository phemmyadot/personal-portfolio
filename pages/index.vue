<template>
  <section class="app">
    <div class="app__fab">
      <div class="app__fab__wrapper">
        <input type="checkbox" />
        <div class="app__fab__wrapper__fab">
          <icon-setting :width="24" :height="24" iconName="setting"></icon-setting>
        </div>
        <div class="app__fab__wrapper__fac">
          <a @click.prevent="$colorMode.preference = 'light'">
            <icon-day :width="24" :height="24" iconName="day"></icon-day>
          </a>
          <a @click.prevent="$colorMode.preference = 'dark'">
            <icon-night :width="24" :height="24" iconName="night"></icon-night>
          </a>
        </div>
      </div>
    </div>

    <app-nav-bar></app-nav-bar>
    <app-header></app-header>
    <app-about-me></app-about-me>
    <app-services></app-services>
    <app-works></app-works>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { NavBar, Header, Services, AboutMe, Works } from "@/components";
import { IconSetting, IconDay, IconNight } from "@/components/icons";
import "reflect-metadata";

@Component({
  components: {
    appNavBar: NavBar,
    appHeader: Header,
    appServices: Services,
    appAboutMe: AboutMe,
    appWorks: Works,
    iconSetting: IconSetting,
    iconDay: IconDay,
    iconNight: IconNight
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss" scoped>
.app {
  z-index: 1;
  position: relative;
  padding-bottom: 3rem;
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

</style>
