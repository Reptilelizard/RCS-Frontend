<template>
  <div v-for="item in serverlist" class="server">
    <div class="name">{{ item.nickname }}</div>
    <div class="state">{{ item.status }}</div>
  </div>
</template>

<style scoped>
.server {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  padding: 10px;
  width: 250px;
  height: 100px;
  margin: 5px 5px 5px 5px;
  box-sizing: border-box;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.server:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.name {
  width: 230px;
  height: 23px;
  font-size: 20px;
  margin-bottom: 30px;
  margin-top: 5px;
}

.state {
  width: 50px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #989898;
  border-radius: 15px;
}
</style>


<script lang="ts" setup>
import { defineExpose } from 'vue'
import { ref, onMounted } from 'vue'

const url =
  '/api/serverlist'

const statusMap = {
  0: '停止',
  1: '停止中',
  2: '启动中',
  3: '运行中',
  '-1': '忙碌',
}

const serverlist = ref([
  {
    nickname: '',
    status: '',
  },
])

async function getServerInfoList() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
      },
      credentials: 'include',
    })

    if (response.ok) {
      const data = await response.json()
      toServerInfo(data) // 解析数据后直接调用转换方法
    } else {
      console.error('请求失败:', response.status)
    }
  } catch (error) {
    console.error('请求错误:', error)
  }
}

function toServerInfo(data) {
  if (!data?.data?.data) {
    console.error('数据格式错误', data)
    return
  }

  serverlist.value = data.data.data.map((item) => ({
    nickname: item.config.nickname
      .replace(/\([^)]*\)+/g, '')
      .trim()
      .toLowerCase(),
    status: statusMap[item.status] || '未知状态',
  }))
}

// setInterval(function() {
//   getServerInfoList()
// }, 5000); // 5000毫秒 = 5秒

onMounted(() => {
  getServerInfoList()
})

defineExpose({
  getServerInfoList
})
</script>
