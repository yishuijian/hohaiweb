<template>
  <div class="message">
    <div class="head">
      <h1 style="margin-bottom: 15px">招生招聘</h1>
      <div class="more" style="margin-bottom: 5px">
        <span>更多</span>
        <img :src="img" class="row">
      </div>
    </div>
    <div class="line"></div>
    <ul class="info">
      <li v-for="item in items" :key="item.title" class="info1">
        <div class="title">
          <span>{{item.title}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "job",
  data() {
    return {
      items: [
        {
          title: '硕/博士研究生招生'
        },
        {
          title: '本科生科研'
        },
        {
          title: '访问学者/学生'
        },
        {
          title: '博士后招聘'
        }
      ],
      img: require('@/assets/img/index/进入箭头.png')//把./src改成@解决报错
    }
  }
}
</script>

<style scoped>
.line {
  float:right;
  width: 100%;
  height: 1px;
  margin-top: -0.5em;
  background: #426cc9;
  position: relative;
  text-align: center;
}

.message {
  width:400px;

  margin: 30px 30px 30px 50px;
}

.info {
  list-style-type: none;
  padding-inline-start: 0;

  margin: 0;
}


.info1 {
  display: flex;
  flex-direction: row;

}
/*箭头样式*/
.row {
  width: 15px;
  height: 15px;
}

.head {
  display: flex;
  flex-direction: row;
  width: 400px;
  position: relative;
}

.more {
  position: absolute;
  right: 0;
  bottom: 10px;
}

.title {
  width: 350px;

  text-align: left;
  line-height: 25px;
  margin-left: 10px;
}
</style>