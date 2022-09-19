<template>
    <div :class="$style.Delete">
        <img src="../assets/trash.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "DeleteBlockComponent",
        data:function(){
            return {
                
            }
        },
        methods:{
        }
    };
</script>

<style lang="scss" module>
    .Delete{
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        margin: 1rem 0rem;
        border-radius: 10px;
        border: dashed;
        border-color: #800000;
        background: #fff1f1;
        &:hover{
            background: #ffd8d8 !important;

        }
        img{
            margin: 0.5rem;
            height: 2rem;
        }
    }
    
</style>