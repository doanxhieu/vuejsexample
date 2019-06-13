<template>
  <div class="row">
    <div class="col-md-12 col-xs-12 col-lg-12">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import List from "./List";
export default {
  components: {
    List
  }
};
</script>

