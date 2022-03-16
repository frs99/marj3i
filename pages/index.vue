<template>
  <div>
    <HeaderHome />
    <BoxInfo />
    <BoxDescription />
    <CourseBox />
  </div>
</template>

<script>
import HeaderHome from '~/components/Home/header/HeaderHome.vue'
import BoxInfo from '../components/Home/main/BoxInfo.vue'
import BoxDescription from '../components/Home/main/BoxDescription.vue'
import CourseBox from '../components/Home/main/CourseBox.vue'

export default {
  components:{
    HeaderHome,
    BoxInfo,
    BoxDescription,
    CourseBox
  },
  head(){
    return{
      title: 'مرجعي'
    }
  }
}
</script>