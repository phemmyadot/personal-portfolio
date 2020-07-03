<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    :height="height"
    :width="width"
  >
    <path class="icon" d="M13 3l3.293 3.293l-7 7l1.414 1.414l7-7L21 11V3z" />
    <path
      class="icon"
      d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class IconExternal extends Vue {
  @Prop() width: any;
  @Prop() height: any;
  @Prop() iconName: string;
  @Prop() iconColor: string;
  @Prop() type: string;
}
</script>

<style lang="scss" scoped>
.icon {
  fill: var(--bg);
}
</style>
