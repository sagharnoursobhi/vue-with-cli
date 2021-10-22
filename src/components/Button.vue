<template>
    <button @click="onClick" :class= "[btnbackGround ? 'greenBack' : 'redBack' , 'btn' ]">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props:{
        text: String,
        btnbackGround:Boolean,
    },
    methods:{
        onClick(){
            this.$emit('toggle-event');
            console.log(this.showTask)
        },
    }
}
</script>

<style>
    .btn{
        border-radius: 5px;
        padding: 10px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 15px;
        border: 0;
    }
    .greenBack{
      background-color: green!important;
    }

    .redBack{
        background-color:red!important;
    }
   
</style>