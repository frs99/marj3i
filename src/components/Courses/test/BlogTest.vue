<template>
  <section class="all-text">
    <Title info="عنوان" />
    <Text info="مجرد نص" />
    <Note info="مجرد نص" />
    <Alert info="مجرد نص" />
    <Taglink title="مجرد نص" info="مجرد نص" link="/" button="مجرد نص" />



    <!-- START BOX FOR COURSE  -->
    <div class="box-list-crs">
      <!-- 
        fas fa-file-alt - icon file
        fas fa-play-circle - icon play video
        fas fa-life-ring - icon for support 
      -->
      <InfoCourse 
        title = "عنوان الصندوق"
        info = "بعض الكلمات للوصف"
      />

      <div class="all-crs">
        <!-- START ONE COURSE -->
        <TopCourse
          link = "#"
          img = "assets/img/icon-learn/basic.jpeg"
          title = "دورة ما"
          icon = "fas fa-file-alt"
        />

        <AddCourse
          link = "#"
          img = "assets/img/icon-learn/basic.jpeg"
          title = "دورة ما"
          icon = "fas fa-life-ring"
        />
        <!-- END ONE COURSE  -->

      </div>
    </div>
    <!-- END BOX COURSE  -->


  </section>
</template>

<script>
import Title from '../../blog/TitleBlog.vue';
import Text from '../../blog/TextBlog.vue';
import Note from '../../blog/Note.vue';
import Alert from '../../blog/Alert.vue';
import Taglink from '../../blog/TagLink.vue';

//BOX COURSESE 
import AddCourse from '../../blog/boxcourses/AddCourse.vue';
import InfoCourse from '../../blog/boxcourses/InfoCourse.vue';
import TopCourse from '../../blog/boxcourses/TopCourse.vue';

export default {
  name:'BlogText',
  components:{
    Title,
    Text,
    Note,
    Alert,
    Taglink,

    AddCourse,
    InfoCourse,
    TopCourse,
  }
}
</script>