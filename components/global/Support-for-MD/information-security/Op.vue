<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم OP"
      info="دورة في انظمة التشغيل و طريقة عملها"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLiBRXSnNzUuqhJ767kWhkCHTV5h5j0i6G"
        img="youtube.jpg"
        title="دورة OP"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/information-security/Op.vue" />
  </div>
</template>