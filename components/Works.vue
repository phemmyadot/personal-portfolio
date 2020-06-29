<template>
  <section class="container works section" id="services">
    <h1 class="title">My works</h1>
    <div class="works__cards">
      <div class="card works__cards__card" v-for="(project, i) in works" :key="i" :style="{ backgroundImage: `linear-gradient(to bottom, var(--gradient-start-color), var(--gradient-end-color)), url('${require(`@/assets/images/${project.id}.png`)}')` }">
        <div class="works__cards__card__title">
          <h2>{{project.title}}</h2>
        </div>
        <div class="card-content works__cards__card__content">
          <p class="works__cards__card__content__description">{{project.description}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Services extends Vue {
  works = [
    { title: "Personal Portfolio", description: "testing my description", id: 'project-1' },
    { title: "Personal Portfolio", description: "testing my description", id: 'project-1' },
    { title: "Personal Portfolio", description: "testing my description", id: 'project-1' },
    { title: "Personal Portfolio", description: "testing my description", id: 'project-1' },
  ];
}
</script>

<style lang="scss" scoped>
.works {
  &__cards {
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    &__card {
      box-shadow: var(--box-shadow);
      min-height: 20rem;
      background-size: cover;
      background-position: center;
      &__title {
          height: 4rem;
          background: var(--bg);
          opacity: 0.9;
          padding: 1.5rem;
          color: var(--color-primary);
          font-size: 1.5rem;
          font-family: "latoBold";
          display: flex;
          align-items: center;
      }
      &__content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
       position: absolute;
    bottom: 0;
        &__description {
          color: var(--color-primary);
          font-size: 1rem;
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