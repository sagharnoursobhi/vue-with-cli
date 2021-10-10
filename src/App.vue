<template>
  <div class="container">
    <Header title="Task Tracker"/>   
  </div> 
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
   Header
  },
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
