<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم كوتلين"
      info="لغة برمجة كائنية من جوجل لبرمجة تطبيقات الاندرويد"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://developer.android.com/kotlin"
        img="kotlin-hero.svg"
        title="مستندات جوجل"
        type="file"
        :top="true"
      />
      <AddCourse 
        link ="https://www.youtube.com/results?search_query=%D8%AF%D9%88%D8%B1%D8%A9+%D9%83%D9%88%D8%AA%D9%84%D9%8A%D9%86"
        img="kotlin-hero.svg"
        title="دورات يوتيوب"
        type="play"
        :top="false"
      />
    </div>
    <EditBox link="/programming/Android/LearnKotlin.vue" />
  </div>
</template>