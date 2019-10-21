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

<style>
.row{
  margin: 2% 0;
}
.col-sm{
  padding: 8% 5%;
  text-align: center;
  border: 2px solid #ededed;
  margin: 1% 1%;
}

</style>
