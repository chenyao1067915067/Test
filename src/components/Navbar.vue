<template>
    <van-nav-bar fixed >   
        <div slot="left" @click="onClickLeft">
            <slot name="left"></slot>
        </div>
        <div slot="title">{{title}}</div>
        <div slot="right" @click="onClickRight">
            <slot name="right"></slot>
        </div>
    </van-nav-bar>
</template>
<style lang="scss" scoped>

</style>


<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        fixed:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
           
        }
    },
    methods: {
        onClickLeft() {
            this.$emit('navBack')
        },
        onClickRight() {
            this.$emit('toggleSidbar')
        }
    }
}
</script>
