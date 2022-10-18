<template>
  <a :href=link class="crs" target="_blank" :type=type :top="top">
    <i v-if="top == true" class="fas fa-star top"></i>
    <img :src="require(`~/assets/img/icon-learn/${img}`)" />
    <p>{{title}}</p>
    <i v-if="type === 'file'" class="fas fa-file-alt"></i>
    <i v-else-if="type === 'play'" class="fas fa-play-circle"></i>
    <i v-else-if="type === 'support'" class="fas fa-life-ring"></i>
    <i v-else-if="type === 'download'" class="fas fa-download"></i>
  </a>
</template>

<script>
export default {
  name:'AddCourse',
  props:{
    link:String,
    img:String,
    title:String,
    type:String,
    top:Boolean
  },
}
</script>