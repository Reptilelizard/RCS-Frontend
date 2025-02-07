<template>
  <section id="server-state">
    <div class="title">服务器状态</div>
    <div class="server-box">
      <Server />
    </div>
  </section>
</template>

<style scoped>
#server-state {
  width: 100%;
}

#server-state .title {
  margin-top: 20px;
  text-align: center;
  font-size: 30px;
}

.server-box {
  width: 80%;
  max-width: 1070px;
  margin: 20px auto;
  padding: 10px;
  border: 1px solid #757575;
  border-radius: 20px;
  background-color: #b6b6b6;
  display: flex;
  flex-wrap: wrap;
}
</style>

<script setup>
import Server from "@/components/server-status/Server.vue";
</script>


