<template>
  <b-col sm>
    <b-form @submit="onSubmit" >
      <b-form-group id="input-group-2" label="Enter a number between 0 and 100" label-for="input" >
        <transition>
          <p class="guess-result" >{{result}}</p>
        </transition>
        <b-form-input
          id="input"
          v-model="form.input"
          required
          placeholder="Enter a number"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success" :disabled="this.parentState" class="submit-btn">Submit</b-button>
    </b-form>  
  </b-col>
</template>

<script>
import axios from '~/plugins/axios'

  export default {

    data() {
      return {
        form: {
          input: '',
        },
        result: '',
        show: true
      }  
    },

    props:{
      parentState:{
        type: Boolean,
        deafult(){
          return ''
        }
      },
      playerName:{
        type:Object,
         deafult(){
          return ''
        }
      }
    },

    computed:{
      playerResult:{
        get: function(){
          return this.result
        }
      },
      playerState:{
        get: function(){
         if (this.playerResult == 'Bingoo!'){
          return true
         } else { 
          return false
         }
        }
      },
      getPlayerName:{
        get: function(){
          return this.playerName
        }
      }
    },

    methods: {
      async onSubmit(evt) {
        evt.preventDefault()
        let playerGuess = this.form.input
         await axios.get(`/api/result/${playerGuess}`)
         .then((res) => {
           this.result = res.data.guess
         })
         this.form.input =''
         this.$emit('updateState', this.playerState)
         this.$emit('getPlayer', this.playerName)
      },
    }
  }
</script>

<style>

  .submit-btn{
    background-color: #fff;
    color: #28a745;
    transition: all 500ms;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
  .submit-btn:hover{
    box-shadow: 0px 15px 20px #28a745;
    animation: pulse 1s;
    transform: translateY(-5px);
  }
  .guess-result{
    color: #eb3d70;
    font-size: 1.5rem;
  }
 
</style>
