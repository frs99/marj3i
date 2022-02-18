<template>
  <aside>
    <h1 className="more">تصفح المزيد</h1>
    <Courses
      img=""
      title="مجرد نص"
      info="مجرد نص"
      link="/"
      nameBtn="مجرد نص"
    />
  </aside>
</template>

<script>
import Courses from '../../blog/Courses.vue';
export default {
  name:'AsideTest',
  components:{
    Courses,
  }
}
</script>