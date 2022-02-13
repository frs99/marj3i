<template>
  <main>
    <HeaderBlog title="عنوان للاختبار" info="وصف بسيط للاختبار" />

    <section class="all-cont">
      <BlogText />
      <AsideTest />
    </section>
  </main>
</template>

<script>
import HeaderBlog from '../components/blog/HeaderBlog.vue';
import BlogText from '../components/Courses/test/BlogText.vue';
import AsideTest from '../components/Courses/test/AsideTest.vue';
export default {
  components:{
    HeaderBlog,
    BlogText,
    AsideTest
  }
}
</script>