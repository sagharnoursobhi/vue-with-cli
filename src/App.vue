<template>
  <div class="container">
    <Button @toggle-event= "toggleToShowForm" v-bind:text="showTask ? 'Close' : 'Add Task'"
    :btnbackGround="showTask"/>
    <AddTask @add-task="addTask" v-show="showTask"/>
    <Header title="Task Tracker"/> 
    <Tasks @toggle-array= "toggleToFindRow" @last-event= "deleteRowItem" v-bind:tasks = "items"/>
    <!-- <Exercise/> -->
    <input ref="input" type="text" v-model="helloword" @click="selectAll">
  </div> 
</template>

<script>
import AddTask from './components/AddTask.vue'
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import Button from './components/Button.vue'
/* import Exercise from './components/Exercise.vue'; */
/*npm i json-server */
export default {
      name: 'App',
      components: {
        Header,
        Tasks,
        AddTask,
      /*  Exercise */
        Button,

      },

      data(){ //initializing variables
        return{
          items: [],
          a:20,
          b:40,
          num:34,
          showTask:false,
          btn_text: '',
          helloword : 'hello'
        }
      },

      methods:{

        deleteRowItem(id1){
          if(confirm('Are you sure ?')){
            this.items = this.items.filter(item => item.id !== id1)
          /*   const foundedItem = this.items.find(function(item){
              item.id = id1
            });
            this.items.splice(foundedItem , 1);*/
          }
        },
        toggleToFindRow(id){
          this.items = this.items.map(item => 
          item.id === id ? {...item, reminder:!item.reminder} : item
          )
        },
        selectAll(){
          this.$refs.input.select();
        },

        addTask(task){
          this.items = [...this.items, task]
          console.log(this.items)
        },
        toggleToShowForm(){
          this.showTask = !this.showTask;
        },
        async fetchItems(){
          const res = await fetch("api/items");//created api proxy in vue.config file
          const data = await res.json()
          return data
        }
 
      },

/* function toggleToFindRow(id) {=>classical way of finding the row(object) with that id
  const newArray = [];
  
  for (var i = 0; i < this.items.length; i++) {
    let newItem;
    let currentItem = this.items[i];
    
    if (currentItem.id === id) {
      newItem = {
        ...currentItem, 
        reminder: !currentItem.reminder // overwrite existing reminder value
      }
    } else {
      newItem = currentItem
    }
    newArray.push(newItem)
  }
  
  this.items = newArray;
}
 */



      /*beforeCreate(){
        alert('before created')
      }, */

      async created(){
          this.items = await this.fetchItems()
      },
          /*beforeMount() {
        alert('before mount')
      }, */
   /*  mounted(){
        this.myFunction()
        console.log(this.$options.filters.capitalized(this.text))
      },

    beforeUpdate(){
        alert('before update')
      },
      updated(){
        alert('updated')
      }
      
    } */
}



/*Preparing project for deploying = creating dist folder : npm run build
for running: serve -s dis  */
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
      max-width: 70%;
      padding: 20px;
      border-radius: 5px;
      margin: 0 auto;
    }
    .h1{
      color: blue;
    }
    
    </style>
