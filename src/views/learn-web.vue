<template>
  <main>
    <HeaderBlog title="برمجة المواقع" info="تصفح المسار من الأسفل" />

    <section class="all-cont">
      <BlogTest />
      <AsideTest />
    </section>
  </main>
</template>

<script>
document.title = "تعلم برمجة المواقع";
import HeaderBlog from '../components/blog/HeaderBlog.vue';
import BlogTest from '../components/Courses/learn-web/BlogWeb.vue';
import AsideTest from '../components/Courses/learn-web/AsideWeb.vue';
export default {
  components:{
    HeaderBlog,
    BlogTest,
    AsideTest
  }
}
</script>

<style>
  .HeaderBackground{
    background-image: url("../assets/img/background/programming.jpg");
  }
</style>