<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم أندرويد استوديو"
      info="برنامج من جوجل لبرمجة تطبيقات الاندرويد"
    />
    <Note>
      يرجى تصفح وثائق مطوري جوجل لانها افضل مرجع في هذه الصفحة
    </Note>
    <div class="all-crs">
      <AddCourse 
        link ="https://developer.android.com/docs"
        img="AndroidStudio.jpg"
        title="وثائق مطوري جوجل"
        type="file"
        :top="true"
      />
      <hr>
      <AddCourse 
        link ="https://developer.android.com/studio/intro"
        img="AndroidStudio.jpg"
        title="مستندات اندرويد استوديو"
        type="file"
        :top="true"
      />
      <AddCourse 
        link ="https://developer.android.com/studio?hl=en"
        img="AndroidStudio.jpg"
        title="تحميل اندرويد استوديو"
        type="download"
        :top="false"
      />
      <hr>
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLMYF6NkLrdN8giOLjGRx81fjEIaE5ef-8"
        img="AndroidStudio.jpg"
        title="دورة اندرويد استوديو"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/programming/Android/AndroidStudio.vue" />
  </div>
</template>