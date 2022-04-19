<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم +A"
      info="هي شهادة تدريب أساسية على تكنولوجيا المعلومات معترف بها دوليًا حصولك على شهادة ال +A تعني أنك قادر على إنشاء ، تشغيل ، إدارة ، و حل المشاكل التقنية  بشكل عام , قادر على أداء مهام دعم تكنولوجيا المعلومات المهمة في الوقت الحالي"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLiBRXSnNzUuqhJ767kWhkCHTV5h5j0i6G"
        img="youtube.jpg"
        title="دورة +A"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/information-security/Aplus.vue" />
  </div>
</template>