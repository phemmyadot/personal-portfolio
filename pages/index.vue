<template>
  <div>
      <app-nav-bar></app-nav-bar>
      <app-header></app-header>
      <h1>testing</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { NavBar, Header } from "@/components";
import "reflect-metadata";

@Component({
  components: {
    appNavBar: NavBar,
    appHeader: Header
  }
})
export default class App extends Vue {
  // @Prop(Number) readonly propA: number | undefined
}
</script>

<style lang="scss" scoped>
</style>
