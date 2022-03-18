<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم MySQL للتعامل مع قواعد البيانات"
      info="قواعد بيانات MySQL من أشهر قواعد البيانات التي سوف تتعامل معها عند عمل تطبيق ويب وهي المسؤولة عن التعامل مع قاعدة البيانات الخاصة بتطبيقك أو مشروعك وإرسال واستقبال البيانات منها."
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAz6DT8SzQ1CODJTH-NIA7R9"
        img="elzero.jpg"
        title="دورة تعلم MySQL الإصدار الخامس"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/programming/Web/Back/LearnMySql.vue" />
  </div>
</template>
