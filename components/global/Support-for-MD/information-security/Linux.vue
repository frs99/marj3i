<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم + Linux"
      info="هو نظام تشغيل حر ومفتوح المصدر. بسبب تطوره في إطار مشروع جنو، يتمتع لينكس بدرجة عالية من الحرية في تعديل وتشغيل وتوزيع وتطوير أجزائه، ويعتبر جنو/لينكس من الأنظمة الشبيهة بيونكس ويصنف ضمن عائلة أشباه يونكس إلى جانب أنظمة أخرى بعضها مملوك مثل سولاريس، وبعضها حُر"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLCIJjtzQPZJ8KxEi278nugeO6R_9-Cn5o"
        img="youtube.jpg"
        title="دورة Linux"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/information-security/Linux.vue" />
  </div>
</template>