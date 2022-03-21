<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تطبيقات مختلفة في انشاء مشاريع"
      info="مرحلة مستمرة معك في انشاء وتنفيذ الافكار"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/results?search_query=project+android+with+kotlin"
        img="youtube.jpg"
        title="مشاريع مختلفة"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/programming/Android/AppsAndroid.vue" />
  </div>
</template>