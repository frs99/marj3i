<template>
  <a :href=link class="crs">
    <img :src=img>
    <p>{{title}}</p>
    <i :class=icon></i>
  </a>
</template>

<script>
export default {
  name:'AddCourse',
  props:{
    link:String,
    img:String,
    title:String,
    icon:String,
  }
}
</script>