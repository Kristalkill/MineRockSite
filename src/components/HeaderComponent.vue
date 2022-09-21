<style lang="scss">
@import '../assets/variables';
header {
  top: 0;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background: url(/assets/images/BigImage.jpg) no-repeat fixed 50% 50%;

  .container {
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 1;
    transform: translateX(0);
    transition: 1s;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    padding: 0 1.5rem;
    margin: 0 auto;
    border-bottom: 1px solid #e0e5eb;
    >.logo {
      img {
        padding-top: 0.2rem;
        width: 3.5rem;
        color: white;
        clip-path: circle();
      }
    }
    ul {
      background: rgba(0, 0, 0, 0.8);
      position: relative;
      z-index: 2;
    }
    .hamburger-button {
      &:checked {
        ~ {
          label {
            >div {
              width: 0;
              background: rgba(255, 255, 255, 0);
              &::before {
                transform: rotateZ(45deg);
                top: -0rem;
              }
              &::after {
                transform: rotateZ(-45deg);
                top: -0rem;
              }
            }
          }
          .menu {
            left: 0;
            transform: translateX(0);
          }
        }
      }
    }
    .menu {
      position: absolute;
      top: 3.5rem;
      left: calc(-100vw - 3rem);
      transform: translateX(calc(-100vw - 3rem));
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, max-content);
      width: 100%;
      background: $color_background;
      transition: 0.22s ease-in-out;
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        height: 100vh;
        width: 100vw;
        background: $color_background;
      }
      nav {
        grid-area: auto;
        ul {
          display: flex;
          flex-direction: column;
          >li {
            >a {
              box-sizing: border-box;
              width: 100%;
              padding: 1rem 1.5rem;
              text-align: left;
              color: white;
              transition: 0.14s ease-in-out;
              &:hover {
                color: #36bae6;
                background: $color_background_alt;
              }
            }
          }
        }
      }
      div.buttons {
        grid-area: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0.5rem 1rem;
        border-top: 1px solid #e0e5eb;
        background: $color_background;
        >* {
          flex: 1;
          min-width: min-content;
          margin: 0.5rem;
        }
      }
    }
  }
  .container.black {
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
}
.search-container {
  padding: calc(1.25rem - 6px) 1.5rem;
  button {
    background: #ddd;
    cursor: pointer;
    float: right;
    position: absolute;
    padding: 6px;
    font-size: 17px;
    border: none;
  }
}
input[type="text"] {
  padding: 6px;
  font-size: 17px;
  border: none;
  outline: none;
  border-radius: 1.2%;
}
input.hamburger-button {
  display: none;
  ~ {
    label {
      position: relative;
      padding: 0.25rem;
      width: 1.5rem;
      height: 1.25rem;
      >div {
        content: "";
        position: absolute;
        top: 0.825rem;
        height: 0.125rem;
        width: 1.5rem;
        opacity: 1;
        background: $color_text;
        transition: 0.14s ease-in-out;
        &::before {
          content: "";
          position: absolute;
          top: 0.825rem;
          height: 0.125rem;
          width: 1.5rem;
          opacity: 1;
          background: $color_text;
          transition: 0.14s ease-in-out;
          top: -0.5rem;
        }
        &::after {
          content: "";
          position: absolute;
          top: 0.825rem;
          height: 0.125rem;
          width: 1.5rem;
          opacity: 1;
          background: $color_text;
          transition: 0.14s ease-in-out;
          top: 0.5rem;
        }
      }
    }
  }
}
@media only screen and (min-width: $breakpoint_tablet) {
  header {
    height: 100vh;
    border-bottom: 1px solid #e0e5eb;
    .container {
      left: 50%;
      transform: translate(-50%, 0);
      justify-content: flex-start;
      border: none;
      >.logo {
        img {
          padding-top: 0.5rem;
          width: 3rem;
          color: white;
          clip-path: circle();
        }
      }
      .menu {
        top: 0;
        left: 0;
        transform: translateX(0);
        display: grid;
        grid-template-columns: auto max-content;
        grid-template-rows: 3.5rem 3rem;
        background: none;
        transition: none;
        &::after {
          display: none;
        }
        div.buttons {
          grid-area: 1/2/2/3;
          box-sizing: border-box;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0;
          margin: 0;
          border: none;
        }
        nav {
          grid-area: 2/1/3/3;
          ul {
            flex-direction: row;
            justify-content: center;
            >li {
              flex: 1;
              >a {
                display: inline-block;
                width: 100%;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  input.hamburger-button {
    ~ {
      label {
        display: none;
      }
    }
  }
}
@media only screen and (min-width: $breakpoint_desktop) {
  header {
    height: 100vh;
    .container {
      background: $color_background;
      ul {
        background: $color_background;
      }
      .menu {
        box-sizing: border-box;
        grid-template-columns: 4rem auto max-content;
        grid-template-rows: 1fr;
        height: 3.5rem;
        padding: 0 1.5rem;
        transition: none;
        nav {
          grid-area: 1/2/2/3;
          ul {
            align-items: flex-start;
            justify-content: flex-end;
            height: 100%;
            width: 100%;
            >li {
              flex: 0;
              >a {
                width: max-content;
                padding: 1.25rem 1.5rem;
              }
            }
          }
        }
        div.buttons {
          grid-area: 1/3/2/4;
          >* {
            min-width: max-content;
          }
        }
      }
    }
  }
}
</style>
<template v-model="search">
  <header>
  <div class="container" ref="container">
    <div class="logo">
      <img src="/assets/images/Logo.png">
    </div>
    <input class="hamburger-button" type="checkbox"  id="hamburger-button" v-model="checked"/>
    <label for="hamburger-button">
      <div></div>
    </label>
    <div class="menu">
      <nav>
        <ul>
          <li>
            <DropUp title="MineRock" ref="link" :items="services"></DropUp>
          </li>
          <li>
            <a @click="checkedOff" ref="link1" href="/">Учасники</a>
          </li>
          <li>
              <Search-component></Search-component>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  </header>
</template>
<script lang="ts">
import DropUp from "@/components/DropUp.vue";
import {defineComponent, ref} from "vue";
import SearchComponent from "@/components/SearchComponent.vue";
import useEmitter from "@/composables/useEmitter";

export default defineComponent({
  name: "HeaderComponent",
  components: {SearchComponent, DropUp},
  setup() {
    const container = ref()
    const checked = ref(false)
    const emitter = useEmitter()
    return {
      container,
      emitter,
      checked
    }
  },
  data () {
    return {
      services: [
          {
            title: "MineRock Hardcore",
            link: "#"
          },
          {
            title: "MineRock Renewed",
            link: "#"
          },
          {
            title: "MineRock Live",
            link: "#"
          }

      ],
      search: ""
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    this.emitter.on("check", (check: any) => {
      this.checked = check;
    });
  },
  methods: {
    handleScroll(){
      if (window.scrollY > (window.screen.height * 0.80)) {
        this.container.classList.add("black")
      } else {
        this.container.classList.remove("black")
      }
    },
    checkedOff() {
      this.checked = false
    }
  }
})


</script>