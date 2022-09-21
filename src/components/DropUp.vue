<template>
  <div class="dropdown">
    <button  class="dropbtn">{{title}}<font-awesome-icon class="chevron" icon="fa-solid fa-chevron-down"/></button>
    <div class="dropdown-content">
      <a @click="handleClick" v-for="(item, i) in items" :key="i" :href=item.link>{{ item.title }}</a>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/variables.scss";
.dropdown-content.open {
  display: block;
}
.dropdown {

  .dropbtn {
    display: flex;
    padding: 20px 24px 17px 24px;
    background-color: transparent;
    color: white;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    border: none;
    cursor: pointer;
    .chevron {
      font-size: x-small;
      align-self: center;
      margin-left: 7px;
    }
  }
  &:hover {
    background-color: #e0e5eb;
    color: #36bae6;
    .dropdown-content {
      display: block;
    }
    .dropbtn {
      background-color: #e0e5eb;
      color: #36bae6;
      transition: 0.14s ease-in-out;
      .chevron {
        transform: rotate(180deg);
        transition: $transition_anim;
        font-size: x-small;
      }
    }
  }
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
      background-color: #e0e5eb;
    }
  }
}
</style>
<script lang="ts">
import {defineComponent} from "vue";
import useEmitter from "@/composables/useEmitter";

export default defineComponent({
  setup (){
    const emitter = useEmitter()
    return {
      emitter
    }
  },
  methods: {
    handleClick() {
      this.emitter.emit("check", false);
    }
  },
  name:"DropUp",
  props: [
    'title', "items"
  ]
})
</script>
