<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Get in touch</h1>
      <div class="contact">
        <div class="contact__form">
          <div class="control has-icons-left has-icons-right contact__form__input">
            <input class="input" type="email" placeholder="Email" v-model="from_email" @keyup="validateEmail" :style="{borderColor: !emailTouched ? '' : emailErrors.length > 0 ? 'red' : 'green'}"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <div class="control has-icons-left has-icons-right contact__form__input">
            <input class="input" type="name" placeholder="Full Name" v-model="from_name" @keyup="validateName" :style="{borderColor: !nameTouched ? '' : nameErrors.length > 0 ? 'red' : 'green'}"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <div class="control contact__form__textarea">
            <textarea class="textarea" placeholder="Message" v-model="message" @keyup="validateMessage" :style="{borderColor: !messageTouched ? '' : messageErrors.length > 0 ? 'red' : 'green'}" ></textarea>
          </div>
          <div class="contact__form__download-button">
            <button
              :disabled="emailErrors.length > 0 || nameErrors.length > 0 || emailErrors.length > 0 || from_name ==='' || from_email === '' || message === ''"
              id="download"
              class="contact__form__download-button__button button is-rounded"
              @click="sendMail"
            >Send</button>
          </div>
          <div class="contact__form__response">
            <p>{{responseMessage}}</p>
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
              <a href="tel:+2349065195264"></a> +234 906 5195 264
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
  from_name = "";
  from_email = "";
  message = "";
  responseMessage = "";
  emailErrors = [];
  emailTouched = false;
  nameErrors = [];
  nameTouched = false;
  messageErrors = [];
  messageTouched = false;

  validateEmail() {
    this.emailTouched = true;
    this.emailErrors = [];
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!this.from_email) {
      this.emailErrors.push("Email required.");
    }
    if (!regex.test(this.from_email)) {
      this.emailErrors.push("Valid email required.");
    };
  }

  validateName() {
    this.nameTouched = true;
    this.nameErrors = [];
    if (!this.from_name) {
      this.nameErrors.push("Name required.");
    }
  }

  validateMessage() {
    this.messageTouched = true;
    this.messageErrors = [];
    if (!this.message) {
      this.messageErrors.push("Message required.");
    }
  }

  sendMail() {
    const templateParams = {
      from_name: this.from_name,
      from_email: this.from_email,
      message_html: `<div>${this.message}</div>`
    };
    emailjs
      .send(
        "babafemi-portfolio",
        "template_VAKqVYIq",
        templateParams,
        "user_XlAztwVmk5k6747vKi3qX"
      )
      .then(
        response => {
          this.from_name = "";
          this.from_email = "";
          this.message = "";
          this.responseMessage = "SENT!";
          setTimeout(() => (this.responseMessage = ""), 1000);
          console.log("SUCCESS!", response.status, response.text);
        },
        error => {
          this.responseMessage = "FAILED! TRY AGAIN";
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
    &__response {
      p {
        text-align: center;
      }
    }
  }
  &__details {
    flex-basis: 49%;
  }
}
</style>