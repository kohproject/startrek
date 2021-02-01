<template>
 <div>
   <NavTop/>
   <h1>Who's you favorite captain</h1>
  <p>Total Number of Votes: <span>{{totalVotes}}</span></p>
    <StarTrekWrapper v-on:updateTotal="displayNumOfVotes" :Captainlist="Captains"/>
 </div>
</template>

<script>
import NavTop from './components/Nav.vue'
import StarTrekWrapper from './components/StarTrekWrapper.vue'

export default {
  name: 'App',
  components: {
    StarTrekWrapper,
    NavTop
  },
 
  data(){
        return {
            vuexitm:null,
            totalVotes:0,
            "Captains":[
                {name:'kirk', votes:0,gender:'male', ship:'enterprise',isMovie:true},
                {name:'pickard',  votes:0,gender:'male', ship:'enterprise2',isMovie:true},
                {name:'janeway',  votes:0,gender:'female', ship:'voyager',isMovie:false},
                {name:'sisko',  votes:0,gender:'male', ship:'deepspace9',isMovie:false}
                ]
            
        }
    },

//  mounted:{
//    this.vuexitm = this.$store.getters.myfirstGetter
//  },
  methods:{
    displayNumOfVotes(num){
      this.totalVotes = this.totalVotes+num;
      this.calculateVotes();
    },
    calculateVotes(){
     var winner =  this.Captains[0];
    
     var newwinner = this.Captains.map(function(){
       return (this.votes > winner.votes) ? this : winner
        
     })

     console.log(newwinner.name);
    }
  }
}
</script>

<style>
body{margin:0px; position: relative; height:100%;}
.flex{
        display:flex;
    }
  .space-between{
    justify-content: space-between;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

