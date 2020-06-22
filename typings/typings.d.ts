import VueConfetti from 'vue-confetti';

declare module 'vue/types/vue' {
    interface Vue {
        $confetti:  VueConfetti
    }
}