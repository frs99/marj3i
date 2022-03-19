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