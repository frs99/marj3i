<template>
  <div>
    <!-- FOR BACKGROUND AND TITLE -->
    <HeaderBlog :title=info.title :info=info.desc />

    <!-- ARTICLE -->
    <section class="all-cont">
      <section class="all-text">
        <nuxt-content :document="info" />
      </section>

    <!-- FOR OTHER COURSES -->
      <section class="other_courses">
        <h1 class="more">تصفح المزيد</h1>
        <div class="all_courses">
          <Courses
          img=""
          title="مجرد نص"
          info="مجرد نص"
          link="/"
          nameBtn="مجرد نص"
          />
          <Courses
            img=""
            title="مجرد نص"
            info="مجرد نص"
            link="/"
            nameBtn="مجرد نص"
          />
          <Courses
            img=""
            title="مجرد نص"
            info="مجرد نص"
            link="/"
            nameBtn="مجرد نص"
          />
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import HeaderBlog from '~/components/blog/HeaderBlog.vue'
import Courses from '~/components/blog/Courses.vue'
export default {
  async asyncData ({ $content, params }) {
    const info = await $content('programming', params.slug).fetch()
    return {
      info
    }
  },
  head(){
    return {
      title: this.info.title,
    }
  },
  components:{
    HeaderBlog,
    Courses
  }
}
</script>

<style scoped>
  .HeaderBackground{
    background-image: url('~/assets/img/background/programming.jpg');
  }
</style>