<template>
    <h1>Contact Us</h1>
  <form class="vh-100" @submit.prevent="submit" @reset="onReset">
    <div>
      <label>name</label>
      <input v-model="name" />
    </div>

    <div>
      <label>email</label>
      <input v-model="email" />
    </div>

    <div>
      <label>message</label>
      <textarea v-model="message"></textarea>
    </div>

    <button type="submit">submit</button>
    <button type="reset">reset</button>
  </form>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  computed: {
    formValid() {
      const { name, email, message } = this;
      return (
        name.length > 0 &&
        /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
        message.length > 0
      );
    },
  },
  methods: {
    onReset() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
    submit() {
      if (!this.formValid) {
        return;
      }
      if (!localStorage.getItem("messages")) {
        localStorage.setItem("messages", JSON.stringify([]));
      }
      const messages = JSON.parse(localStorage.getItem("messages"));
      const { name, email, message } = this;
      messages.push({
        name,
        email,
        message,
      });
      localStorage.setItem("messages", JSON.stringify(messages));
    },
  },
};
</script>