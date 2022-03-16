<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم إطارات العمل"
      info="طور مهاراتك مع افضل إطارات العمل مع الجافا سكريبت"
    />
    <Note>
      يرجى الانتباه انك لست ملزم بتعلم جميع اطارات العمل، لكن يفضل البحث و الإختيار بين هذه الإطارات لذلك يستحسن مشاهدة المقدمة
    </Note>
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/watch?v=YRVavS9SzBw"
        img="elzero.jpg"
        title="الزيرو - مقدمة وتعريف"
        type="play"
        :top="true"
      />
      <hr>
      <AddCourse 
        link ="https://ar.reactjs.org/docs/getting-started.html"
        img="react.svg"
        title="المستندات الرسمية لـ react"
        type="file"
        :top="true"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PL1FWK-sgJ9el-axKTMU_1l5PEyv7tn-wk"
        img="react.svg"
        title="دورة رياكت - react"
        type="play"
      />
      <AddCourse 
        link ="https://www.youtube.com/watch?v=QDGe4emCPG0&t=236s"
        img="react.svg"
        title="تعلم رياكت بفيديو واحد"
        type="play"
      />
      <hr>
      <AddCourse 
        link ="https://vuejs.org/guide/"
        img="vue.svg"
        title="المستندات الرسمية لـ Vue.js"
        type="file"
        :top="true"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgeQIfSDtEGVvvSEPDkL_1f"
        img="vue.svg"
        title=" دورة Vue.js"
        type="play"
      />
      <hr>
      <AddCourse 
        link ="https://angular.io/docs"
        img="angular.png"
        title="المستندات الرسمية لـ angular"
        type="file"
        :top="true"
      />
      <AddCourse 
        link ="https://www.youtube.com/results?search_query=%D8%AF%D9%88%D8%B1%D8%A9+angular&sp=EgIQAw%253D%253D"
        img="angular.png"
        title="يوتيوب - دورات angular"
        type="play"
      />
    </div>
    <EditBox link="/programming/Web/Front/LearnFramework.vue" />
  </div>
</template>
