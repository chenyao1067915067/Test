<template>
    <transition name="fade">
        <div class="back-top-widget" :class="{fade}" >
            <span class="back-arrow" @click="backTop">
                <van-icon name="arrow-up" :style="{top:top}"></van-icon>
            </span>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
    .back-top-widget{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: fixed;
        right:20px;
        bottom: 20px;
        z-index: 1000;
        opacity:0;
        transform: translateY(80px);
        transition:all .3s ease;
        .back-arrow{
            margin: 0 0 0;
            padding: 0;
            width: 45px;
            height: 45px;
            line-height: 1;
            color: #909090;
            background-color: #fff;
            border: 1PX solid #f1f1f1;
            border-radius: 50%;
            box-shadow: 0 0 5px rgba(0,0,0,.05);
            cursor: pointer;
            text-align: center;
        }
        
    }
    .fade{
        transform: translateY(0);
        opacity:1;
    }
</style>

<script>

export default {
    name:'backTop',
    components:{},
    data(){
        return {
            top:'16px',
            fade:false,
            scrollHeight:0,
        }
    },
    mounted(){
        window.addEventListener('scroll',this.scrollTop)
    },
    methods:{
        scrollTop(){
            let top = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.scrollHeight = top
            if(top>45){
                this.fade = true
            }
            else{
                this.fade = false
            }
        },
        backTop(){
            let that = this
            let time = setInterval(function(){

                let speed = Math.floor(that.scrollHeight / -5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollHeight + speed
                if(that.scrollHeight === 0){
                    clearInterval(time) 
                }
            },16)
        }
    },
    
}
</script>


