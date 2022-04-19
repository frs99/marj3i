<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم CEH"
      info="المخترق المعتمد الأخلاقي أو بالإنجليزية (CEH) هي مؤهل وشهادة احترافية مهنية يتم الحصول عليها من خلال إبراز المعرفة بتقييم معايير أمنية في أنظمة الحاسب وذلك من عبر البحث عن نقاط الضعف والثغرات الأمنية المتواجدة في الأنظمة المستهدفة."
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLCIJjtzQPZJ-gm80_z7Svq4UlJSbOKdM4"
        img="youtube.jpg"
        title="دورة CEH"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/information-security/Ceh.vue" />
  </div>
</template>