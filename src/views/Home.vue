<template>
  <div id="home">
    <div class="firstRow">
      <message/>
      <carousel/>
    </div>
    <div class="secondRow">
      <div class="r2-1">
        <notice/>
        <job/>
      </div>
      <div class="r2-2">
        <direction/>
        <institute/>
      </div>
    </div>
  </div>
</template>

<script>
import message from "@/components/common/message";
import carousel from "@/components/carousel";
import notice from "@/components/common/notice";
import job from "@/components/common/job";
import direction from "@/components/common/direction";
import institute from "@/components/common/institute";

export default {
  name: 'Home',
  components: {
    message,
    carousel,
    notice,
    job,
    direction,
    institute,
  }
}
</script>

<style scoped>
.firstRow {
  display: flex;
  flex-direction: row;
  height: 400px;
}

.secondRow {
  display: flex;
  flex-direction: row;
}

.r2-2 {
  display: flex;
  flex-direction: row;
}
</style>
