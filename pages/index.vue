<template>
  <b-container>
    <Banner />
    <Game />
  </b-container>
</template>

<script>
import Banner from '~/components/Banner.vue'
import Game from '~/components/Game.vue'

export default {
  components: {
    Banner,
    Game
  }
}
</script>

