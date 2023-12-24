<template>
    <view class="content">
      <text>123</text>
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
      title:'456789999000'
  }) as any
  </script>
  
  <style>

  </style>