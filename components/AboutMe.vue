<template>
  <section class="section" id="aboutMe">
    <div class="container">
      <h1 class="title">About me</h1>
      <div class="about-me">
        <figure class="image about-me__avatar">
          <img src="@/assets/images/avatar.jpg" alt />
        </figure>
        <div class="about-me__description">
          <span v-html="description"></span>
          <div class="about-me__education">
            <ul class>
              <li>
                <strong>Eduaction</strong>
              </li>
              <li>Kwame Nkruhma University of Science and Technology.</li>
              <li>BSc Information Technology</li>
              <br />
              <li>
                <strong>Certification</strong>
              </li>
              <li>Introduction to Java Programming</li>
              <li>Triton College</li>
            </ul>
          </div>
        </div>
        <div class="about-me__skills">
          <div class="about-me__skills__icons">
            <div class="about-me__skills__icons__icon" v-for="(tech, i) in skills" :key="i">
              <img :src="require(`@/assets/images/${tech}.svg`)" :alt="tech" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class AboutMe extends Vue {
  description = `I am an <strong>Energetic Software Developer</strong> with years of
          work experience in <strong>fast-paced Technology firms</strong>. I
          have <strong>excellent development skills</strong> with a track record
          of achieving <strong>exceptional results</strong> in Software
          Developments for high-volume businesses. An
          <strong>enthusiastic team player</strong>,
          <strong>creative thinker</strong> and a
          <strong>pragmatic problem solver.</strong>`;

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
    "heroku"
  ];
}
</script>
<style lang="scss">
.about-me {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &__avatar {
    flex-basis: 20%;
  }
  &__description {
    flex-basis: 35%;
    &__contact {
      margin-top: 1rem;
      li {
        display: flex;
        svg {
          margin-right: 1rem;
        }
        .icon {
          fill: var(--bg-secondary);
        }
      }
    }
  }
  &__skills {
    flex-basis: 40%;
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
}
strong {
  text-decoration: underline;
  color: var(--color-primary);
  text-decoration-color: var(--color-primary);
}

@include media-sm {
  .about-me {
    &__description {
      flex-basis: 60%;
    }
    &__avatar {
      flex-basis: 35%;
    }
    &__skills {
      margin-top: 1rem;
      flex-basis: 100%;
    }
  }
}
@include media-xs {
  .about-me {
    display: block;
    &__avatar {
      margin-bottom: 1rem;
    }
    &__education {
      margin-top: 1rem;
    }
  }
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
