<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o"><router-link :to="{name:'home'}">首页</router-link> </van-tabbar-item>
        <van-tabbar-item icon="search"><router-link :to="{name:'search'}">搜索</router-link></van-tabbar-item>
        <van-tabbar-item icon="friends-o"><router-link :to="{name:'article'}">文章</router-link></van-tabbar-item>
        <van-tabbar-item icon="setting-o"><router-link :to="{name:'person'}">个人中心</router-link></van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    name:'tabbar',
    data(){
        return {
            active:0
        }
    }
}
</script>

