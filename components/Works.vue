<template>
  <section class="works section" id="works">
    <div class="container">
      <h1 class="title">My works</h1>
      <div class="works__cards">
        <div class="card works__cards__card" v-for="(project, i) in works" :key="i">
          <div class="works__cards__card__actions">
            <div class="works__cards__card__actions__action" v-if="project.repo !== ''">
              <a target="_blank" :href="project.repo">
                <icon-github :width="36" :height="36" iconName="github" type="inverse"></icon-github>
              </a>
            </div>
            <div class="works__cards__card__actions__action" v-if="project.link !== ''">
              <a target="_blank" :href="project.link">
                <icon-external :width="36" :height="36" iconName="external" type="inverse"></icon-external>
              </a>
            </div>
          </div>
          <div class="works__cards__card__content">
            <h1 class="works__cards__card__content__title">{{project.title}}</h1>
          </div>
          <div class="works__cards__card__footer">
            <p
              class="works__cards__card__footer__tech"
              v-for="(tech,i) in project.techs"
              :key="i"
            >{{tech}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IconGithub, IconExternal } from "@/components/icons";

@Component({
  components: {
    iconGithub: IconGithub,
    iconExternal: IconExternal
  }
})
export default class Services extends Vue {
  works = [
    {
      title: "Recipe APP",
      link: "https://phissy-recipe-app.netlify.com/",
      repo: "https://github.com/phemmyadot/phissy-recipes-frontend-ionic",
      techs: ["IONIC", "NODE.JS", "HTML/CSS", "EXPRESS.JS", "GRAPHQL", "MONGODB"]
    },
    {
      title: "Roster APP",
      link: "",
      repo: "https://github.com/phemmyadot/RosterApp",
      techs: ["ANGULAR", "HTML/CSS", "ASP.NET API"]
    },
    {
      title: "Richtext Editor",
      link: "phemmy-richtext-editor.netlify.app",
      repo: "https://github.com/phemmyadot/Rich-Text-Editor-JavaScript-",
      techs: ["HTML/CSS", "JAVASCRIPT"]
    },
    {
      title: "Recipe Blog",
      link: "https://cooking-app-e6bc4.firebaseapp.com/",
      repo: "https://github.com/phemmyadot/phissy-frontend-angular",
      techs: ["HTML/CSS", "JAVASCRIPT"]
    },
    {
      title: "Inventory APP",
      link: "https://phemmy-inventory-app.netlify.app/",
      repo: "https://github.com/phemmyadot/inventory-app",
      techs: ["VUE.JS", "HTML/SCSS", "ASP.NET API"]
    },
    {
      title: "Personal Portfolio",
      link: "https://babafemi-portfolio.netlify.app/",
      repo: "https://github.com/phemmyadot/personal-portfolio",
      techs: ["VUE.JS", "HTML/SCSS"]
    } ,
    {
      title: "My Ivan Farm Stead",
      link: "http://myivavfarmstead.com/",
      techs: ["WORDPRESS"]
    }
  ];
}
</script>

<style lang="scss" scoped>
.works {
  &__cards {
    display: grid;
    grid-column-gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    &__card {
      box-shadow: var(--box-shadow);
      min-height: 20rem;
      background-color: var(--bg-secondary);
      padding: 4rem 5rem;
      &:hover {
        transform: scale(1.01);
      }
      &__actions {
        margin-bottom: 1.5rem;
        opacity: 0.9;
        color: var(--color-secondary);
        font-size: 1.5rem;
        font-family: "latoBold";
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &__action {
          margin: 0 0.5rem;
        }
      }
      &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        bottom: 0;
        margin-top: 5rem;
        &__title {
          color: var(--color-secondary) !important;
          font-size: 2rem;
        }
      }
      &__footer {
        margin-top: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        &__tech {
          color: var(--color-secondary) !important;
          font-size: 1rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
}

@include media-sm {
  .works {
    &__cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@include media-xs {
  .works {
    &__cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
