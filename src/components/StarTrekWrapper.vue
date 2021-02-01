<template>
    <div class="flex space-between wide1400">
        <BoxCaptain v-for="CItem in Captains" v-on:sendVote="registerVote" :key="CItem.name" :Captain="CItem"/>
    </div>
</template>

<script>
//import {mapGetters} from 'Vuex'
import BoxCaptain from './captains/Captain.vue'
//import _ from 'lodash'

export default {
    name:"star-trek-wrapper",
    components:{
        BoxCaptain
    },
    props:["Captainlist"],
 
    methods:{
        registerVote(name){
            this.Captains.map((obj)=>{
                if(obj.name === name){
                    obj.votes++;
                }
            });
            this.$emit('updateTotal',1);
        }
    },
    data(){
        return {
            "Captains":this.Captainlist
        }
    }
}
</script>

<style lang="scss">
.wide1400{
    width:1400px;
    margin:auto;
}
</style>