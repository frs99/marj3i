<template>
  <div>
    <HeaderHome />
    <BoxInfo />
    <BoxDescription />
    <CourseBox />
    <ToTop />
  </div>
</template>

<script>
import HeaderHome from '~/components/Home/header/HeaderHome.vue'
import BoxInfo from '../components/Home/main/BoxInfo.vue'
import BoxDescription from '../components/Home/main/BoxDescription.vue'
import CourseBox from '../components/Home/main/CourseBox.vue'
import ToTop from '~/components/ToTop.vue'


export default {
  components:{
    HeaderHome,
    BoxInfo,
    BoxDescription,
    CourseBox,
    ToTop
},
  head(){
    return{
      title: 'مرجعي'
    }
  }
}
</script>