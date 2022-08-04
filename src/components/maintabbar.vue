<template>
  <div id="head">
    <div id="menu">
      <el-menu :default-active="activeIndex"
               class="el-menu-demo"
               mode="horizontal"
               @select="handleSelect"
      >
        <el-menu-item index="1" class="firstItem">首页</el-menu-item>
        <el-submenu index="2" class="firstItem">
          <template slot="title">科研团队</template>
          <el-menu-item index="2-1">实验室概况</el-menu-item>
          <el-menu-item index="2-2">实验室主任</el-menu-item>
          <el-menu-item index="2-3">成员</el-menu-item>
          <el-menu-item index="2-4">毕业生</el-menu-item>
        </el-submenu>
        <el-submenu index="3" class="firstItem">
          <template slot="title">学术科研</template>
          <el-menu-item index="3-1">科研方向</el-menu-item>
          <el-menu-item index="3-2">科研项目</el-menu-item>
          <el-menu-item index="3-3">科研奖励</el-menu-item>
          <el-menu-item index="3-4">学术论文</el-menu-item>
          <el-menu-item index="3-5">学术讲座</el-menu-item>
          <el-menu-item index="3-6">学术活动</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" class="firstItem" @click="turnNews">新闻公告</el-menu-item>
        <el-menu-item index="5" class="firstItem">竞赛</el-menu-item>
        <el-submenu index="6" class="firstItem">
          <template slot="title">招生招聘</template>
          <el-menu-item index="6-1">硕/博士研究生招生</el-menu-item>
          <el-menu-item index="6-2">本科生科研</el-menu-item>
          <el-menu-item index="6-3">访问学者/学生</el-menu-item>
          <el-menu-item index="6-4">博士后招聘</el-menu-item>
        </el-submenu>
        <el-menu-item index="7" class="firstItem">联系我们</el-menu-item>
      </el-menu>
    </div>
    <img :src='img' class="image">
  </div>
</template>

<script>
export default {
  name: "maintabbar",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      img: require('@/assets/img/index/hohai.jpg')
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    turnNews() {
      this.$router.push('/news')
    }
  }
}
</script>

<style scoped>
#menu {
  width: 100%;
}

.el-menu-demo {
  position: relative;
  left: 0;
}

.firstItem {
  padding-left: 35px;
  padding-right: 35px;
  width: 150px;
}

.image {
  width: 100%;
  height: 150px;
}
</style>