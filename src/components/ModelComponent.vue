<template>
  <div class="player">
  <div class="player-container">
    <h1 class="username">{{name}}</h1>
    <img v-if="isFortti(name)" class="model special" src="/assets/images/Fortti.png" alt="Fortti">
    <model-viewer v-else class="model" src="assets/player.glb" :variantName="name" disable-pan camera-controls
                  shadow-intensity="1" auto-rotate disable-zoom>
      <div class="progress-bar hide" slot="progress-bar">
      <div class="update-bar"></div>
      </div>
    </model-viewer>
    <div class="socials">
      <a :href="social.link" v-for="(social, i) in socials" :key="i" ><i :class="`fa fa-` + social.name.toLowerCase()"></i></a>
    </div>
  </div>
  <div class="player_about ">{{about}}
  </div>
  </div>
</template>
<script lang="ts">
interface SocialT {
  link: string,
  name: string
}
 export default {
   name: "ModelComponent",
   props: {
     name: String,
     about: String,
     socials: [] as SocialT[]
   },
   methods: {
     isFortti(name: string) {
       if (name === "Fortti") {
         return true;
       } else return false;
     }
   },
 }
</script>

<style>
.socials {
  position: relative;
  display: inline;
  text-align: center;
}

.socials a {
  width: 35px;
  height: 35px;
  margin: 3px;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  justify-self: center;
  text-align: center;
  line-height: 35px;
  transition: all .25s;
}
</style>
