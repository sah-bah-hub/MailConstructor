<template>
    <div :class="$style.Add" @click="$emit('addBlock')">
        <img src="../assets/plus.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "AddBlockComponent",
        data:function(){
            return {
                
            }
        },
        methods:{
        }
    };
</script>

<style lang="scss" module>
    .Add{
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        margin: 1rem 0rem;
        border-radius: 10px;
        border: dashed;
        border-color: #008000;
        background: #f9fff1;
        &:hover{
            background: #dfffb6;
        }
        img{
            margin: 0.5rem;
            height: 2rem;
        }
    }
    
</style>