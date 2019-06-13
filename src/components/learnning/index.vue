<template>
  <div class="container-fluid">
    <h5>1. xu ly form</h5>
    <div class="form-group">
      <label for></label>
      <input type="checkbox" v-model="checked" placeholder aria-describedby="helpId">
      <small id="helpId" class="text-muted">{{checked}}</small>
    </div>
    <div id="example-3">
      <input type="checkbox" id="com-chien-toi" value="Cơm chiên tỏi" v-model="checkedNames">
      <label for="com-chien-toi">Cơm chiên tỏi</label>
      <br>
      <input type="checkbox" id="dot-bi-xao-toi" value="Đọt bí xào tỏi" v-model="checkedNames">
      <label for="dot-bi-xao-toi">Đọt bí xào tỏi</label>
      <br>
      <input type="checkbox" id="canh-rau-rung" value="Canh rau rừng" v-model="checkedNames">
      <label for="canh-rau-rung">Canh rau rừng</label>
      <br>
      <span>Món đã chọn: {{ checkedNames }}</span>
    </div>

    <post title="Test props component" :items="items" v-model="value"></post>

  </div>
</template>

<script>
import Vue from "vue";
import Post from "./post";
export default {
  props: {
    title: String
  },
  data() {
    return {
      value: "doan hieu",
      checked: true,
      checkedNames: [],
      items: {
        id: 1,
        title: "Duc Tho - Ha Tinh"
      }
    };
  },
  components: {
    Post
  }
};
</script>