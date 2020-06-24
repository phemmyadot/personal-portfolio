<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 1024 1024"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
  <g>
    <path
      class="icon"
      d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z"
      :fill="iconColor"
    />
    <rect x="0" y="0" width="25" height="25" fill="rgba(0, 0, 0, 0)" />
  </g>
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class IconMail extends Vue {
  @Prop() width: any;
  @Prop() height: any;
  @Prop() iconName: string;
  @Prop() iconColor: string;
}
</script>

<style lang="scss" scoped>
.icon {
  fill: var(--bg-secondary);
}
</style>