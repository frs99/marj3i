<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تطبيقات متنوعة"
      info="هنا ستجد تطبيقات كبيرة ومتنوعة تخص الفرونت اند و الباك اند معا"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAxdiBh6J62wOzEnvC4CNuFU"
        img="elzero.jpg"
        title="تعلم كيفية عمل eCommerce Shop"
        type="play"
        :top="true"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAwINfHftZgmVhWFXjQjR9Df"
        img="elzero.jpg"
        title="تعلم تصميم وبرمجة Contact Form"
        type="play"
        :top="false"
      />
    </div>
    <EditBox link="/programming/Web/Back/AppsBack.vue" />
  </div>
</template>