<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم + Network"
      info="هي دورة تدريب أساسية لمجال الشبكات معترف بها دوليًا ، ينصح بأخذها كأول دورة في مجال الشبكات ، حصولك على شهادة +N تعني انك قادر على تكوين ، إدارة ، وصيانة شبكات الحاسب ."
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLCBJ6FzVTy-DpIld56JdKtmhSHSMj0g75"
        img="youtube.jpg"
        title="دورة Network"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/information-security/Network.vue" />
  </div>
</template>