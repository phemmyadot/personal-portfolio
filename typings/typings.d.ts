import VueConfetti from 'vue-confetti';
import ColorMode from '@nuxtjs/color-mode'

declare module 'vue/types/vue' {
    interface Vue {
        $confetti:  VueConfetti;
        $colorMode: ColorMode;
    }
}