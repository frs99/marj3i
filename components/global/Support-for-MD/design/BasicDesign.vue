<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم اساسيات التصميم"
      info="و هي الاساسيات الاكاديمية التي يجب فهمها وتعلمها في التصميم"
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLEfT8UZwsCk1gBe5iiDdCXC0f-ZIbsL45"
        img="unnamed.jpg"
        title="1 - كيف اصبح مصمم محترف"
        type="play"
        :top="false"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLPTNqXpQ2tbgmAshpoR02QO4BfyWX3Dzs"
        img="nor.jpg"
        title="2 - قواعد التصميم الأكاديمية"
        type="play"
        :top="true"
      />
    </div>
    <EditBox link="/design/BasicDesign.vue" />
  </div>
</template>