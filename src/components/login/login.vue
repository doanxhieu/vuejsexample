<template>
  <div class="row">
    <h2 class="card-title text-center" :style="styleObj">Login</h2>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
      errorText: null,
      styleObj: {
        color: "red",
        fontSize: "20px"
      }
    };
  },
  methods: {
    login() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.errorText = "Please enter a name!";
      }
    }
  }
};
</script>
<style>
.login {
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>