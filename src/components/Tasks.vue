<template>
    <div :key= "item.id" v-for= "item in tasks">
        <Task @toggle-reminder="$emit('toggle-array',item.id)"  @first-event = "$emit('last-event' , item.id)"  v-bind:lastProps = "item" />
    </div>
</template><!-- each time we should use a new emit method to pass the parameter one level up-->

<script>
import Task from './Task.vue'
export default{
   name: 'Tasks',
    components:{
        Task
    },
   props:{
       tasks: Array,
   },
    emits:['last-event' , 'toggle-array']//get rid of warning of add listenner

}
</script>
