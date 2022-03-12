<template>
    <section class="HeaderBackground">
      <div>
        <h1>{{title}}</h1>
        <p>{{info}}</p>
        <i class="fas fa-angle-double-down" aria-hidden="true"></i>
      </div>
    </section>
</template>

<script>
export default {
  name:'HeaderBlog',
  props:{
    title:String,
    info:String,
  }
}
</script>