<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <Eeq />
      <text class="title">{{ title.title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive,onMounted  } from 'vue'
import {tt} from '../../utils/Interfaces'

interface yy {
  title:string
}
onMounted(() => {
  console.log('*******')
  tt().then(res=>{
    console.log('1------------123',res)
  })
})

const title:yy = reactive({
	title:'demo'
}) as any
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
