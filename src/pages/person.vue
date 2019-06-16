<template>
    <div class="person">
        <Navbar @navBack='triggleLeft' @toggleSidbar="triggleRight"  :title="name" :fixed="isFixed">
            <template v-slot:left>
                <van-icon name="arrow-left"/>
            </template>
        </Navbar>
        <div id="head">
            <div class='bg blur'></div>
            <div class="header">
                <img :src='photo' alt="" class="photo"/>
                <div class='name'>{{name}}</div>
                <!-- <img :src="label" alt="" class="member"> -->
                <div class="desc">资深前端单身狗</div>
            </div>
        </div> 
        <div class="menu-tab">
            <van-tabs>
                <van-tab v-for="(n, i) in numbers" :title="n.menu" :key="i">
                    <div class="content">
                        {{ n.content }}
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #head{
        position: relative;
        overflow:hidden;
        .bg{
            height:400px;
            width: 100%;
            background: #f00;
            padding-top:20px;
            background: url('http://wx2.sinaimg.cn/large/0076BSS5ly1g3spe6ykq2j30u01904qp.jpg')no-repeat 100% 100%;
            background-size: 100% 100%;
            overflow: hidden;
        }
        .bg.blur{
            -webkit-filter: blur(5px);
            -moz-filter:blur(5px);
            -o-filter: blur(5px);
            -ms-filter: blur(5px);
            filter: blur(30px);
        }
        .header{
            position:absolute;
            left:50%;
            top:50%;
            transform: translate(-50%,-50%);
            .photo{
                display: block;
                width: 170px;
                height: 170px;
                border-radius:50%;
                margin:0 auto;
                border:2px solid #fff;
        
            }
            .name{
                font-size:29px;
                color: #fff;
                font-weight: bold;
                text-align: center;
                margin:20px 0;
            }
            .member{
                display: block;
                width: 156px;
                height: 46px;
                margin:0 auto;
                border-radius:50px;
            }
            .desc{
                color: burlywood;
                text-align: center;
            }
        }
    }
    .person{
        .menu-tab{
            .content{
                padding:15px;
            }
        }
    }

</style>


<script>
import Navbar from '../components/Navbar'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    components:{Navbar },
    data(){
       return{
           name:'个人中心',
           isFixed:true,
           photo:'http://wx2.sinaimg.cn/large/0076BSS5ly1g3spe6ykq2j30u01904qp.jpg',
           label:"http://wx2.sinaimg.cn/large/0076BSS5ly1g3rm1dohpdj318y0u01eg.jpg",
           name:'Yao chen',
           numbers:[
               {
                   menu:'简介',
                   content:'资深的前端搬砖工,毕业于上海东海职业技术学院,计算机应用与技术专业,上的了前端,下的了后端,热爱技术,热爱生活,是一位被前端耽误的后端搬砖工。',
               },
               {
                   menu:'关于',
                   content:'hello陌生人，欢迎访问sunboy.online，博客主体自己写的欢迎来添加友链',
               },
               {
                   menu:'技能',
                   content:'熟悉 JavaScript 语言， 熟练使用 Vue 全家桶,jQuery 等前端框架，熟悉 后端PHP,Java,Python,Node.js，熟悉 数据库，Mysql,SQLServe,Oracle等，熟悉 版本控制工具git,打包工具webpack，parcel等',
               },
               {
                   menu:'爱好',
                   content:'旅游,唱歌,阅读,爬山，游泳，写作',
               },
               {
                   menu:'性格',
                   content:'活泼,开朗，积极向上',
               },
               {
                   menu:'家乡',
                   content:'玉山县位于江西省东北部，属上饶市，东接浙江省开化县、常山县、江山市，南接广丰区，西邻上饶县和信州区，北毗德兴市，东西宽75公里，南北长62公里，面积1728平方公里，总人口62万人。全县辖11个镇、5个乡。历史上是赣浙闽三省的交通要冲，素有“两江锁钥、八省通衢”之称。',
               },
               {
                   menu:'另一半',
                   content:'温柔,可爱,善解人意，人见人爱，花见花开',
               }
            ]
       }
    },
    methods:{
         ...mapActions(['triggleLeft','triggleRight','toggleSidbar']),
    }
}
</script>
