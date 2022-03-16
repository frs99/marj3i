<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم الـ HTML"
      info="لغة ترميز النص الفائق Html، هي لغة ترميز تستخدم في إنشاء وتصميم صفحات ومواقع الويب، وتعتبر هذه اللّغة من أقدم اللّغات وأوسعها استخداما في تصميم صفحات الويب."
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji"
        img="elzero.jpg"
        title="الدورة الجديدة للزيرو"
        type="play"
        :top="true"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAwClZ1PDcjWilxp9YERUbNt"
        img="elzero.jpg"
        title="الدورة القديمة للزيرو"
        type="play"
      />
      <AddCourse 
        link ="https://www.w3schools.com/html/default.asp"
        img="w3schools.jpeg"
        title="مقدمة html - نصية"
        type="file"
      />
      <AddCourse 
        link ="https://www.youtube.com/watch?v=yFCUhQONVGA"
        img="nor.jpg"
        title="تعليم لغة html في فيديو واحد"
        type="play"
      />
    </div>
    <EditBox link="/programming/Web/Front/LearnHtml.vue" />
  </div>
</template>