<template>
    <div class="detail">
        <Navbar  @navBack='triggleLeft' @toggleSidbar="triggleRight"  :title="name" :fixed="isFixed">
            <template v-slot:left>
                <van-icon name="arrow-left"/>
            </template>
        </Navbar>
        <div class="content">
             {{detail}}
        </div>
        <BackTop></BackTop>
    </div>
</template>

<style lang="scss" scoped>
    .detail{
        color: #2e3135;
        .content{
            padding:15px;
            line-height: 2;
            margin-top:46px;
        }
    }
</style>
<script>
import Navbar from '../components/Navbar'
import BackTop from '../components/BackTop'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
   components: { Navbar, BackTop },
   data(){
       return {
           name:'文章详情',
           isFixed:true,
           detail:'距离参加 VueConf 第一届大会已经很久了，yubo 的介绍一如既往地有意思 ❤️，是他的努力保持了大会热情的社区氛围！另一个彩蛋就是 Evan You 带了自己的亲人和孩子来到现场，真的是其乐融融！Chrome DevTools 有约 90 万的周活用户，React 相比有 160 万。Evan 推荐用 Chrome DevTools 来预测 Vue 的项目的真实开发者数据。Vue 有全球化的影响力，在非常多的国家有相应的活动，可以通过 events.vuejs.org 查找。State of JavaScript 2018 年统计说明在前端框架的满意度是第一名（91%），并在 Stack Overflow 的数据里体现是第二受欢迎的前端框架。现在 Vue 有 20 人活跃的开发者，大部分日常工作与 Vue 相关，完全独立运营，而成本主要来自于赞助商，三年来稳步增长。蒋豪群（@sodatea）全职在维护 CLI 及相关工具链。自 2018 年年底有过预告 Vue.js 3.0 的设定目标，其实在今年年初的时候大部分功能已经实现。但同时，在开发的同是也在研究业界最新的方案，Vue 在 3.0 使用了 Proxy 的功能，但是 IE 11 仍然无法支持却有一定市场占有率。Object.defineProperty -> Proxy：Proxy 不需要对原始对象做太多改动，效率更高Virtual DOM 重构：组建的启动速度等比 2.5 快了一倍，生成 VNode 参数一致化。但是还是可以做的更好，Virtual DOM 的目的并非只是速度，其核心价值在于用 JavaScript 表达 DOM 状态，因此它本身其实是有成本的。即每次更新时， vdom 树需要每次都重新建立，因此传统的 vdom 是有性能瓶颈。而这背后的原因是 vdom 最早是由 JSX 写的表达逻辑（灵活性），而非是模版语言，因此不能通过模版内容推测一些信息'
       }
   },
   mounted(){
       
   },
   methods:{
        ...mapActions(['triggleLeft','triggleRight','toggleSidbar']),
   }
}
</script>

