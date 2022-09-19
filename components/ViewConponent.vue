<template>
    <div :class="$style.ViewContainer">
        <div v-show="!type" :class="$style.ViewItem">
            <h2>{{subject}}</h2>
            <div :class="$style.preView"></div>
        </div>
        <textarea v-show="type" v-model="json" :class="$style.ViewItem">
        </textarea>
    </div>
</template>

<script>
    export default {
        name: "ViewConponent",
        props:["blocks","subject","type"],
        data:function() {
            return{
                text: [],
                json: '',
            }
            
        },
        mounted(){
            this.text = this.blocks;
            this.fillPreView();
        },
        watch:{
            blocks:{
                handler(cur){
                    this.text = [...cur]
                    this.sort()
                },
                deep:true
            }
        },
        methods:{
            sort(){
                this.text.sort(( a, b ) => a.index - b.index);
                this.fillPreView();
            },
            fillPreView(){
                this.json = JSON.stringify(this.text,null,'    ')
                var element = document.querySelector(`.${this.$style.preView}`);
                element.innerHTML = ""
                this.text.forEach(e =>{
                    var value = ''
                    switch (true) {
                        case e.type == "text_on_background" && e.text != null:
                                value = e.text;
                                if (e.is_boldest) {
                                    value = `<b>${value}</b>`;
                                } else{
                                    value = e.text;
                                }
                                value = `<p style="
                                            background: #ccd9ff;
                                            padding: 0.5rem;
                                            border-radius: 0.25rem;
                                        ">${value}</p>`;
                            break;
                        case e.type == "paragraph_header" && e.text != null:
                                if (e.is_boldest) {
                                    value = `<h3><b>${e.text}</b></h3>`;
                                } else{
                                    value = `<h3>${e.text}</h3>`;
                                }
                            break;
                        case e.type == "button" && e.text != null:
                                value = `<button href="${e.action}">${e.text}</button>`;
                            break;
                        case e.type == "paragraph" && e.text != null:
                                value = e.text;
                                e.links.forEach(el=>{
                                    value = value.replace(el.text,`<a href="${el.href}">${el.text}</a>`)
                                })
                                e.boldeable.forEach(el=>{
                                    value = value.replace(el,`<b>${el}</b>`)
                                })
                                value = `<p style="text-align:${e.align}">${value}</p>`;

                            break;
                    
                        default:
                            break;
                    }
                    element.innerHTML  += value
                })
            }
        }
    };
</script>


<style lang="scss" module>
    $shadow:0 2px 5px rgb(0 0 0 / 10%);
    $boldShadow:0 2px 5px rgb(0 0 0 / 30%);
    .ViewContainer{
        margin: auto;
        margin-top: 1rem;
        padding: 1rem;
        background: #e3e3e3;
        .ViewItem{
            padding: 1rem;
            background: white;
            width: 30rem;
            .preView{
                margin: auto;
                button{
                    display: block;
                    padding: 1rem;
                    border-radius: 8px;
                    background-color: #0d4cd3;
                    color: #ffffff;
                    text-decoration: none;
                    margin: auto;
                    border: 0;
                    &:hover{
                        cursor: pointer;
                    }
                }
            }
        }
        textarea{
            height: 35rem !important;
            border-radius: 4px;
            box-shadow:$shadow;
            padding: 0.5rem;
            border: #d3d3d3;
            resize: none;
            height: 5rem;

            &:focus {
                outline: 0;
                box-shadow: $boldShadow;
            }
        }
    }
</style>