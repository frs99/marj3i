<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم CCNA"
      info="CCNA هو منهج مُصمم لمدراء و مهندسو الشبكات يحوي أساسيات للتخفيف من اختراقات الشبكات، مقدمة إلى الشبكات اللاسلكية: مفاهيم ومصطلحات، و المهارات الرئيسية في الشبكات"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLAqaqJU4wzYXBeFUFYs4qQ2qnWm_28xBV"
        img="youtube.jpg"
        title="دورة CCNA"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/information-security/Ccna.vue" />
  </div>
</template>