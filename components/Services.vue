<template>
  <section class="container services section" id="services">
    <h1 class="title">Services</h1>
    <div class="services__cards">
      <div class="services__cards__card card" v-for="(service, i) in services" :key="i">
        <div class="card-header services__cards__card__header">
          <p class="card-header-title services__cards__card__header__title">{{service.title}}</p>
        </div>
        <div class="card-content services__cards__card__body">
          <icon-service :width="50" :height="50" iconName="service" :type="service.icon"></icon-service>
          <div class="content services__cards__card__body__content">{{ service.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IconService } from "@/components/icons";

@Component({
  components: {
    iconService: IconService
  }
})
export default class Services extends Vue {
  services = [
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      icon: "html"
    },
    {
      title: "Mobile Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      icon: "app"
    },
    {
      title: "Consultancy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      icon: "idea"
    },
    {
      title: "API Integration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      icon: "api"
    },
    {
      title: "Application Maintenance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      icon: "wrench"
    },
    {
      title: "Deployment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      icon: "hosting"
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

@include media-sm {
  .services {
    &__cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@include media-xs {
  .services {
    &__cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
