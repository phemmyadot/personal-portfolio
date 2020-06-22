<template>
  <section class="section">
    <div class="container">
      <h1 class="title">About me</h1>
      <div class="about-me">
        <figure class="image about-me__avatar">
          <img src="@/assets/images/avatar.jpg" alt="" />
        </figure>
        <span class="about-me__description">
          I am an <strong>Energetic Software Developer</strong> with years of
          work experience in <strong>fast-paced Technology firms</strong>. I
          have <strong>excellent development skills</strong> with a track record
          of achieving <strong>exceptional results</strong> in Software
          Developments for high-volume businesses. An
          <strong>enthusiastic team player</strong>,
          <strong>creative thinker</strong> and a
          <strong>pragmatic problem solver.</strong>
          <ul class="about-me__description__contact">
            <li><strong>Email:</strong><a href="mailto:Phemmylekan@gmail.com"> Phemmylekan@gmail.com</a></li>
            <li><strong>Mobile:</strong><a href="tel: +2449065195264"></a> +234 906 5195 264</li>
            <li><strong>Address:</strong> 106 Victoria Street, Ojota, Lagos, Nigeria</li>
          </ul>
        </span>
        <div class="about-me__education">
          <ul class="">
            <li><strong>Eduaction</strong></li>
            <li>Kwame Nkruhma University of Science and Technology.</li>
            <li>BSc Information Technology</li>
            <br>
            <li><strong>Certification</strong></li>
            <li>Introduction to Java Programming</li>
            <li>Triton College</li>
          </ul></div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class AboutMe extends Vue {}
</script>
<style lang="scss" scoped>
.about-me {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  &__avatar {
    flex-basis: 20%;
  }
  &__description {
    flex-basis: 45%;
    &__contact {
      margin-top: 1rem;
    }
  }
  &__education {
    flex-basis: 30%;
  }
}
strong {
  text-decoration: underline;
  color: var(--color-primary);
  text-decoration-color: var(--color-primary);
}
@include media-sm {
  .about-me {
    &__description {
      margin-top: 1rem;
      flex-basis: 100%;
      order: 3;
    }
    &__avatar {
      flex-basis: 35%;
    }
    &__education {
      flex-basis: 60%;
    }
  }
}
@include media-xs {
  .about-me {
    display: block;
    &__avatar {
      margin-bottom: 1rem;
    }
    &__education {
      margin-top: 1rem;
    }
  }
}
</style>
