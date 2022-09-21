<template>
  <HeaderComponent></HeaderComponent>
  <div class="page-content">
    <div class="first">
      <Model-component
        v-for="(player, i) in filteredProducts"
        :key="i"
        :name="player.name"
        :about="player.about"
        :socials="player.socials"
      >
      </Model-component>
    </div>
  </div>
</template>

<script lang="ts">
import ModelComponent from "@/components/ModelComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {defineComponent, ref} from "vue";
import useEmitter from "@/composables/useEmitter";
export default defineComponent({
  name: "PlayerView",
  setup() {
    const search = ref();
    const emitter = useEmitter()
    return {
      search, emitter
    };
  },
  mounted() {
    this.emitter.on("search", (search: any) => {
      console.log(search)
      this.search = search;
    });
  },
  components: {ModelComponent, HeaderComponent },
  computed: {
    filteredProducts(this: any) {
      const players = [
        {
          name: "P1azrat",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about:
            "Плазрат/Plazrat- створив майнрок. Плазрат, трохи токсичний, але дружелюбна людина. Він єдина людина яка залишилась з початку першого сезону. Він є учасником поселення, в якому вже живуть: Buwni, fortti, Froner.",
        },
        {
          name: "Nazame",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about: "Не надав інформації",
        },
        {
          name: "Froner",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about:
            "Фронер/FRONER_0 - Учасник майнроку з ~20~ трав. 2022 р. Помагав гравцям через інфраструктуру, учасник команди Плазрата, живе в куполі, Якщо перевести на Японську - Арабську - Українську - Німецьку то вийде раб",
        },
        {
          name: "Moiz",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about:
            "Моїз/Moiz7yFish - Учасник МайнРоку з 24 травня 2022 року. Був активним гравцем на першому сезоні. Давав новачкам круті ресурси. Став шишкариком. З'явилося 4 лиця за весь МайнРок. Перший на МайнРоці хто побудував склад в вигляді шишки. Обожнює шишки. Ноут = тостер. Мікро, якість відео і монтажа трохи покращились",
        },
        {
          name: "Meror_box",
          about:
            "Коробки/meror_box- учасник майнрок з {Дата}  він був активним гравцем на першому сезоні, на сьогоднішній день він адмін як і креатив з плазратом, він не вступав ні в які клани на сервері...",
        },
        {
          name: "Memer",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about:
            "Мемер грає з {дата}, гравець, робив веб сайт по майнроку зараз цим займається енд, був сикретним агентом майнроку і зараз займається секретними  проектами зв'язаними з майнрок, немає в коаліціях, на сервері граю по  середньому.",
        },
        {
          name: "Fortti",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about: "Опису не надав",
        },
        {
          name: "Tolyazh",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about: "Опису не надав",
        },
        {
          name: "Buwni",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about: "Опису не надав",
        },
        {
          name: "Kreat1v_",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about:
            "Креатив/kreat1v_- учасник майнрок з {Дата}. Креатив, як можна зрозуміти з ніку - дуже креативна і творча людина. Він багато допомагав з сервером і доволі швидко став адміном. Він є учасником коаліції з секретною назвою, і як відомо в цій коаліції є ще 2 людини, одна з яких - невідома, інша - tolyazh. ",
        },
        {
          name: "END",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about:
            "ЕНД/END - новий учасник майнроку, прибув 30.08.22, розробник сайту. Став активним учасником. Поки що не має нормального дому, натомість є коробка. Вміння - середні, старання - високе.",
        },
        {
          name: "Snappit",
          socials: [
            {name: "telegram", link:"#"},
            {name: "youtube", link:"#"}
          ],
          about: "Опису не надав",
        },
      ];
      const name = this.search;
      if(!name) return players;
      return players.filter(function (p) {
        return p.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
      });
    },
  }
});
</script>

<style lang="scss">
@import "../assets/variables.scss";
.page-content {
  box-sizing: border-box;
  min-height: 560px;
  max-width: $max_header_width;

  margin: 0 auto;
  padding: 1rem 1.5rem;
  float: left;

  h1 {
    margin-top: 1.5rem;
    font-size: 3rem;
    font-weight: 300;
  }

  h2 {
    margin-top: 1.5rem;

    font-size: 1.75rem;
    font-weight: 500;
  }

  p {
    margin-top: 0.75rem;
    line-break: anywhere;
    line-height: 1.25rem;
  }
}

.player-container {
  position: relative;
  left: 0;
  text-align: center;
  display:grid;
}


.player-container h1 {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  text-size-adjust: auto;
  width: 60%;
}

.model {
  padding-top: 3rem;
  width: 50vw;
  margin: 0;
  float: right;
  height: 40vh;
}

.special {
  object-fit: cover;
  object-position: center;
}

.page-content {
  width: 90vw;
}

.player {
  position: relative;
  transition: all 0.5s;
  width: 90vw;
  display: flex;
  z-index: 0;
  padding: 0;
  float: left;
  width: max-content;
}

.player:not(.first) {
  margin-top: 10rem;
}

.player_about {
  font-size: 3vh;
  word-break: normal;
  width: 45vw;
  display: inline-block;
}


@media screen and (max-width:620px) {
  * {
    max-width: 100%
  }

  .player {
    text-align: center;
    display:inline-grid;
    justify-content:center;    position: relative;
    min-width: 90vw;
    margin: 0;
    z-index: 0;
    padding: 0;
  }

  .player:not(.first) {
    margin-top: 10rem;
  }

  .player_about {
    font-size: 3vh;
    word-break: normal;
    width: 100vw;
    text-align: center;
  }

  .model {
    width: 100vw;
    display: inline;
    object-position: center;
  }
}

</style>
