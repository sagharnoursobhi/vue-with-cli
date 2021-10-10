<template>
    <button type="button" @click="onclick()" class="btn" :style="{ background: color }">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props:{
        color: String,
        text: String
    },
    methods:{
        onclick(){
            console.log('click')
        }
    }
}
</script>