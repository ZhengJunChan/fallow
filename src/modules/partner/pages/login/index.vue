<!-- [home_page]   @Author: 郑君婵   @DateTime: 2017-09-25 -->
<template>
  <div class="login_page">
    登录页面
  </div>
</template>

<script type="text/javascript">
// import HomeApi from './home-api.js';

// // import { Cell } from 'vux';
// import { Swiper, SongSheetList, MusicianList, MusicList, TopicList, Cell } from '@/components';

// export default {
//     components: {
//         Swiper,
//         Cell,
//         SongSheetList,
//         MusicianList,
//         MusicList,
//         TopicList
//     },
//     data() {
//         return {
//             banner: [],
//             songSheet: {
//                 cate_img: {},
//                 song: []
//             },
//             musicians: {
//                 cate_img: {},
//                 musician: []
//             },
//             musicsList: [],
//             topics: {
//                 cate_img: {},
//                 musician: []
//             }
//         };
//     },
//     created() {
//         this.init();
//     },
//     methods: {
//         init() {
//             HomeApi.getHomeData().then((res) => {
//                 if (res.code !== 200) {
//                     this.$toast.error(res.msg);
//                     return;
//                 }

//                 this.banner = res.data.shuffling || [];      // 轮播列表
//                 this.songSheet = res.data.song || [];        // 推荐歌单
//                 this.musicians = res.data.musician || [];    // 推荐音乐人
//                 this.musicsList = res.data.catemusic || [];   // 分类音乐
//                 this.topics = res.data.topic || [];          // 热门话题
//             }, (error) => {
//                 this.$toast.error(error.msg || '获取数据失败');
//             });
//         }
//     }
// };
</script>

<style lang="less" scoped>
@import './main.less';
</style>
