<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم اساسيات البرامج"
      info="و هي الاساسيات التي يجب فهمها وتعلمها لبرامج ادوبي "
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLPTNqXpQ2tbjJjJiwegGONmGK4-mzz2Qj"
        img="youtube.jpg"
        title="تعليم أدوبي فوتوشوب"
        type="play"
        :top="false"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLHoKeP3s3W91cGi6lihJ74W2VfjHJl4sg"
        img="youtube.jpg"
        title="تعليم أدوبي اليستريتور"
        type="play"
        :top="false"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLHoKeP3s3W92HTLX_mJeha4SnGdZ9E2VQ"
        img="youtube.jpg"
        title="تعليم ادوبي انديزاين"
        type="play"
        :top="false"
      />
    </div>
    <EditBox link="/design/Adobe.vue" />
  </div>
</template>