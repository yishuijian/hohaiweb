<template>
  <div class="punchline">
    <div class="head">
      <div class="headone">
        <h1 style="margin-bottom: 15px">图文亮点</h1>
        <div class="more" style="margin-bottom: 5px">
          <span>更多</span>
          <img :src="require('@/assets/img/index/进入箭头.png')" class="row">
        </div>
      </div>
      <div class="line"></div>
      <el-carousel indicator-position="outside" style="width: 900px;">
      <el-carousel-item v-for="item in items" :key="item.img">
        <div class="item">
          <img :src=item.img style="width: 250px; height: 250px">
          <div class="word">
            <h2>{{item.title}}</h2>
            <span>{{item.content}}</span>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      items: [
        {
          img: 'http://ibdl.pku.edu.cn/images/content/2019-09/20190902064714088161.jpg',
          title: '实验室博士张天昊带领队伍在 2019 DeeCamp 人工智能训练营拿下了今年 DeeCamp 最佳团队奖',
          content: '2019 DeeCamp人工智能训练营成果展示暨结营典礼在中国科学院大学雁栖湖校区举办'
        },
        {
          img: 'http://ibdl.pku.edu.cn/images/content/2019-10/20191028070417803117.png',
          title: '实验室机器鱼参展北京大学第十六届国际文化节',
          content: '2019年10月19日上午，北京大学第十六届国际文化节开幕。本届文化节以“世界无界，未来已来”为主题'
        },
        {
          img: 'http://ibdl.pku.edu.cn/images/content/2019-05/20190530002815675501.png',
          title: '北大慕课：关于机器人，你不可不知的ABC',
          content: '为推广普及机器人知识，谢广明教授自2012年起在北京大学开设“魅力机器人”课程'
        },
      ]
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.line {
  float:right;
  width: 100%;
  height: 1px;
  margin-top: -0.5em;
  background: #426cc9;
  position: relative;
  text-align: center;
}

/*箭头样式*/
.row {
  width: 15px;
  height: 15px;
}

.headone {
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
}

.more {
  position: absolute;
  right: 0;
  bottom: 10px;
}

.punchline {
  margin: 30px 30px 30px 50px;
}
</style>