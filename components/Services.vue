<template>
  <section class="container services">
    <h1 class="title">Services</h1>
    <!-- <h2 class="subtitle">
        description
      </h2> -->
    <div class="services__cards">
      <div class="services__cards__card card" v-for="(service, i) in services" :key="i">
        <div class="card-header">
          <p class="card-header-title">
            {{service.title}}
          </p>
        </div>
        <div class="card-content">
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br />
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
    { title: "test" },
    { title: "test" },
    { title: "test" },
    { title: "test" },
    { title: "test" },
    { title: "test" }
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
  }
}
</style>
