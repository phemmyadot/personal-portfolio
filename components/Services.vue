<template>
  <section class="container services" id="services">
    <h1 class="title">Services</h1>
    <!-- <h2 class="subtitle">
        description
      </h2> -->
    <div class="services__cards">
      <div class="services__cards__card card" v-for="(service, i) in services" :key="i">
        <div class="card-header services__cards__card__header">
          <p class="card-header-title services__cards__card__header__title">
            {{service.title}}
          </p>
        </div>
        <div class="card-content services__cards__card__body">
          <div class="content services__cards__card__body__content">
            {{ service.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Services extends Vue {
  services = [
    {
      title: "test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      icon: ""
    },
    {
      title: "test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      icon: ""
    },
    {
      title: "test",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      icon: ""
    }
  ];
}
</script>
<style lang="scss" scoped>
.services {
  &__cards {
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    &__card {
      background-color: var(--bg-secondary);
      &__header {
        box-shadow: 0 0.125em 0.25em var(--bg);
        &__title {
          color: var(--color-secondary) !important;
        }
      }
      &__body {
        &__content {
          color: var(--color-secondary) !important;
        }
      }
    }
  }
}
</style>
