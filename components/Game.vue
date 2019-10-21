<template>
  <b-row >
    <Player v-for="player in playersList" v-bind:playerName="player"
      v-bind:key="player.id" v-model="parentState" :parentState="parentState" @updateState="getPlayerState"/>
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
    }
  },

  components: {
    Player
  },

  watch: {
    parentState: function () {
      if (this.parentState == true)
      this.$confetti.start();
    }
  },

  methods: {
    getPlayerState(state){
      this.parentState = state
      console.log(this.playerName)
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