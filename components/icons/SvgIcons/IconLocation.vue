<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g>
      <path
        class="icon"
        d="M13 13.14l1.17-5.94c.79-.43 1.33-1.25 1.33-2.2a2.5 2.5 0 0 0-5 0c0 .95.54 1.77 1.33 2.2zm0-9.64c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5zm1.72 4.8L18 6.97v9L13.12 18L7 15.97l-5 2v-9l5-2l4.27 1.41l1.73 7.3z"
        :fill="iconColor"
      />
      <rect x="0" y="0" width="25" height="25" fill="rgba(0, 0, 0, 0)" />
    </g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class IconLocation extends Vue {
  @Prop() width: any;
  @Prop() height: any;
  @Prop() iconName: string;
  @Prop() iconColor: string;
}
</script>
