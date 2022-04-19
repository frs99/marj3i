<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم CCNP"
      info="ccnp هو اختصار لـِ (Cisco Certified Network Professional certification) وهي شهادة محترف شبكات مُعتمد، تمنحها شركة سيسكو (Cisco) إلى محترفي ومتخصصي تكنولوجيا المعلومات؛ الذين يمتلكون خبرة لا تقلّ عن سنة واحدة في الشّبكات المهنيّة"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLAqaqJU4wzYWm_zZeeFblb-vnbnB5-ZGu"
        img="youtube.jpg"
        title="دورة CCNP"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/information-security/Ccnp.vue" />
  </div>
</template>