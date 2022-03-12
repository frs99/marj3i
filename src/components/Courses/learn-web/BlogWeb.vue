<template>
  <section class="all-text">
    <!-- المقدمة -->
    <Title info="مقدمة" />
    <Text info="يعتبر برمجة و تطوير مواقع الويب واحد من اوائل المسارات في البرمجة و أفضلهم و الاب الاول في البرمجة، فقد بدأت الانترنت على بنية الويب و الاستضافة و الاي بي لتتشارك السرفرات و البيانات داخل شبكة عالمية واحدة اسمها الانترنت، و يعتبر برمجة الويب من امتع المجالات." />
    <Hr />
    <Title info="خطة التعلم" />
    <Text info="عليك ان تعلم ان هذه الخطة تحتاج الى اشهر و اسابيع لتنتهي كما انها تحتاج الى التركيز و الكثير من التطبيق، كذلك عليك اتباع هذه الخطة بالترتيب الذي تجده هنا." />
    <Note info="من فضلك ترتيب محتوى الخطة خاضع لترتيب معين ويجب متابعة الدورات و التطبيقات بالترتيب كما يظهر هنا، لا تنتقل الى دورة اخرى بدون اكمال سابقتها، كذلك كل صندوق هو موضوع لدورة ما و ستجد عدة مصادر لكل دورة داخل الصندوق و انت اختر من بينهم، اختر من بين المحتوى ما يساعدك و على الاغلب ترتيب المحتوى في كل صندوق خاصع من افضل محتوى ثم نزولا .." />
    
    <Alert info="إحذر ان تهمل دروس التطبيقات فهي الأساس" />
    <!-- <Taglink title="مجرد نص" info="مجرد نص" link="/" button="مجرد نص" /> -->

    <!-- تحضير بيئة العمل -->
    <Title info="1 - تحضير بيئة العمل" />
    <Text info="قبل البدأ عليك ان تفهم وتتعلم ما هي بيئة العمل و ما تحتاجه من برامج للبدأ في تطوير الويب." />
    <!-- START BOX FOR COURSE  -->
    <div class="box-list-crs">
      <!-- 
        fas fa-file-alt - icon file
        fas fa-play-circle - icon play video
        fas fa-life-ring - icon for support 
      -->
      <InfoCourse 
        title = "تحضير بيئة العمل"
        info = "بيئة العمل هي البرامج و الاساليب و الاشياء الاولية التي تحتاجها من اجل الويب"
      />

      <div class="all-crs">
        <!-- START ONE COURSE -->
        <TopCourse
          link = "https://elzero.org/settings-and-tools-for-development/"
          img = "/assets/img/icon-learn/elzero.jpg"
          title = "ملخص لكل ماتحتاجه"
          icon = "fas fa-file-alt"
        />
        <!-- END ONE COURSE  -->

      </div>
    </div>
    <!-- END BOX COURSE  -->
    <Hr />

    <!-- تطوير واجهات المستخدم -->
    <Title info="2 - تطوير واجهات المستخدم" />
    <Text info="تطوير واجهات المستخدم - (Front-end web development)" />
    <Text info="هو ممارسة من اجل تحويل البيانات إلى واجهة رسومية، من خلال استخدام HTML و CSS و JavaScript ، بحيث يمكن للمستخدمين عرض هذه البيانات والتفاعل معها." />
    <Text info="وتلك البيانات تعتبر البنية الاساسية للموقع الالكتروني او الواجهة التي تقابلك او شكل الموقع الالكتروني، و مثال على البيانات التي تظهر لك: نصوص، صور، ايقونات، الوان، قوائم، ..الخ" />
    <Text info="إبدا الان:" />

    <!-- START BOX FOR COURSE  -->
    <div class="box-list-crs">
      <!-- 
        fas fa-file-alt - icon file
        fas fa-play-circle - icon play video
        fas fa-life-ring - icon for support 
      -->
      <InfoCourse 
        title = "تعلم الـ HTML"
        info = "لغة ترميز النص الفائق HTML، هي لغة ترميز تستخدم في إنشاء وتصميم صفحات ومواقع الويب، وتعتبر هذه اللّغة من أقدم اللّغات وأوسعها استخداما في تصميم صفحات الويب."
      />

      <div class="all-crs">
        <!-- START ONE COURSE -->
        <TopCourse
          link = "https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji"
          img = "/assets/img/icon-learn/elzero.jpg"
          title = "الدورة الجديدة للزيرو"
          icon = "fas fa-play-circle"
        />
        <AddCourse
          link = "https://www.w3schools.com/html/default.asp"
          img = "/assets/img/icon-learn/w3schools.jpeg"
          title = "مقدمة html - نصية"
          icon = "fas fa-file-alt"
        />
        <AddCourse
          link = "https://www.youtube.com/watch?v=yFCUhQONVGA"
          img = "/assets/img/icon-learn/nor.jpg"
          title = "تعليم لغة html في فيديو واحد"
          icon = "fas fa-play-circle"
        />
        <!-- END ONE COURSE  -->

      </div>
    </div>
    <!-- END BOX COURSE  -->




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
// import Taglink from '../../blog/TagLink.vue';
import Hr from '../../blog/hr.vue';


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
    // Taglink,
    Hr,

    AddCourse,
    InfoCourse,
    TopCourse,
  }
}
</script>