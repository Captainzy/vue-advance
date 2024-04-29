<template>
   <div >
     <h2 @click="showName">学校名称:{{  name }}</h2>
     <h2>学校地址: {{ address }}</h2>
   </div>
</template>

<script>
//引入混合
import {  mixin, shareData } from "@/mixin";
export default {
  name: "School",
  data(){
    console.log(this);
    return {
       name: 'wust',
       address: '武汉科技大学'
    }
  },
  //在 Vue 2 中，mixins 是创建可重用组件逻辑的主要方式。尽管在 Vue 3 中保留了 mixins 支持，但对于组件间的逻辑复用，使用组合式 API 的组合式函数是现在更推荐的方式。
  mixins:[ mixin, shareData ]
}
</script>

