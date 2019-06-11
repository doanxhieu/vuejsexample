<template>
  <div>
    <b-form>
      <b-form-group id="input-group-1" label="Name" label-for="input-1">
        <b-form-input id="input-1" type="text" required placeholder="Enter name..."></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Price" label-for="input-2">
        <b-form-input id="input-2" required placeholder="Enter price"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Quantity" label-for="input-2">
        <b-form-input id="input-2" required placeholder="Enter quantity..."></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="File" label-for="input-group-4">
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
      </b-form-group>
      <div class="mt-3">Selected file: {{file ? file.name +' ('+file.size+' )' :''}}</div>

      <b-button type="submit" variant="success">
        Submit
        <i class="fa fa-save"></i>
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null
    };
  }
};
</script>