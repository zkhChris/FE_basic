<template>
    <div id='swiper_img_box'>
    <transition-group name='image' tag="ul" class='swiper_img_ul'>
        <img  :src='img.src' :alt='img.alt' v-for="(img,index) in imgs" :key='index' v-show='img.index==showIndex' @mouseover='stop' @mouseout='start'>
    </transition-group>
        <ul class='buttonG'>
        <span v-for='(img,index) in imgs' :key='index' :class="[index==showIndex-1 ? 'color' : 'white', 'circle']" @click='goto(index)'></span>
        </ul>
    </div>
</template>
<script>
export default{
  name:'swiper',
  data () {
    return {
      imgs:[
            {
            src:'../../dist/7.gif',
            alt:'1',
            index:1
            },{
            src:'../../dist/home_06.gif',
            alt:'2',
            index:2
            },{
            src:'../../dist/home_08.gif',
            alt:'3',
            index:3
            },{
            src:'../../dist/home_12.gif',
            alt:'4',
            index:4
            }
          ],
          showIndex:1
    }
    },
  mounted:function(){
    this.timer=setInterval(this.changeIndex,2000)
    }
,
  methods:{
    changeIndex(){
      if(this.showIndex>=this.imgs.length){
        this.showIndex=1
      }else{
        this.showIndex++
      }
    },
    stop(){
      console.log('1')
      clearInterval(this.timer)
    },
    start(){
      this.timer=setInterval(this.changeIndex,2000)
    },
    goto(i){
      this.showIndex=i+1
      this.stop()
      this.start()
    }
  }
}
</script>
<style>
  .swiper_img_ul{
    height:300px;
  }
  .swiper_img_ul img{
    position:absolute;
  }
  #swiper_img_box{
    position:relative;
    width:300px;
    height:300px;
    overflow:hidden;
  }
  .buttonG{
    position:absolute;
    bottom:0;
  }
  .circle{
    display:inline-block;
    width:15px;
    height:15px;
    border-radius:100%;
    margin-left:10px;
  }
  .white{
    background-color:#fff;
  }
  .color{
    background-color:#f00;
  }



  .image-enter-active {
            transform: translateX(0);
            transition: all 1s ease;
        }

  .image-leave-active {
            transform: translateX(-100%);
            transition: all 1s ease;
        }

  .image-enter {
            transform: translateX(100%)
        }

  .image-leave {
            transform: translateX(0)
                }
</style>
