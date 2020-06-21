<template>
  <div class="header">
    <div class="header__container">
    <div class="header__container__content">
        <no-ssr>
          <vue-typer
            :text='["I AM BABAFEMI","I AM A SOFTWARE DEVELOPER"]'
            :repeat='Infinity'
            :shuffle='false'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='4000'
            :erase-delay='250'
            erase-style='select-all'
            :erase-on-complete='false'
            caret-animation='blink'
          ></vue-typer>
        </no-ssr>
        <div class="header__container__content__download-button">
          <button id="download" class="button" @click="download">Download CV</button>
        </div>
    </div>
    <img src="@/assets/images/background.png" class="header__image" alt="header iamge">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Header extends Vue {
  mounted() {
    this.start();
  }

  start() {
    this.$confetti.start({
      defaultSize: 1,
      defaultDropRate: 3
    });
  }

  download() {
    const download: any = document.getElementById("download")?.classList;
    download.add("is-loading");
    setTimeout(() => download.remove("is-loading"), 2000);
  }
}
</script>
<style lang="scss" >
.header {
  height: calc(100vh - 3.25rem);
  &__image {
    position: absolute;
    top: 50%;
    margin-top: -18%;
    right: 0;
    width: 50vw;
  }
  &__container {
    height: 100%;
    &__content {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &__download-button {
        margin-top: 3rem;
        button {
          font-size: 0.895rem;
          background-color: $primary;
          border-color: transparent;
          color: #fff;
        }
      }
    }
  }
}

@include tablet-portrait {
  .header {
    &__image {
      position: relative;
      top: auto;
      margin-top: 0;
      right: 0;
      width: 100vw;
    }
    &__container {
      &__content {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
}

@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: "latoBold";
  font-size: 1.25rem;
}
.vue-typer .custom.char.typed {
  color: $primary;
}
.vue-typer .custom.char.selected {
  color: $tertiary;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #009688;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: $primary;
}
</style>