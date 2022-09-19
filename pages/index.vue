import SideMenuComponent from "SideMenuComponent.vue"
import ViewConponent from "ViewConponent.vue"
<template>
    <div :class="$style.Container">
        <ViewConponent :class="$style.viewContainer" :blocks="blocks" :subject="subject" :type="type"></ViewConponent>
        <SideMenuComponent :class="$style.sideMenuContainer" :blocks="blocks" :subject="subject" :type="type" @subjectChange="subjectChange" @typeChange="typeChange"></SideMenuComponent>
    </div>
</template>

<script>
export default {
    name: 'mailConstructor',
    data:function () {
        return {
            subject:"Тема письма",
            blocks:[
                {
                    "type": "text_on_background",
                    "text": "Your quarterly Update",
                    "is_boldest": false,
                    "align": "",
                    "links": [],
                    "boldeable": [],
                    "index": 0,
                },
                {
                    "type": "paragraph",
                    "align": "",
                    "text": "Спонсорство спорадически притягивает инструмент маркетинга. Продуктовый ассортимент синхронизирует отраслевой стандарт, опираясь на опыт западных коллег. Диктат потребителя искажает охват аудитории.",
                    "index": 1,
                    "links": [],
                    "boldeable": [],
                },
                {
                    "type": "paragraph",
                    "align": "",
                    "text": "Интересно отметить, что интеграция регулярно усиливает метод изучения рынка. Медиабизнес стабилизирует продуктовый ассортимент. Позиционирование на рынке изменяет медиавес, повышая конкуренцию.",
                    "links": [
                        {
                            "text": "метод изучения рынка",
                            "href": "#"
                        }
                    ],
                    "index": 2,
                    "boldeable": [],
                },
                {
                    "type": "paragraph",
                    "align": "",
                    "text": "Вход в интерфейс: http://pm.chtp.net",
                    "links": [
                        {
                            "text": "http://pm.chtp.net",
                            "href": "http://pm.chtp.net"
                        }
                    ],
                    "boldeable": [
                        "Вход в интерфейс:"
                    ],
                    "index": 3
                },
                {
                    "type": "paragraph",
                    "align": "",
                    "text": "В соответствии с законом Ципфа, управление брендом трансформирует ролевой рекламный бриф. Опросная анкета синхронизирует баинг и селлинг, оптимизируя бюджеты. Изменение глобальной стратегии поразительно. Позиционирование на рынке концентрирует креативный медиамикс",
                    "index": 4,
                    "links": [],
                    "boldeable": [],
                },
                {
                    "type": "button",
                    "text": "Подтвердить почту",
                    "action": "#",
                    "align": "",
                    "links": [],
                    "boldeable": [],
                    "index": 5
                },
                {
                    "type": "paragraph",
                    "text": "Если у вас есть вопросы о том, как начать работу, напишите нам на адрес help@chtp.net",
                    "align": "center",
                    "links": [
                        {
                            "text": "help@chtp.net",
                            "href": "help@chtp.net"
                        }
                    ],
                    "index": 6,
                    "boldeable": [],
                }
            ],
            type:false,
        }
    },
    methods:{
        typeChange(bool){
            this.type = bool;
        },
        subjectChange(text){
            this.subject = text;

        }

    }
}
</script>

<style lang="scss" module>
    $gray: #b4b4b4;
    body{
        margin: 0;
    }
    html{
        height: -webkit-fill-available;
    }
    
    ::-webkit-scrollbar {
        width: 7px;
        background-color: white;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: $gray;
    }

    ::-webkit-scrollbar-track {
        background-color: white;
    }
    .Container{
        font-family: "Source Sans Pro", sans-serif;
        widows: 100%;
        height: 100%;
        background: white;
        display: flex;
        .sideMenuContainer{
            width: 25%;
        }
    }

</style>