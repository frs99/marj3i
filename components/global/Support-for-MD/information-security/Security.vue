<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم + Security"
      info="هي أول شهادة أمنية يجب على محترفي تكنولوجيا المعلومات كسبها. إنها تحدد المعرفة الأساسية المطلوبة لأي دور للأمن السيبراني وتوفر نقطة انطلاق لوظائف الأمن السيبراني المتوسطة المستوى."
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLCIJjtzQPZJ9tmm43K6KCeZo2MNbB1F3P"
        img="youtube.jpg"
        title="دورة Security"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/information-security/Security.vue" />
  </div>
</template>