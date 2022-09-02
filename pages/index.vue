<template>
  <div>
    <HeaderHome />
    <BoxInfo />
    <BoxDescription />
    <CourseBox />
    <NoteClose />
    <ToTop />
  </div>
</template>

<script>
import HeaderHome from '~/components/Home/header/HeaderHome.vue'
import BoxInfo from '../components/Home/main/BoxInfo.vue'
import BoxDescription from '../components/Home/main/BoxDescription.vue'
import CourseBox from '../components/Home/main/CourseBox.vue'
import NoteClose from '~/components/Home/main/NoteClose.vue'
import ToTop from '~/components/ToTop.vue'

export default {
  components:{
    HeaderHome,
    BoxInfo,
    BoxDescription,
    CourseBox,
    NoteClose,
    ToTop
},
  head(){
    return{
      title: 'مرجعي'
    }
  }
}
</script>

<style scoped>
  .note{
    width:280px;
    margin: 20px auto;
    text-align: center;
  }
</style>