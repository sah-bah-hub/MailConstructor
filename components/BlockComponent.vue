<template>
    <div :class="$style.blockContainer">
        <div :class="$style.header">
            <div>
                <img src="../assets/Hamburger.svg" :class="$style.dragIco" @mousedown="drag($event)">
                <p>{{block.text ? block.text : 'Без текста'  }}</p>
            </div>
            <img src="../assets/downArrow.svg" :class="$style.arrow" :style="open ? 'transform: rotate(180deg);' :'' " @click="open = !open">
        </div>
        
        <div v-if="open"  :class="$style.body" >
            <div :class="$style.typeContainer">
                <label for="type"> Тип Блока:</label>
                <select name="type" :value="block.type" v-model="block.type">
                    <option value="text_on_background">Текст на подложке</option>
                    <option value="paragraph">Параграф</option>                    
                    <option value="paragraph_header">Параграф заголовок</option>
                    <option value="button">Кнопка</option>
                </select>
            </div>
            <textarea name="" v-model="block.text"></textarea>
            <div v-if="block.type == 'paragraph'">
                
                <div :class="$style.alingContainer">
                    <label for="align"> Тип Блока:</label>
                    <select name="align" :value="block.align" v-model="block.align">
                        <option value="left">left</option>
                        <option value="center">center</option>                    
                        <option value="right">right</option>
                    </select>
                </div>
                <div :class="$style.linkContainer">
                    <div :class="$style.addBtnLinkContainer">
                        <label>Добавить ссылку:</label>
                        <div :class="$style.addLinkBtn" @click="addLink">
                            <img src="../assets/plus.svg" alt="">
                        </div>
                    </div>
                    <div v-for="link,idx in block.links" v-bind:key="block.index+'link'+idx" :class="$style.link">{{idx+1}})
                        <input type="text" v-model="link.href" placeholder="ссылка" title="ссылка">
                        <input type="text" v-model="link.text" placeholder="текст" title="текст">
                        <div :class="$style.deleteLinkBtn" @click="deleteLink(idx)">
                            <img src="../assets/trash.svg" alt="">
                        </div>
                    </div>
                </div>
                <div :class="$style.boldContainer">
                    <div :class="$style.addBtnLinkContainer">
                        <label>Добавить bold выделение:</label>
                        <div :class="$style.addLinkBtn" @click="addBold">
                            <img src="../assets/plus.svg" alt="">
                        </div>
                    </div>
                    <div v-for="bold,idx in block.boldeable" v-bind:key="block.index +'bold'+ idx" :class="$style.bold">
                        {{idx+1}})
                        <input type="text" v-model="block.boldeable[idx]" placeholder="текст" title="текст">
                        <div :class="$style.deleteBoldkBtn" @click="deleteBold(idx)">
                            <img src="../assets/trash.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="block.type == 'text_on_background' || block.type == 'paragraph_header'" :class="$style.is_boldest">
                <input :id="block.text + 'is_boldest'" type="checkbox" v-model="block.is_boldest"><label :for="block.text + 'is_boldest'">Выделить жирным</label>
            </div>
            <div v-else-if="block.type == 'button'" :class="$style.btnUrl">
                <label>Действие:</label><input type="text" v-model="block.action">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlockComponent",
        props:["block","blockArray"],
        data:function(){
            return {
                open: false
            }
        },
        methods:{
            addLink(){
                this.block.links.push({"text":'',"href":''})
            },
            addBold(){
                this.block.boldeable.push('')
            },
            deleteBold(index){
                this.block.boldeable.splice(index,1)
            },
            deleteLink(index){
                this.block.links.splice(index,1)
            },
            between(value,minValue,maxValue){
                if (value > minValue && value < maxValue) {
                    return value;
                }
                var newValue = value
                if (value < minValue) {
                    newValue = minValue
                }
                if (value > maxValue) {
                    newValue = maxValue
                }
                return newValue;
            },
            drag(event){
                event.preventDefault();
                this.open = false; 
                var it = this;
                var dragStartY = event.pageY;
                var moveY = 0;
                var element = event.path.find(x => x.classList.contains(it.$style.blockContainer));

                var parentElement = element.parentElement;
                var blocsElements = [...parentElement.childNodes]; 
                var length = blocsElements.length;
                var index = blocsElements.indexOf(element);
                var newIndex = 0;
                var deleting = false;
                it.$emit("dragged",true)
                element.classList.add(it.$style.dragging);
                function mouseUp(e) {
                    window.removeEventListener('mousemove', mouseMove, false);
                    window.removeEventListener('mouseup', mouseUp, false);
                    element.classList.remove(it.$style.dragging);
                    it.$emit("dragged",false)
                    blocsElements.forEach(e => {
                        e.style.transform = "";
                        e.style.transition = "";
                        e.childNodes[0].style.background = "";
                    })
                    
                    
                    it.$emit('sort');
                    it.blockArray.forEach((el,index) => {
                        el.index = index; 
                    });

                    setTimeout(()=>{blocsElements.forEach((e) =>{ e.style.transition = ""})},1)
                    if (deleting) {
                        it.blockArray.splice(length-1,1);
                    }
                }
                function mouseMove(e) {
                    var parentHeight = parentElement.offsetHeight;
                    var elementHeight = parentHeight / length;
                    var maxMove = parentHeight - (elementHeight * (index));
                    var minMove = ((elementHeight * index) * -1)*1.025;
                    moveY = it.between(e.pageY - dragStartY, minMove, maxMove);                    

                    var elementOffsetIndex = Math.round(moveY / elementHeight);
                    newIndex = it.between(elementOffsetIndex + index ,0 ,length-1);
                    blocsElements[newIndex].style.transform = `translateY(${(it.between(elementOffsetIndex, -1 , 1) * elementHeight)*-1}px)`
                    switch (true) {
                        case elementOffsetIndex == 0:
                            blocsElements.forEach((el) =>{
                                if (el != element) el.style.transform = "";
                            })
                            break;
                        case newIndex < index:
                            for (let i = 0; i < newIndex; i++) {
                                var el = blocsElements[i];
                                if (el.style.transform != "") {
                                    el.style.transform = "";
                                }                             
                            }
                            break;
                        case newIndex > index:
                            for (let i = length -1 ; i > newIndex; i--) {
                                var el = blocsElements[i];
                                if (el.style.transform != "") {
                                    el.style.transform = "";
                                }                             
                            }
                            break;
                    }
                    if (elementOffsetIndex + index ==   length) {
                        element.childNodes[0].style.background = "#ffdddd";
                        deleting = true;
                    } else{
                        element.childNodes[0].style.background = "";
                        deleting = false;
                    }
                    element.style.transform = `translateY(${moveY}px)`;
                    
                    it.blockArray[index].index = newIndex > index ?newIndex + 0.5 :newIndex - 0.5
                }
                window.addEventListener('mousemove', mouseMove, false);
                window.addEventListener('mouseup', mouseUp, false);
            }
        }
    };
</script>

<style lang="scss" module>
    $shadow:0 2px 5px rgb(0 0 0 / 10%);
    $boldShadow:0 2px 5px rgb(0 0 0 / 30%);
    .dragging{
        transition: 0s!important;
        box-shadow: $boldShadow;
        z-index: 3!important;
    }
    .blockContainer{
        background: #fafafa;
        margin: 1rem 0rem;
        border-radius: 5px;
        .header{
            padding: 0rem 0.5rem;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: white;
            box-shadow: $shadow;
            transition: 0.2s;
            .dragIco{
                cursor: grab;
            }
            .arrow{
                cursor: pointer;
                transition: 0.3s;
            }
            & > div{
                display: flex;
                align-items: center;
                width: 90%;
                
                p{
                    margin-left: 0.5rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
        .body{
            margin: 0rem 0.5rem;
            &>* {
                margin: 0.3rem 0rem;
            }
            .typeContainer{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .alingContainer{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .addBtnLinkContainer{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .addLinkBtn{
                    border: solid 1px;
                    display: flex;
                    justify-content: space-around;
                    cursor: pointer;
                    border-color: #008000;
                    background: #f9fff1;
                    border-radius: 5px;
                    &:hover{
                        background: #dfffb6;
                    }
                    img{
                        margin: 0.3rem;
                    }
                }
            }
            .btnUrl{
                display: flex;
                justify-content: space-between;
                align-items: center;
                input{
                    border: 0;
                    padding: 0.5rem;
                    box-shadow: $shadow;
                    border-radius: 4px;
                    background: #fffefb;
                    width: 70%;
                    &:focus {
                        outline: 0;
                        box-shadow: $boldShadow;
                    }

                }

            }
            .linkContainer{
                .link{
                    margin: 0.5rem 0rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;                        
                    input{
                        border: 0;
                        padding: 0.5rem;
                        box-shadow: $shadow;
                        border-radius: 4px;
                        background: #fffefb;
                        width: 40%;
                        &:focus {
                            outline: 0;
                            box-shadow: $boldShadow;
                        }
                    }
                    .deleteLinkBtn{
                        border: solid 1px;
                        display: flex;
                        justify-content: space-around;
                        cursor: pointer;
                        border-color: #800000;
                        background: #fff1f1;
                        border-radius: 5px;
                        &:hover{
                            background: #ffd8d8;
                        }
                        img{
                            margin: 0.1rem;
                            width: 1rem;
                        }
                    }
                }
            }
            .boldContainer{
                .bold{
                    margin: 0.5rem 0rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    input{
                        border: 0;
                        padding: 0.5rem;
                        box-shadow: $shadow;
                        border-radius: 4px;
                        background: #fffefb;
                        width: -webkit-fill-available;
                        &:focus {
                            outline: 0;
                            box-shadow: $boldShadow;
                        }
                    }
                    .deleteBoldkBtn{
                        border: solid 1px;
                        display: flex;
                        justify-content: space-around;
                        cursor: pointer;
                        border-color: #800000;
                        background: #fff1f1;
                        border-radius: 5px;
                        &:hover{
                            background: #ffd8d8;
                        }
                        img{
                            margin: 0.1rem;
                            width: 1rem;
                        }
                    }
                }

            }
            select{
                border: 0;
                padding: 0.5rem;
                box-shadow: $shadow;
                border-radius: 4px;
                background: #fffefb;
                &:focus {
                    outline: 0;
                    box-shadow: $boldShadow;
                }
            }
            
            textarea{
                width: -webkit-fill-available;
                // margin: 0rem 0.5rem;
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
        img{
            
            margin: 0.5rem 0rem;
            height: 1.5rem;
        }
    }
</style>