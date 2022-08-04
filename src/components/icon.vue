<template>
  <div class="icon1">
    <div class="icon2">
      <span class="turnEnglish">English</span>
      <div class="search">
        <el-input placeholder="请输入内容" v-model="input" size="mini">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>
    <div class="iconImg">
      <img src="https://www.hhu.edu.cn/_upload/site/00/03/3/logo.png" class="hohai">
    </div>
  </div>
</template>

<script>
export default {
  name: "icon",
  data() {
    return {
      input: '',

    }
  }
}
</script>

<style scoped>
.icon2 {
  display: flex;
  flex-direction: row-reverse;
  background-color: darkblue;
  height: 40px;
  width: 100%;

  margin-right: 0;
  margin-left: 0;
}

.turnEnglish {
  position: relative;
  color: white;
  top: 10px;
  right: 22%;
}

.search {
  right: 5%;
  margin-top: 5px;
}

.iconImg {
  height: 80px;
  background-color: #0578bd;
}

.hohai{
  position: relative;
  margin-top: 7px;
  right: 40%;
}
</style>