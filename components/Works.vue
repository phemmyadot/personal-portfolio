<template>
  <section class="works section" id="works">
    <div class="container">
      <h1 class="title">Projects I have worked on</h1>
      <div class="tabs is-boxed">
        <ul>
          <li
            :class="currentCategory === category? 'is-active' : ''"
            v-for="(category, i) in categories"
            :key="i"
          >
            <a @click.prevent="changeCategory(category)">
              <span>{{category}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="works__cards">
        <div class="card works__cards__card" v-for="(project, i) in filteredWorks" :key="i">
          <div class="works__cards__card__actions">
            <div class="works__cards__card__actions__action" v-if="project.repo !== ''">
              <a target="_blank" :href="project.repo">
                <icon-github :width="36" :height="36" iconName="github" type="inverse"></icon-github>
              </a>
            </div>
             <div class="works__cards__card__actions__action" v-else">
              <a >
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
      title: "La Isla",
      link: "",
      repo: "",
      techs: ["FLUTTER", "DART"],
      category: "Mobile"
    },
     {
      title: "Woo Cars",
      link: "",
      repo: "",
      techs: ["FLUTTER", "DART"],
      category: "Mobile"
    },
     {
      title: "Younion",
      link: "",
      repo: "",
      techs: ["FLUTTER", "DART"],
      category: "Mobile"
    },
    {
      title: "Dream House",
      link: "",
      repo: "",
      techs: ["FLUTTER", "DART"],
      category: "Mobile"
    },
  {
      title: "Movies Plus",
      link: "https://install.appcenter.ms/users/phemmyadot/apps/movies-plus",
      repo: "https://github.com/phemmyadot/movies-plus",
      techs: ["FLUTTER", "DART"],
      category: "Mobile"
    },

  {
      title: "Recipie Book",
      link: "https://install.appcenter.ms/users/phemmyadot/apps/recipiebook",
      repo: "https://github.com/phemmyadot/cook-book",
      techs: ["FLUTTER", "DART", "GOOGLE CLOUD PLATFORM"],
      category: "Mobile"
    },

    {
      title: "Recipe APP",
      link: "https://phissy-recipe-app.netlify.com/",
      repo: "https://github.com/phemmyadot/phissy-recipes-frontend-ionic",
      techs: ["IONIC", "HTML/CSS", "GRAPHQL"],
      category: "Mobile"
    },
    {
      title: "Recipe APP API",
      // link: "https://phissy-recipe-app.netlify.com/",
      repo: "https://github.com/phemmyadot/phissy-recipes-frontend-ionic",
      techs: ["NODE.JS", "EXPRESS.JS", "GRAPHQL", "MONGODB"],
      category: "Backend"
    },
    {
      title: "Roster APP",
      link: "",
      repo: "https://github.com/phemmyadot/RosterApp",
      techs: ["ANGULAR", "HTML/CSS"],
      category: "Web"
    },
    {
      title: "Richtext Editor",
      link: "https://codepen.io/phemmyadot/pen/Yzwebzx",
      repo: "https://github.com/phemmyadot/Rich-Text-Editor-JavaScript-",
      techs: ["HTML/CSS", "JAVASCRIPT"],
      category: "Snippet"
    },
    {
      title: "Recipe Blog",
      link: "https://cooking-app-e6bc4.firebaseapp.com/",
      repo: "https://github.com/phemmyadot/phissy-frontend-angular",
      techs: ["HTML/CSS", "ANGULAR"],
      category: "Web"
    },
    {
      title: "Inventory APP",
      link: "https://phemmy-inventory-app.netlify.app/",
      repo: "https://github.com/phemmyadot/inventory-app",
      techs: ["HTML/SCSS", "VUE.JS"],
      category: "Web"
    },
    {
      title: "Inventory APP API",
      // link: "https://phemmy-inventory-app.netlify.app/",
      repo: "https://github.com/phemmyadot/inventory-app-backend",
      techs: ["NODE.JS", "EXPRESS.JS", "MONGODB"],
      category: "Backend"
    },
    {
      title: "Personal Portfolio",
      link: "https://babafemi-portfolio.netlify.app/",
      repo: "https://github.com/phemmyadot/personal-portfolio",
      techs: ["NUXT.JS", "HTML/SCSS"],
      category: "Web"
    } ,
    {
      title: "My Ivav Farmstead",
      link: "http://myivavfarmstead.com/",
      techs: ["WORDPRESS"],
      category: "Web"
    }
  ];

  categories: string[] = [];
  filteredWorks = [];
  currentCategory = "All";

  created() {
    const allCategories = this.works.map(w => w.category);
    this.categories = [...["All"], ...new Set(allCategories)];
    this.filteredWorks = this.works;
  }

  changeCategory(category) {
    this.currentCategory = category;
    if (category === "All") {
      this.filteredWorks = this.works;
    } else {
      this.filteredWorks = this.works.filter(w => w.category === category);
    }
  }
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

.is-active {
  a {
    background-color: var(--bg-secondary) !important;
    border-color: var(--bg-secondary) !important;
    span {
      color: var(--color-secondary) !important;
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
