<template>
  <div class="box-list-crs">
    <InfoCourse 
      title="دليل تعلم البرمجة"
      info="أريد تعلم البرمجة لكنني لا أعرف من أين أبدأ! هذه هي أكثر عبارة تتردد على سمعي من حديثي العهد بالبرمجة، إذ يأتيني هذا السؤال مرارًا وتكرارًا؛ وفي كل مرة أحاول أن أجيب عنه في سياقه، أجد أنني أضيف معلومات جديدة على إجاباتي السابقة، لذا قررت كتابة هذا المقال بعنوان 'تعلم البرمجة' لعله يفيد الراغبين في تعلم تطوير التطبيقات في بدء رحلتهم مع البرمجة."
    />
    <Alert>كتابة / ترجمة عبد اللطيف ايمش</Alert>
    <Note>
      حرصًا على تنظيم المقالة ولتسهيل الوصول إلى القسم الذي تريده بسهولة، سنذكر هنا روابط المحتويات باختصار:
    </Note>
    <div class="all-crs">
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D9%85%D8%A7-%D9%87%D9%8A-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%D8%9F"
        img="hsoub.webp"
        title="ما هي البرمجة؟"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D8%AA%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%D8%9F"
        img="hsoub.webp"
        title="لماذا تتعلم البرمجة؟"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D9%85%D8%A7-%D8%B9%D9%84%D9%8A%D9%83-%D9%85%D8%B9%D8%B1%D9%81%D8%AA%D9%87-%D9%84%D8%AA%D8%B5%D8%A8%D8%AD-%D9%85%D8%A8%D8%B1%D9%85%D8%AC%D8%A7"
        img="hsoub.webp"
        title="ما عليك معرفته لتصبح مبرمجًا"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D8%A7%D9%84%D8%A3%D8%AF%D9%88%D8%A7%D8%AA-%D8%A7%D9%84%D9%84%D8%A7%D8%B2%D9%85%D8%A9-%D9%84%D9%84%D8%A8%D8%AF%D8%A1-%D9%81%D9%8A-%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9"
        img="hsoub.webp"
        title="الأدوات اللازمة للبدء في تعلم البرمجة"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D9%84%D9%85%D8%A7%D8%B0%D8%A7-%D9%87%D9%86%D8%A7%D9%83-%D8%A7%D9%84%D8%B9%D8%AF%D9%8A%D8%AF-%D9%85%D9%86-%D9%84%D8%BA%D8%A7%D8%AA-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9%D8%9F"
        img="hsoub.webp"
        title="لماذا هناك العديد من لغات البرمجة؟"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D9%85%D9%81%D8%A7%D9%87%D9%8A%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9"
        img="hsoub.webp"
        title="مفاهيم البرمجة"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D9%85%D8%B5%D8%A7%D8%AF%D8%B1-%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9"
        img="hsoub.webp"
        title="مصادر تعلم البرمجة"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%AE%D8%AF%D9%85"
        img="hsoub.webp"
        title="تطوير واجهات المستخدم"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D9%84%D9%81%D9%8A%D8%A9"
        img="hsoub.webp"
        title="تطوير الواجهات الخلفية"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D8%AA%D8%B9%D9%84%D9%85-%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%AC%D9%88%D8%A7%D9%84"
        img="hsoub.webp"
        title="تعلم تطوير تطبيقات الجوال"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%A3%D9%84%D8%B9%D8%A7%D8%A8"
        img="hsoub.webp"
        title="تطوير الألعاب"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%A7%D9%84%D8%A3%D9%86%D8%B8%D9%85%D8%A9-%D8%A7%D9%84%D9%85%D8%AF%D9%85%D8%AC%D8%A9"
        img="hsoub.webp"
        title="تطوير الأنظمة المدمجة"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D8%AA%D8%B7%D9%88%D9%8A%D8%B1-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA-%D8%B3%D8%B7%D8%AD-%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8"
        img="hsoub.webp"
        title="تطوير تطبيقات سطح المكتب"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D9%83%D9%8A%D9%81%D9%8A%D8%A9-%D8%A7%D8%AE%D8%AA%D9%8A%D8%A7%D8%B1-%D9%84%D8%BA%D8%A9-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%A7%D9%84%D8%AA%D9%8A-%D8%AA%D9%86%D8%A7%D8%B3%D8%A8%D9%83"
        img="hsoub.webp"
        title="كيفية اختيار لغة البرمجة التي تناسبك"
        type="file"
        :top=false
      />
      <AddCourse 
        link ="https://academy.hsoub.com/programming/general/%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-r662/#%D9%86%D8%B5%D8%A7%D8%A6%D8%AD-%D9%84%D8%AA%D8%B9%D9%84%D9%85-%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9"
        img="hsoub.webp"
        title="نصائح لتعلم البرمجة"
        type="file"
        :top=false
      />
    </div>
  </div>
</template>