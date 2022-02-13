<template>
  <div className="box-info-crs">
      <h2>{{title}}</h2>
      <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  name:'InfoCourse',
  props:{
    title:String,
    info:String,
  }
}
</script>