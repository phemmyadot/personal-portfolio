<template>
  <section class="skills section">
    <div class="container">
      <h1 class="title">Skills</h1>
      <div class="skills__icons">
        <div class="skills__icons__icon" v-for="(tech, i) in skills" :key="i">
          <img :src="require(`@/assets/images/${tech}.svg`)" :alt="tech" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Skills extends Vue {
  skills = [
    "javascript",
    "typescript",
    "angular",
    "vue-js",
    "nuxt",
    "flutter",
    "ionic",
    "nodejs",
    "graphql",
    "mongodb",
    "html-5",
    "css3",
    "graphql",
    "sass",
    "bootstrap",
    "material-ui",
    "bulma",
    "npm",
    "git",
    "github",
    "bitbucket",
    "azure",
    "netlify",
    "heroku",
    "python",
    "aws",
    "gcp"
    "docker",
    "ansible",
    "terraform",
  ];
}
</script>

<style lang="scss" scoped>
.skills {
  margin-top: 1rem;
  &__icons {
    display: flex;
    flex-wrap: wrap;
    &__icon {
      flex-basis: 8%;
      height: 4rem;
      margin: 0 1rem;
      display: flex;
      justify-content: center;
      img {
        height: 100%;
      }
    }
  }
}

@include media-xs {
  .technologies {
    &__icons {
      display: flex;
      flex-wrap: wrap;
      &__icon {
        height: 2rem;
      }
    }
  }
}
</style>
