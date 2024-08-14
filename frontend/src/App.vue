<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { api } from "src/boot/axios";

export default defineComponent({
  name: "App",
  mounted() {
    api.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
  },
});
</script>
