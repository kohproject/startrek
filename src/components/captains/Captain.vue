<template>
    <div class="box__captain">
        <h2>{{Cap.name}}</h2>
        <button @click="voteforMe">Vote for me</button>
        <div>{{Cap.votes}}</div>
    </div>
</template>

<script>
export default {
    name:"box-captain",
    props:['Captain'],
    methods:{
        voteforMe (){
            this.$emit("sendVote",this.Cap.name);
        }
    },
    data(){
        return{
          Cap:this.Captain
        }
    }
}
</script>

<style lang="scss" scoped>
button{
    display: block;
    margin:auto;
}
.box__captain{
    display:block;
    width:250px;
    height:320px;
    border:solid 1px #555;
    background:pink;
    h2{
        font-size:30px;
    }
}
</style>