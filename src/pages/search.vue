<template>
    <div class="search">
        <Navbar @navBack='triggleLeft' @toggleSidbar="triggleRight"  :title="name" :fixed="isFixed">
            <template v-slot:left>
                <van-icon name="arrow-left"/>
            </template>
             <div slot="left"><van-icon name="arrow-left" :style="{color:activeColor}" /></div>
        </Navbar>
        <div class="list">
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
                >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </div>
        
        <div class="tags" v-for="(tag, key) in filterTags" :key="key">
             <van-tag round type="danger" size="large">{{tag}}</van-tag>
        </div>
        <div class="nodata" v-show='data'>未搜索到内容</div>
    </div>
</template>
<style lang="scss" scoped>
    .search{
        .tags{
            margin-top:20px;
            span{
                margin-left:10px;
            }
        }
        .nodata{
            margin-top:20px;
            text-align: center;
            font-size: 14px;
        }
        .list{
            margin-top:46px;
        }
    }
</style>


<script>
import { Toast } from 'vant';

import Navbar from '../components/Navbar'

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    components:{Navbar },
    data(){
       return{
           name:'搜索',
           isFixed:false,
           value:null,
           type:['danger','primary','success','default'],
           tags:['html5','css3','jQuery','javascript','mysql','redis','Node.js','java','孙悟空','猪八戒','悟空','悟净','悟能'],
           filterTags:[],
           data:true,
           activeColor:'#f00'
       }
    },
    methods:{
        onSearch:function(){
            let v = this.value;
            
            this.filterTags = this.tags.filter( (tag) => {
                return tag.includes(v)
            })
            if(this.filterTags.length){
                this.data = false
            }
            else{
                this.data = true
            }
            
        },
       
        ...mapActions(['triggleLeft','triggleRight','toggleSidbar']),
    },
    mounted(){

    },
    computed: {
        ...mapState({show : state => state.show, isActive :state => state.isActive })
    }
}   
</script>

