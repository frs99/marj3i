<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم لغة PHP"
      info="لغة PHP من أشهر اللغات لبناء تطبيقات ومواقع الويب وهي لغة من لغات ال Scripting Language ولها دعم كبير وهي مجانية وسهلة التعلم جدا والكثير من المواقع العالمية مبرمجة بهذه اللغة"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAzH72MTPuAAaYfReraNlQgM"
        img="elzero.jpg"
        title="1 - دورة PHP الإصدار الخامس"
        type="play"
        :top="true"
      />
      <AddCourse 
        link="https://www.youtube.com/playlist?list=PLDoPjvoNmBAxXTPncg0W4lhVS32LO_xtQ"
        img="elzero.jpg"
        title="2 - تعلم مباديء ال OOP"
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