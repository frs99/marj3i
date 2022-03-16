<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="الدورات الاساسية"
      info="يمكنك من الاسفل اختيار الدورة او المحتوى و البدا"
    />

    <Note>
      لست مجبرا على كل هذا المحتوى ولكنه يستحسن لك
    </Note>
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLnrlZUDQofUv7JE4QIahAyztrQU9bnJmd"
        img="cs5.jpg"
        title="CS5 بالعربية"
        type="play"
        :top=true
      />

      <AddCourse 
        link ="https://harmash.com/tutorials/algorithms/introduction"
        img="harmash.jpg"
        title="دورة الخوارزميات نصية"
        type="file"
        :top=false
      />

      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLCInYL3l2AajqOUW_2SwjWeMwf4vL4RSp"
        img="data.jpg"
        title="دورة تراكيب البيانات"
        type="play"
        :top=false
      />
    </div>
    <EditBox link="/programming/Basiccourses.vue" />
  </div>
</template>