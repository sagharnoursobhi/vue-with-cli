<template>
    <div>
        <input type="number">
        <p>{{caculation}}</p><!-- It does not have any parameters -->
        <p>{{showComputed}}</p>
        <p>{{showMethod(this.text)}}</p>
        <button type="button" @click="showMethod">btn</button>
        <p>{{creatingFormatter(this.num)}}</p>
    </div>
</template>

<script>
export default {

    data(){
        return{
            text:'exercise',
            num:12,
            name:'Stephane',
            lastName: 'Aldered'
        }
    },

    computed:{//it is used to manipulate data on the dom. It doesn't accept any parameters.
    //You don't call it but You reference a computed property just like you would a data property.
        caculation(){
            return this.num / 12 + 13
        },
        showComputed(){
            return this.text
          },

        fullName:{
            getter(){
                return this.name + ' ' + this.lastName
            }
        }
    },

    methods:{//A method is just a function bound to the Vue instance. It will be evaluated when it is explicity called.
        showMethod(){
          this.text = 'showMethod'
          console.log(this.text)//although text is goodbye
        },
        creatingFormatter(number){
            console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
        }
    },


    filters:{//a new object used to create filters on the dom element
        capitalized(text){
          if(!text) return ''
          text = text.toString()
          return text.charAt(0).toUpperCase() + text.slice(1)
          
        },     
    },
}
</script>