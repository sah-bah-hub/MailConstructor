import BlockComponent from "BlockComponent.vue"
import AddBlockComponent from "AddBlockComponent.vue"
import DeleteBlockComponent from "DeleteBlockComponent.vue"
<template>
    <div :class="$style.MenuContainer">
        <div :class="$style.subjectContainer">
            <label>Тема:</label>
            <input type="text" v-model="text">
        </div>
        <div :class="$style.typeContainer">
            <label>Вид:</label>
            <div>
                Письмо 
                <label class="switch">
                    <input type="checkbox" v-model="viewType">
                    <span class="slider round"></span>
                </label>
                 Json
            </div>
        </div>
        <div :class="$style.blockContainer">
            <BlockComponent v-for="block,idx in blocks" :block="block" :blockArray="blocks" v-bind:key="idx" @dragged="dragged" @sort="sort"></BlockComponent>
        </div>
        <div v-if="!dragging" :class="$style.Addcontainer">
            <AddBlockComponent @addBlock="addBlock"></AddBlockComponent>
        </div>
        <div v-else :class="$style.deletecontainer">
            <DeleteBlockComponent></DeleteBlockComponent>
        </div>
    </div>
</template>

<script>
    import { saveAs } from 'file-saver';
    export default {
        name: "SideMenuComponent",
        props: ["blocks", "subject","type"],
        data: function () {
            return {
                text: "",
                dragging: false,
                viewType: true,
            };
        },
        watch: {
            text(cur) {
                this.$emit("subjectChange", cur);
            },
            viewType(cur){
                this.$emit("typeChange", cur);
            },
            dragging(cur){
                if (cur) {
                    this.closeBlocs();
                }
            }
        },
        created() {
            this.text = this.subject;
            this.viewType = this.type;
        },
        methods:{
            closeBlocs(){
                this.$children.forEach(e => {
                    e.open = false
                });
            },
            sort(){
                this.blocks.sort(( a, b ) => a.index - b.index)
            },
            dragged(cur){
                this.dragging = cur
            },
            addBlock(){
                this.blocks.push({"index":this.blocks.length,"links":[],"boldeable":[],"align": ""})
            }
        }
    };
</script>


<style lang="scss" module>
    $shadow:0 2px 5px rgb(0 0 0 / 10%);
    $boldShadow:0 2px 5px rgb(0 0 0 / 30%);
    .MenuContainer{
        background: lightgray;
        padding: 1rem;
        .typeContainer{
            margin: 1rem 0rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &>div{
                display: flex;
                align-items: center;

            }

        }
        .subjectContainer{
            display: flex;
            justify-content: space-between;
            align-items: center;
            input{
                margin-left: 0.5rem;
                width: -webkit-fill-available;
                border-radius: 4px;
                box-shadow:$shadow;
                padding: 0.5rem;
                border: #d3d3d3;

                &:focus {
                    outline: 0;
                    box-shadow: $boldShadow;
                }
            }
            
        }
    }
    
    :global(.switch) {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 22px;
    }

    :global(.switch input) {display:none;}

    :global(.slider) {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #87f321;
        -webkit-transition: .4s;
        transition: .4s;
    }

    :global(.slider:before) {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    :global(input:checked + .slider) {
        background-color: #2196F3;
    }

    :global(input:focus + .slider) {
        box-shadow: 0 0 1px #2196F3;
    }

    :global(input:checked + .slider:before) {
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
    }

    :global(.slider.round) {
        border-radius: 34px;
    }

    :global(.slider.round:before) {
        border-radius: 50%;
    }
</style>