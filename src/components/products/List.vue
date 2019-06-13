<template>
  <div>
    <div class="form-group">
      <router-link to="/products/add" class="btn btn-primary">
        Add
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
    <b-table
      :striped="striped"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :fields="fields"
    ></b-table>
  </div>

  <!-- <ul>
      <li v-for="(p, index) in items">{{index}}_{{p.title}}</li>
  </ul>-->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      page: 10,
      products: [],
      error: [],
      // attr table
      striped: true,
      borderless: false,
      outlined: false,
      small: false,
      hover: true,
      dark: true,
      fixed: false,
      footClone: false,
      // Note 'age' is left out and will not appear in the rendered table
      fields: {
        stt: {
          label: "STT",
          sortable: true
        },
        name: {
          label: "Name",
          sortable: false
        },
        image: {
          label: "Image",
          sortable: false
        },
        price: {
          key: "Price",
          label: "Price",
          sortable: true
        },
        quantity: {
          label: "Quantity",
          sortable: true
        }
      },
      items: []
    };
  },
  methods: {
    loadList() {
      let url = "http://jsonplaceholder.typicode.com/posts";
      // axios
      //   .get(url)
      //   .then(response => {
      //     this.products = response.data;
      //     this.items = response.data;
      //     console.log(this.products);
      //   })
      //   .catch(e => {
      //     if (e.response) {
      //       console.log(e.response.headers);
      //     } else if (e.request) {
      //       console.log(e.request);
      //     } else {
      //       console.log(e.message);
      //     }
      //     console.log(e.config);
      //   });
    }
  },
  created() {
    this.loadList();
  }
};
</script>

