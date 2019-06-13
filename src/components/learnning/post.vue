<template>
  <div class="form-group">
    
    <h3>{{title}}</h3>
    {{items}}
    <input
      type="text"
      :value="value"
    >
    <label for="">{{value}}</label>
  </div>
</template>
<script>
export default {
  props:{
      title: String,
      items: Object,
      value: String
  }
};
</script>