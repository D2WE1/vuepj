<template>
    <div >
        <!-- 顶部滑动条区域 -->
        <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item',item.id==0? 'mui-active':'']" @tap="getPhotoListByCateId(item.id)" v-for="item in cates" :key="item.id">
                    {{item.title}}
                </a>
            </div>
        </div>


        <!-- 图片区域列表 -->
        <ul class="photo-list" >
            <router-link v-for="item in list" :to="'/home/photos/'+item.id" tag="li" :key="item.id">
              <img v-lazy="item.img_url">
              <div class="info">
                <h3 class="info-title">{{ item.title }}</h3>
                <div class="info-body"> {{item.zhaiyao}} </div>
              </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min";

export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  methods: {
    getAllCategory() {
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
    },
    getPhotoListByCateId(id) {
      this.$http.get("api/getimages/" + id).then(result => {
          if (result.body.status===0) {
              this.list=result.body.message
          }
      });
    }
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0)
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo-list{
    list-style: none;
    padding: 10px;
    margin: 0;
    padding-bottom: 0;

    li{
      position: relative;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
    }
    img{
      width: 100%;
      vertical-align: middle;
    }
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      background-color:rgba(131, 103, 103, 0.226);
      text-align: left; 
      line-height: 14px;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      color:#fff;
      max-height: 68px;
      .info-title{
        font-size: 0.8em
      }
      .info-body{
        font-size: 0.6em;
      }
    }
}
</style>
