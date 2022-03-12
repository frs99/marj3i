<template>
  <article>
      <div class="course-img course-color1">
        <img :src=img>
      </div>
      <div class="course-info">
        <h1>{{title}}</h1>
        <p>{{info}}</p>
        <a :href="link">{{nameBtn}}</a>
      </div>
  </article>
</template>

<script>
export default {
  name:'Courses',
  props:{
    img:String,
    title:String,
    info:String,
    link:String,
    nameBtn:String
  }
}
</script>