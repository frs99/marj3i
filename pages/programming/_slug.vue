<template>
  <div>
    <!-- FOR BACKGROUND AND TITLE -->
    <HeaderBlog :title=info.title :info=info.desc />

    <!-- ARTICLE -->
    <section class="all-cont">
      <section class="all-text">
        <!-- LIST FOC -->
        <section class="toc">
          <nav>
            <ul>
              <h1>قائمة المحتوى</h1>
              <li v-for="link of info.toc" :key="link.id">
                <a :href="`${info.path}/#${link.id}`">{{ link.text }}</a>
              </li>
            </ul>
          </nav>
        </section>
        <!-- THE BLOG -->
        <section class="content_blog">
          <nuxt-content :document="info" />
        </section>
      </section>

    <!-- FOR OTHER COURSES -->
      <section class="other_courses">
        <h1 class="more">تصفح المزيد</h1>
        <div class="all_courses">
          <Courses 
            img="/assets/img/course-img1.png"
            title="تعلم البرمجة"
            info="تعريف بالبرمجة ومجالاتها مع خطة تعلم احترافية لكل مجال محدثة باستمرار."
            link="/programming/tracks/"
            nameBtn="تصفح المسارات"
          />
          <Courses 
            img="/assets/img/course-img2.png"
            title="الأمن المعلوماتي"
            info="تعريف و اهم المراحل للاحتراف في الشبكات و الامن المعلوماتي"
            link="/information-security/start/"
            nameBtn="تصفح المراحل"
          />
          <Courses 
            img="/assets/img/course-img4.png"
            title="التصميم"
            info="مفهوم التصميم و تعريف بكل مجال منه و البرامج"
            link="/design/start/"
            nameBtn="تصفح"
          />
        </div>
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
    Courses,
    ToTop
  }
}
</script>

<style scoped>
  .HeaderBackground{
    background-image: url('~/assets/img/background/programming.jpg');
  }
</style>