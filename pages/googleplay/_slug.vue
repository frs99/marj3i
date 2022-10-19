<template>
  <div>
    <!-- FOR BACKGROUND AND TITLE -->
    <HeaderBlog :title=info.title :info=info.desc />

    <!-- ARTICLE -->
    <section class="all-cont">
      <section class="all-text privacy">
        <!-- LIST FOC -->
        <section class="toc">
          <nav>
            <ul>
              <h1>Privacy for apps</h1>
              <li v-for="link of info.toc" :key="link.id">
                <a :href="`/marj3i${info.path}/#${link.id}`">{{ link.text }}</a>
              </li>
            </ul>
          </nav>
        </section>
        <!-- THE BLOG -->
        <section class="content_blog">
          <nuxt-content :document="info" />
        </section>
      </section>
    </section>
    <ToTop />
  </div>
</template>

<script>
import HeaderBlog from '~/components/blog/HeaderBlog.vue'
import Courses from '~/components/blog/Courses.vue'
import ToTop from '~/components/ToTop.vue'

export default {
  async asyncData ({ $content, params }) {
    const info = await $content('googleplay', params.slug).fetch()
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
    Courses,
    ToTop
  }
}
</script>

<style  scoped>
  *{
    direction: ltr !important;
    text-align: end;
  }
  .HeaderBackground{
    background-image: url('~/assets/img/background/programming.jpg');
  }
  
</style>