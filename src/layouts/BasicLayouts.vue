<template>
  <div id="Basic-layouts">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>

      <a-layout-content class="content">
        <RouterView />
      </a-layout-content>

      <a-layout-footer class="footer">
        <a href="https://www.rl-link.top" target="_blank">RCS-Server By Gamequg</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#Basic-layouts .header {
  background-color: white;
  padding-inline: 20px;
}

#Basic-layouts .content {
  background-color: white;
}

#Basic-layouts .footer {
  background-color: white;
  border-top: 2px #cacaca solid;
  text-align: center;
}

.footer a {
  color: black;
  font-size: 20px;
}
</style>

<script lang="ts" setup>
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>
