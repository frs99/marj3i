<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="تعلم الـ CSS"
      info="صفحات التنسيق النمطية ‏ اختصارًا: سي إس إس ‏؛ هي لغة تنسيق لصفحات الويب تهتم بشكل وتصميم المواقع، صممت خصيصا لفصل التنسيق عن محتوى المستند المكتوب وينطبق ذلك على الألوان والخطوط والصور والخلفيات التي تستخدم في الصفحات، بمرونة وسهولة تامة. هذه التقنية تعنى بالمظهر الكلي لصفحات مواقع الويب من ألوان وصور وغيره."
    />
    <div class="all-crs">
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAzjsz06gkzlSrlev53MGIKe"
        img="elzero.jpg"
        title="الدورة الجديدة للزيرو"
        type="play"
        :top="true"
      />
      <AddCourse 
        link ="https://www.youtube.com/playlist?list=PLDoPjvoNmBAzAeIcXA3_JsmSkPKOs9W-Y"
        img="elzero.jpg"
        title="الدورة القديمة للزيرو"
        type="play"
      />
      <AddCourse 
        link ="https://www.youtube.com/watch?v=YnLo6coFa9M"
        img="nor.jpg"
        title=" التعرف على تركيبة - CSS"
        type="play"
      />
      <AddCourse 
        link ="https://www.w3schools.com/css/default.asp"
        img="w3schools.jpeg"
        title="مقدمة css - نصية"
        type="file"
      />
    </div>
  </div>
</template>
