<template>
  <main>
    <HeaderBlog title="تعلم البرمجة" info="اختر المسار من الاسفل" />

    <section class="all-cont">
      <BlogProgramming />
      <AsideProgramming />
    </section>
  </main>
</template>

<script>
document.title = "تعلم البرمجة";
// document.querySelector(".HeaderBackground").style.backgroundImage = "/assets/img/background/background.jpg"
import HeaderBlog from '../components/blog/HeaderBlog.vue';
import BlogProgramming from '../components/Courses/programming/BlogProgramming.vue';
import AsideProgramming from '../components/Courses/programming/AsideProgramming.vue';
export default {
  components:{
    HeaderBlog,
    BlogProgramming,
    AsideProgramming,
  }
}
</script>

<style>
  .HeaderBackground{
    background-image: url("../assets/img/background/programming.jpg");
  }
</style>