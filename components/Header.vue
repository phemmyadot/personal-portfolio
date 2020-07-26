<template>
  <section class="header" id="header">
    <div class="header__container">
      <div class="header__container__content">
        <client-only>
          <vue-typer
            :text="introduction"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="70"
            :type-delay="70"
            :pre-erase-delay="4000"
            :erase-delay="250"
            erase-style="select-all"
            :erase-on-complete="false"
            caret-animation="blink"
          ></vue-typer>
        </client-only>
        <div class="header__container__content__download-button">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1k2lRi7KV-ItVFreONi6I-hWEf-7ij3ZL/view?usp=drivesdk"
          >
            <button
              id="download"
              class="header__container__content__download-button__button button is-rounded"
            >View Resume</button>
          </a>
        </div>
      </div>
      <img src="@/assets/images/background.png" class="header__image" alt="header iamge" />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Header extends Vue {
  introduction = [
    "I AM BABAFEMI",
    "SOFTWARE DEVELOPER",
    "CREATIVE THINKER",
    "PASSIONATE",
    "TEAM PLAYER"
  ];
  mounted() {
    this.start();
  }

  start() {
    this.$confetti.start({
      defaultSize: 1,
      defaultDropRate: 10,
      particlesPerFrame: 20
    });
  }
}
</script>
<style lang="scss">
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
    position: relative;
    &__content {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &__download-button {
        margin-top: 3rem;
        &__button {
          font-size: 0.895rem;
          background-color: var(--color-primary);
          border-color: transparent;
          color: var(--color-secondary);
          &:hover,
          &:focus {
            color: var(--color-secondary);
          }
        }
      }
    }
  }
}

@include tablet-portrait {
  .header {
    &__image {
      top: auto;
      margin-top: 0;
      right: 0;
      width: 100vw;
      bottom: 0;
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
  color: var(--color-primary);
}
.vue-typer .custom.char.selected {
  color: var(--color-secondary);
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: var(--color-secondary);
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: var(--color-primary);
}
</style>
