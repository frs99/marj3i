<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="محتوى الخطة"
      info="كيف اصبح خبير أمن معلوماتي"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLkpG3YKjv6p7vb5suZY3mhBCJDSbflmhT"
        img="youtube.jpg"
        title="محتوى الخطة"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/information-security/MapLearn.vue" />
  </div>
</template>