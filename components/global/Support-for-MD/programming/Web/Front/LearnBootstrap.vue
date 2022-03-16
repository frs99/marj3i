<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم بوتستراب - Bootstrap"
      info="طور مهاراتك مع افضل إطار عمل وسريع لل Html - CSS"
    />
    <Note>
      بعض المحتوى هنا قد يكون قديم او بإصدارات قديمة
    </Note>
    <div class="all-crs">
      <AddCourse 
        link ="https://getbootstrap.com/docs/"
        img="bootstrap.png"
        title="المستندات الرسمية"
        type="file"
        :top="true"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLMTdZ61eBnyrPiX-b1MNG-MSPAJ0OgpHA"
        img="bootstrap.png"
        title="كود شيار - دورة بوتستراب"
        type="play"
      />
      <AddCourse 
        link ="https://www.youtube.com/watch?v=rwzEb9eO8U4&t=2057s"
        img="bootstrap.png"
        title="بوتستراب في فيديو واحد"
        type="play"
      />
      <hr>
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAw24EjNUp_88S1VeaNK8Cts"
        img="elzero.jpg"
        title="التطبيق الاول على بوتستراب"
        type="play"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAxYmbhnyM0yxH3OzhoDiAP9"
        img="elzero.jpg"
        title="التطبيق الثاني على بوتستراب"
        type="play"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAy0dU3C3_lNRTSTtqePEsI2"
        img="elzero.jpg"
        title="التطبيق الثالث على بوتستراب"
        type="play"
      />
    </div>
    <EditBox link="/programming/Web/Front/LearnBootstrap.vue" />
  </div>
</template>
