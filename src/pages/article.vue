<template>
    <div class="article">
        <Navbar  @navBack='triggleLeft' @toggleSidbar="triggleRight"  :title="name" :fixed="isFixed">
            <template v-slot:left>
                <van-icon name="arrow-left"/>
            </template>
        </Navbar>
        <div class="list">
            <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <van-cell
                v-for="item in list"
                :key="item"
                :title="item"
            />
            </van-list>
        </div>
        
        <BackTop></BackTop>
    </div>
</template>

<style lang="scss" scoped>
    .article{
        .list{
            margin-top:46px;
        }
    }
</style>


<script>
import { Toast } from 'vant'
import Navbar from '../components/Navbar'
import BackTop from '../components/BackTop'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    components:{ Navbar, BackTop },
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            name:'文章列表',
            isFixed:true
        };
    },
    methods: {
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 500);
        },
        ...mapActions(['triggleLeft','triggleRight','toggleSidbar']),
    }
}
</script>

