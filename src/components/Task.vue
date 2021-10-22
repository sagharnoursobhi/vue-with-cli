<template>
    <div @dblclick="$emit('toggle-reminder' , lastProps.id)" :class= "[lastProps.reminder ? 'reminder' : '' , 'text']">
        <h3>
            {{lastProps.text}}
            <i @click= "$emit('first-event' , lastProps.id)" class="far fa-trash-alt"></i>
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
   /* methods:{
       onDelete(id){
           this.$emit('first-event' , id)//first parameter is the first event passed to parent element and the second parameter is the data that we wanna pass from child to parent
       }
   } */
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
    i{
        cursor: pointer!important;
    }
</style>
