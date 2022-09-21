<template>
  <div class="search-container">
    <input id="searchInput" type="text" placeholder="Ім'я гравця" name="search" v-model="search" @input="handleInput">
    <button  type="submit">
      <i class="fa fa-search"></i>
    </button>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import useEmitter from "@/composables/useEmitter";
export default defineComponent({
  name: "SearchComponent",
  setup (){
    const emitter = useEmitter()
    return {
      emitter
    }
  },
  data () {
    return {
      search: ""
    }
  },
  methods: {
    handleInput() {
      console.log(this)
      this.emitter.emit("search", this.search);
    }
  }

})
</script>
<style scoped>

</style>