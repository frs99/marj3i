<template>
  <main>
    <HeaderBlog title="عنوان للاختبار" info="وصف بسيط للاختبار" />

    <section class="all-cont">
      <BlogTest />
      <AsideTest />
    </section>
  </main>
</template>

<script>
document.title = "test";
import HeaderBlog from '../components/blog/HeaderBlog.vue';
import BlogTest from '../components/Courses/test/BlogTest.vue';
import AsideTest from '../components/Courses/test/AsideTest.vue';
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
    /* background-image: url("../assets/img/background/background.jpg"); */
  }
</style>