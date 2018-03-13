<template>
  <div class="photosinfo-container">
      <h3> {{photoInfo.title}} </h3>
      <p class="subtitle">
          <span>发表时间：{{photoInfo.add_time | dateFormat}} </span>
          <span>点击：{{photoInfo.click}} 次</span>
      </p>

      <div class="thumbs">
        <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src">
      </div>

      <div class="photo-content" v-html="photoInfo.content"></div>

      <cmt-box :id="id"></cmt-box>
  </div>
</template>

<style lang="scss" scoped>
.photosinfo-container{
    padding: 3px;
    h3{
        font-size: 1em;
        color:#26a2ff;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
    }
    .thumbs{
        .preview-img{
            margin: 9px;
            box-shadow: 0 0 9px #999;
        }
    }
    .photo-content{
        font-size: .8em;
        line-height: 1.6em;
        text-indent:1.6em;
    }

}

</style>


<script>
import comment from '../common/commentContainer.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,
            photoInfo:{},
            list:[]
        }
    },
    created(){
        this.getPhotoInfo()
        this.getThumbs()
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                if (result.body.status===0) {
                    this.photoInfo=result.body.message[0]
                }
            })
        },
        getThumbs(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                console.log(result);
                if (result.body.status===0) {
                    result.body.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                    });
                    this.list=result.body.message
                }
            })
        }
    },
    components:{
        "cmt-box":comment
    }
}
</script>


