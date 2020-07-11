<template>
  <div>
    <b-form-select
      v-model="city"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      @change="setCity"
    ></b-form-select>    
  </div>
</template>

<script>
export default {
  name: "CitySelector",  
  data() {
    return {   
      city: "",   
      options: [
        { item: "", name: "Seleccione una Ciudad" },
        { item: "Quilmes", name: "Quilmes" },
        { item: "Bernal", name: "Bernal" },
        { item: "Tokio", name: "Tokio" },
        { item: "Miami", name: "Miami" }
      ]
    };
  },
  methods: {
    setCity() {
      this.$store.dispatch("setCityAction", this.city);
    }
  }
};
</script>