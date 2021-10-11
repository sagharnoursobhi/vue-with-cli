<template>
  <div class="container">
    <Header title="Task Tracker"/> 
    <Tasks @last-event= "deleteRowItem" v-bind:tasks = "items"/>  
  </div> 
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
export default {
  name: 'App',
  components: {
   Header,
   Tasks
  },
  methods:{
    deleteRowItem(id1){
      if(confirm('Are you sure ?')){
        this.items = this.items.filter(item => item.id !== id1)
      }
    }
  },
  data(){
    return{
      items: []
    }
  },
  created(){
    this.items = [
      {
        id: '1',
        text: "Doctors Appointment",
        day: 'March 23th at 1 pm',
        reminder: true,
      },

      {
        id: '2',
        text: 'Going to swimming pool',
        day: 'March 25th at 3 pm',
        reminder: false,
      },

      {
        id: '3',
        text: 'Shopping',
        day: 'March 28th at 8 am',
        reminder: true,
      },

      {
        id: '4',
        text: 'Buying concert ticket',
        day: 'May 1st at 1 pm',
        reminder: false,
      }
    ]
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  border: 1px solid rgb(57, 57, 97);
  width: 60%;
  padding: 20px
}
.h1{
  color: blue;
}
.btn{
  border-radius: 5px;
  padding: 7px;
  color: white;
  cursor: pointer;
  border: 0;
}
</style>
