<template>
    <div class="home">
        
        <Navbar @navBack='triggleLeft' @toggleSidbar="triggleRight"  :title="name" :fixed="isFixed">
            <template v-slot:right>
                <van-icon name="bars" :style="{color:activeColor}" />
            </template>
        </Navbar>
        <div class="main">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img :src="image" alt="" class="img">
                </van-swipe-item>
            </van-swipe>
            <div class="list">
                <van-skeleton title :row="6" :loading="loading">
                    <ul v-for="(list, index) in lists" :key="index" @click="goDetail(list.id)" :id="list.id">
                        <div class="item">
                            <li>
                                <span class="title">{{list.title}}</span>
                            </li>
                            <div class="info">
                                <span>{{list.author}}</span>
                                <span>{{list.createTime}}</span>
                            </div>
                        </div>
                    </ul>
                </van-skeleton>
            </div>
        </van-pull-refresh>
        </div>
        <Drawer :show="show" :isActive="isActive" @closeSidbar='toggleSidbar'></Drawer>
        <BackTop></BackTop>
    </div>
</template>

<style lang="scss" scoped>
    .home{
        .main{
            margin-top:45px;
        }
        color: #f00;
        .list{
            background: #fff;
            ul{
                .item{
                    padding: 20px 15px;
                    border-bottom: 1PX solid rgba(178,186,194,.15);
                    li{
                        .title{
                            display: block;
                            color: #2e3135;
                            font-weight: 600;
                            line-height: 1.2;
                            font-size: 16px;
                        }
                    
                    }
                    .info{
                        margin-top:20px;
                        font-size:14px;
                        color: #b2bac2;
                        text-align: right;
                        span{
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
        
    }
    .img{
        width: 100%;
        height: 277px;
    }
</style>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import BackTop from '../components/BackTop'
import Navbar from '../components/Navbar'
import Drawer from '../components/Drawer'
export default {
    components: { Navbar, BackTop, Drawer },
    data(){
        return {
            name:'sunboy',
            activeColor:'',
            images:[
                'http://wx2.sinaimg.cn/large/0076BSS5ly1g3spe6ykq2j30u01904qp.jpg',
                'http://wx4.sinaimg.cn/large/0076BSS5ly1g3sexp3tbgj30xc0ir434.jpg',
                'http://wx2.sinaimg.cn/large/0076BSS5ly1g3rm1dohpdj318y0u01eg.jpg',
                'http://wx1.sinaimg.cn/large/0076BSS5ly1g3roh8bjxmj30sg0hsjxa.jpg'
            ],
            loading: true,
            lists:[
                {
                    id:'1',
                    author:"亚瑟",
                    title:'[现场实录] VueConf 2019 尤雨溪演讲总结',
                    desc:'距离参加 VueConf 第一届大会已经很久了，yubo 的介绍一如既往地有意思 ❤️，是他的努力保持了大会热情的社区氛围！另一个彩蛋就是 Evan You 带了自己的亲人和孩子来到现场，真的是其乐融融！',
                    createTime:'2019-06-08'
                }, 
                {
                    id:'1',
                    author:"妲己",
                    title:'前端面试之JavaScript设计模式',
                    desc:'面向对象编程就是将你的需求抽象成一个对象，然后对这个对象进行分析，为其添加对应的特征（属性）与行为（方法），我们将这个对象称之为 类。 面向对象一个很重要的特点就是封装，虽然 javascript 这种解释性的弱类型语言没有像一些经典的强类型语言(例如C++，JAVA等)有专门的方式用来实现类的封装，但我们可以利用 javascript 语言灵活的特点，去模拟实现这些功能。而在许多大型web项目中国，JavaScript代码的数量已经非常多了，我们有必要将一些优秀的设计模式借鉴到JavaScript中。',
                    createTime:'2019-06-08'
                },
                {
                    id:'1',
                    author:"李信",
                    title:'Javascript实现继承的几种方法',
                    desc:'距离参加 VueConf 第一届大会已经很久了，yubo 的介绍一如既往地有意思 ❤️，是他的努力保持了大会热情的社区氛围！另一个彩蛋就是 Evan You 带了自己的亲人和孩子来到现场，真的是其乐融融！',
                    createTime:'2019-06-08'
                },
                {
                    id:'1',
                    author:"王昭君",
                    title:'git的常用命令',
                    desc:'距离参加 VueConf 第一届大会已经很久了，yubo 的介绍一如既往地有意思 ❤️，是他的努力保持了大会热情的社区氛围！另一个彩蛋就是 Evan You 带了自己的亲人和孩子来到现场，真的是其乐融融！',
                    createTime:'2019-06-08'
                },
                 {
                    id:'1',
                    author:"猪八戒",
                    title:'Javascript之你不懂的闭包',
                    desc:'面向对象编程就是将你的需求抽象成一个对象，然后对这个对象进行分析，为其添加对应的特征（属性）与行为（方法），我们将这个对象称之为',
                    createTime:'2019-06-08'
                }, 
                {
                    id:'1',
                    author:"庄周",
                    title:'webpack之打包原理',
                    desc:'距离参加 VueConf 第一届大会已经很久了，yubo 的介绍一如既往地有意思 ❤️，是他的努力保持了大会热情的社区氛围！另一个彩蛋就是 Evan You 带了自己的亲人和孩子来到现场，真的是其乐融融！',
                    createTime:'2019-06-08'
                },
                {
                    id:'1',
                    author:"刘禹锡",
                    title:'Javascript之enevt loop',
                    desc:'距离参加 VueConf 第一届大会已经很久了，yubo 的介绍一如既往地有意思 ❤️，是他的努力保持了大会热情的社区氛围！另一个彩蛋就是 Evan You 带了自己的亲人和孩子来到现场，真的是其乐融融！',
                    createTime:'2019-06-08'
                },
                 {
                    id:'1',
                    author:"庄周",
                    title:'http网络基础',
                    desc:'距离参加 VueConf 第一届大会已经很久了，yubo 的介绍一如既往地有意思 ❤️，是他的努力保持了大会热情的社区氛围！另一个彩蛋就是 Evan You 带了自己的亲人和孩子来到现场，真的是其乐融融！',
                    createTime:'2019-06-08'
                },
                {
                    id:'1',
                    author:"百里玄策",
                    title:'Javascript之作用域',
                    desc:'距离参加 VueConf 第一届大会已经很久了，yubo 的介绍一如既往地有意思 ❤️，是他的努力保持了大会热情的社区氛围！另一个彩蛋就是 Evan You 带了自己的亲人和孩子来到现场，真的是其乐融融！',
                    createTime:'2019-06-08'
                }
            ],
            isFixed:false,
            isLoading: false
        }
    },

    methods: {
        
        loadData:function(){
            let that = this
            setTimeout( () => {
                that.loading = false
            },1000)
        },
        
        goDetail(id){
            this.$router.push({name:"detail",params:{id}})
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 500);
        },
        ...mapActions(['changeNums','triggleLeft','triggleRight','toggleSidbar']),
        getList(){
            this.$fetch.post('/api/getAllUser').then(function(response){
                console.log(response);
            })
            .catch(function(error){
                console.log(error);
            })
        }
    },
    mounted() {
        this.loadData()
        this.getList()
    },
    computed: {
        ...mapState({ num :state => state.num,show : state => state.show, isActive :state => state.isActive }),
        ...mapGetters(['getNums']),
    },

    beforeRouteLeave(to, from, next){
        this.toggleSidbar()
        next()
    }
}
</script>

