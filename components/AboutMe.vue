<template>
  <section class="section" id="aboutMe">
    <div class="container">
      <h1 class="title">About me</h1>
      <div class="about-me">
        <figure class="image about-me__avatar">
          <img src="@/assets/images/avatar.jpg" alt="" />
        </figure>
        <span class="about-me__description">
          <span v-html="description"></span>
          <ul class="about-me__description__contact">
            <strong>Contact:</strong>
            <li>
              <icon-mail :width="25" :height="25" iconName="mail"
                ><icon-mail
              /></icon-mail>
              <a href="mailto:Phemmylekan@gmail.com"> Phemmylekan@gmail.com</a>
            </li>
            <li>
              <icon-mobile
                :width="25"
                :height="25"
                iconName="mobile"
              ></icon-mobile>
              <a href="tel: +2449065195264"></a> +234 906 5195 264
            </li>
            <li>
              <icon-location
                :width="25"
                :height="25"
                iconName="location"
              ></icon-location>
              106 Victoria Street, Ojota, Lagos, Nigeria
            </li>
          </ul>
        </span>
        <div class="about-me__education">
          <ul class="">
            <li><strong>Eduaction</strong></li>
            <li>Kwame Nkruhma University of Science and Technology.</li>
            <li>BSc Information Technology</li>
            <br />
            <li><strong>Certification</strong></li>
            <li>Introduction to Java Programming</li>
            <li>Triton College</li>
          </ul>
        </div>
      </div>
      <div class="technologies">
        <strong>Technologies</strong>
        <div class="technologies__icons">
          <div class="technologies__icons__icon" v-for="(tech, i) in technologies" :key="i">
            <img :src="require(`@/assets/images/${tech}.svg`)" :alt="tech" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IconMail, IconMobile, IconLocation } from "@/components/icons";

@Component({
  components: {
    iconMail: IconMail,
    iconMobile: IconMobile,
    iconLocation: IconLocation
  }
})
export default class AboutMe extends Vue {
  description = `I am an <strong>Energetic Software Developer</strong> with years of
          work experience in <strong>fast-paced Technology firms</strong>. I
          have <strong>excellent development skills</strong> with a track record
          of achieving <strong>exceptional results</strong> in Software
          Developments for high-volume businesses. An
          <strong>enthusiastic team player</strong>,
          <strong>creative thinker</strong> and a
          <strong>pragmatic problem solver.</strong>`;
  technologies = [
    "javascript",
    "typescript",
    "angular",
    "vue-js",
    "nuxt",
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
    flex-basis: 45%;
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
  &__education {
    flex-basis: 30%;
  }
}
strong {
  text-decoration: underline;
  color: var(--color-primary);
  text-decoration-color: var(--color-primary);
}
.technologies {
  margin-top: 1rem;
  &__icons {
    display: flex;
    flex-wrap: wrap;
    &__icon {
      flex-basis: 8%;
      height: 4rem;
      margin: 1rem;
      display: flex;
      justify-content: center;
      img {
        height: 100%;
      }
    }
  }
}

@include media-sm {
  .about-me {
    &__description {
      margin-top: 1rem;
      flex-basis: 100%;
      order: 3;
    }
    &__avatar {
      flex-basis: 35%;
    }
    &__education {
      flex-basis: 60%;
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
