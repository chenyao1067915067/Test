<template>
    <div class="drawer-widget">
        <div class="popup-widget" :class="{active:isActive}">
            <ul>
                <li>
                    <router-link :to = "{name:'home'}">首页</router-link>
                </li>
                <li>
                    <router-link :to = "{name:'search'}">搜索</router-link>
                </li>
                <li>
                    <router-link :to = "{name:'article'}">文章列表</router-link>
                </li>
                <li>
                   <router-link :to = "{name:'person'}">个人中心</router-link>
                </li>
            </ul>
        </div>
        <div class="mask-widget" :class="{active:isActive}" v-show="show" @click="closeMask"></div>
    </div>
</template>

<style lang="scss" scoped>
    .drawer-widget{
        .popup-widget{
            width:35%;
            position:fixed;
            top:0;
            background: #fff;
            right:0;
            bottom:0;
            z-index:9;
            box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
            transform: translateX(100%);
            transition: all .3s ease;
            ul{
                li{
                    padding:15px 20px;
                }
            }
        }
        .active{
            transform: translateX(0);
        }
        .mask-widget{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom:0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 7;
        }

    }
</style>

<script>

export default {
    props:{
        show:{
            type:Boolean,
            default:false
        },
        isActive:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
         
        }
    },
    methods:{
        closeMask:function(){
            this.$emit('closeSidbar')
        },
    }
}
</script>


