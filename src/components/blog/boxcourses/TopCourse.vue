<template>
  <a :href=link class="crs">
    <i class="fas fa-star top"></i>
    <img :src=img>
    <p>{{title}}</p>
    <i :class=icon></i>
  </a>
</template>

<script>
export default {
  name:'TopCourse',
  props:{
    link:String,
    img:String,
    title:String,
    icon:String,
  }
}
</script>