<template>
    <form action="" @submit="onSubmit">
        <div class="add-task">
            <label class="task-lable">Add Task</label>
            <input type="text" v-model="task" name="task" id="" placeholder="Enter task"/>
        </div>
        <div class="add-day-time">
            <label class="task-lable">Add Day & time</label>
            <input type="text" v-model="day" name="day" id="" placeholder="Enter day and time"/>
        </div>
        <div class="add-reminder">
            <label class="task-lable">Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder" id="" placeholder="Enter reminder"/>
        </div>
        <input type="submit" value="Save Task" class="submit-input">
    </form>
</template>

<script>

export default {
    name:'AddTask',
    data(){
        return{
            task: '',
            day: '',
            reminder: false//it is placed in v-model attribute which is like value in javascript
        }
    },

    methods:{
       onSubmit(e){
           e.preventDefault();
           if(!this.task){
                alert('Plz add a task!')
                return
           }
           console.log('test')
           const newTask = {
               id: `${Math.floor(Math.random()*1000)}`,
               text:this.task,
               day:this.day,
               reminder:this.reminder
           }
           console.log(newTask)
           this.$emit('add-task', newTask )
          this.task = '';
          this.day = '';
          this.reminder = false;
       }
    },
   
}
</script>

<style>

    .submit-input{
        cursor: pointer;
        margin-top: 10px;
        background-color:black;
        color: white;
        border: 1px0;
        border-radius: 10px;
        padding: 10px 20px;
    }
</style>