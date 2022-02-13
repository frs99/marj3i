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