<template>
  <div className="mini-list">
    <h3>{{title}}</h3>
    <p>{{info}}</p>
    <a :href=link>{{button}}</a>
  </div>
</template>

<script>
export default {
  name:'TagInfo',
  props:{
    title:String,
    info:String,
    link:String,
    button:String,
  }
}
</script>