<template>
  <div id="GlobalHeader">
    <div class="title-bar">RCS-Server</div>
    <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="doMenuClick" />
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { HomeOutlined, CloudServerOutlined } from '@ant-design/icons-vue'
import { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const doMenuClick = ({ key }: { key: string }) => {
  router.push({ path: key })
}

const current = ref<string[]>(['mail'])

router.afterEach((to) => {
  current.value = [to.path]
})

const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/server-state',
    icon: () => h(CloudServerOutlined),
    label: '服务器面板',
    title: '服务器面板',
  },
])


</script>

<style scoped>
#GlobalHeader {
  display: flex;
}

.title-bar {
  margin-right: 10px;
  align-items: center;
}
</style>
