<template>
  <header>
    <HeaderHome />
  </header>
  <main>
    <BoxInfo />
    <BoxDescription />
    <CourseBox />
  </main>
</template>

<script>
import HeaderHome from '../components/Home/header/HeaderHome.vue';
import BoxInfo from '../components/Home/main/BoxInfo.vue';
import BoxDescription from '../components/Home/main/BoxDescription.vue';
import CourseBox from '../components/Home/main/CourseBox.vue';

export default {
  components:{
    HeaderHome,
    BoxInfo,
    BoxDescription,
    CourseBox,
  },
  // mounted(){
  //   window.onload = () => {
  //     let navbar = document.querySelector('.navbar');
  //     navbar.style.backgroundColor = "transparent";
  //     console.log(navbar)
  //   }
  // },
}
</script>