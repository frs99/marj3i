<template>
  <section class="content">
    <div class="course-h1" id="courses">
      <h1>حدد مجالك</h1>
    </div>
    <div class="content-course">
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
    </div>
  </section>

</template>

<script>
import Courses from '../../blog/Courses.vue';
export default {
  name:'CourseBox',
  components:{
    Courses,
  }
}
</script>