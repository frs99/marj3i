<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم لغة PHP"
      info="لغة PHP من أشهر اللغات لبناء تطبيقات ومواقع الويب وهي لغة من لغات ال Scripting Language ولها دعم كبير وهي مجانية وسهلة التعلم جدا والكثير من المواقع العالمية مبرمجة بهذه اللغة"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAy41u35AqJUrI-H83DObUDq"
        img="elzero.jpg"
        title="مخيم التعلم من الزيرو PHP8"
        type="play"
        :top="true"
      />
      <AddCourse 
        link ="https://elzero.org/question-php-references/"
        img="elzero.jpg"
        title="مراجع لغة PHP"
        type="play"
        :top="false"
      />
    </div>
    <EditBox link="/programming/Web/Back/LearnPhp.vue" />
  </div>
</template>