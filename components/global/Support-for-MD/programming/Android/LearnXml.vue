<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم  XML "
      info="لغة ترميز تستعمل داخل اندرويد استوديو"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://developer.android.com/guide/topics/ui/declaring-layout"
        img="AndroidStudio.jpg"
        title="Layouts"
        type="file"
        :top="true"
      />
      <hr>
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLwj1YcMhLRN1xCszZaYI3tFhwdIv7__k6"
        img="khaled.jpg"
        title="دورة XML وتوابعها"
        type="play"
        :top="false"
      />
      <AddCourse 
        link ="https://www.w3schools.com/xml/"
        img="w3schools.jpeg"
        title="تعلم XML"
        type="file"
        :top="false"
      />
    </div>
    <EditBox link="/programming/Android/LearnXml.vue" />
  </div>
</template>
