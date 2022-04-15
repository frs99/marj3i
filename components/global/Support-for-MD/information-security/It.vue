<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم IT"
      info="كلمة IT هي اختصار للمصطلح الإنجليزي (Information Technology)، وترجمتها بالعربية تكنولوجيا المعلومات كما تعلم وهو مصطلح كبير ويشمل معاني كثيرة"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLCIJjtzQPZJ9Fq0smoYKmwmukitmT9ssn"
        img="it.jpeg"
        title="دورة IT"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/information-security/It.vue" />
  </div>
</template>