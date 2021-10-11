<template>
    <div :class= "[lastProps.reminder ? 'reminder' : '' , 'text']">
        <h3>
            {{lastProps.text}}
            <i @click= "onDelete(lastProps.id)" class="far fa-trash-alt"></i>
        </h3>
        <p>{{lastProps.day}}</p>
    </div>
</template>

<script>

export default {
   name: 'Task',
   props:{
       lastProps: Object
   },
   methods:{
       onDelete(id){
           this.$emit('first-event' , id)//first parameter is the name of parent element and the second parameter is the data that we wanna pass from child to parent
       }
   }
}
</script>

<style scoped>
    .text{
        color: rgb(12, 71, 12);
        background-color: lightgrey;
    }
    .reminder{
        border-left: 3px solid rgb(12, 71, 12);
    }
    .far{
        cursor: pointer;
    }
</style>
