<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="مخيم التدريب من الزيرو"
      info="جافا سكريبت أو في الغالب كاختصارا JS ‏ هي لغة برمجة عالية المستوى تستخدم أساساً في متصفحات الويب لإنشاء صفحات أكثر تفاعلية يتم تطويرها حالياً من طرف شركة موزيلا.
            مخيم تدريب من اسامة الزيرو و هو قائمة تشغيل يحتوي على جميع تقسيمات جافاسكريبت."
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv"
        img="elzero.jpg"
        title="مخيم التدريب  من الزيرو 2021"
        type="play"
        :top="true"
      />
      <AddCourse 
        link ="https://elzero.org/study/javascript-bootcamp-2021-study-plan/"
        img="elzero.jpg"
        title="خطة الدراسة"
        type="support"
      />
      <AddCourse 
        link ="https://elzero.org/question-javascript-references/"
        img="elzero.jpg"
        title="مراجع للمساعدة"
        type="support"
      />
    </div>
    <EditBox link="/programming/Web/Front/LearnJavaScript.vue" />
  </div>
</template>
