<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Get in touch</h1>
      <div class="contact">
        <div class="contact__form">
          <div class="control has-icons-left has-icons-right contact__form__input">
            <input class="input" type="email" placeholder="Email" v-model="from_email"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <div class="control has-icons-left has-icons-right contact__form__input">
            <input class="input" type="name" placeholder="Full Name" v-model="from_name" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <div class="control contact__form__textarea">
            <textarea class="textarea" placeholder="Message" v-model="message"></textarea>
          </div>
          <div class="contact__form__download-button">
            <button
              id="download"
              class="contact__form__download-button__button button is-rounded"
              @click="sendMail"
            >Send</button>
          </div>
        </div>
        <span class="contact__details">
          <ul class="contact__details__lists">
            <strong>Contact:</strong>
            <li>
              <icon-mail :width="25" :height="25" iconName="mail"></icon-mail>
              <a href="mailto:Phemmylekan@gmail.com">Phemmylekan@gmail.com</a>
            </li>
            <li>
              <icon-mobile :width="25" :height="25" iconName="mobile"></icon-mobile>
              <a href="tel: +2449065195264"></a> +234 906 5195 264
            </li>
            <li>
              <icon-location :width="25" :height="25" iconName="location"></icon-location>106 Victoria Street, Ojota, Lagos, Nigeria
            </li>
          </ul>
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { IconMail, IconMobile, IconLocation } from "@/components/icons";
import axios from "axios";
import emailjs from "emailjs-com";

@Component({
  components: {
    iconMail: IconMail,
    iconMobile: IconMobile,
    iconLocation: IconLocation
  }
})
export default class Contact extends Vue {
  from_name = '';
  from_email = '';
  message = '';
  sendMail() {
    const templateParams = {
      from_name: this.from_name,
      from_email: this.from_email,
      message_html: `<div>${this.message}</div>`
    };
    emailjs.send("babafemi-portfolio", "template_VAKqVYIq", templateParams, 'user_XlAztwVmk5k6747vKi3qX').then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function(error) {
        console.log("FAILED...", error);
      }
    );
  }
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: space-between;
  &__form {
    flex-basis: 49%;
    &__input {
      margin-bottom: 1rem;
      input {
        background-color: var(--bg);
        border: 1px solid var(--bg-secondary);
        &::placeholder {
          color: var(--color-primary);
          font-family: "latoRegular";
        }
      }
    }
    &__textarea {
      margin-bottom: 1rem;
      textarea {
        background-color: var(--bg);
        border: 1px solid var(--bg-secondary);
        padding-left: 2.5em;
        padding-right: 2.5em;
        &::placeholder {
          color: var(--color-primary);
          font-family: "latoRegular";
        }
      }
    }
    &__download-button {
      margin-top: 3rem;
      &__button {
        font-size: 0.895rem;
        background-color: var(--color-primary);
        border-color: transparent;
        color: var(--color-secondary);
        padding-right: 2rem;
        padding-left: 2rem;
        &:hover,
        &:focus {
          color: var(--color-secondary);
        }
      }
    }
  }
  &__details {
    flex-basis: 49%;
  }
}
</style>