<template>
  <b-row >
    <h1 v-if="show" class="playerName">Congrats {{playerName.name}}!</h1>
    <Player v-for="player in playersList" v-bind:playerName="player"
      v-bind:key="player.id" v-model="parentState" :parentState="parentState" @updateState="getPlayerState" @getPlayer="getPlayerName"/>
  </b-row>
</template>

<script>
import Player from '~/components/Player.vue'

export default {

  data(){
    return{
      parentState: false,
      playersList: [
      { id: 0, name: 'Player One' },
      { id: 1, name: 'Player Two' },
      { id: 2, name: 'Player Three' }
      ],
       playerName:'',
       show:false,
    }
  },

  components: {
    Player
  },

  watch: {
    parentState: function () {
      if (this.parentState == true)
      this.show = true
      this.$confetti.start();
    }
  },

  methods: {
    getPlayerState(state){
      this.parentState = state
    },
    getPlayerName(value){
      this.playerName = value
    },
    love() {
      this.$confetti.update({
        particles: [
          {
              type: 'heart',
          },
          {
            type: 'circle',
          },
        ],
        defaultColors: [
          'red',
          'pink',
          '#ba0000'
        ],
      });
    }
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
.playerName{
  position: absolute;
  color:#ed3f77;
  left: 35%;
  z-index: 10;
}

</style>