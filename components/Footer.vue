<template>
  <footer>
    <section class="footer">
    <div class="logo2">
      <img src="~/assets/img/logo.png">
    </div>
    <ul>
      <h1>المحتوى</h1>
      <li><NuxtLink to="/programming/tracks/">تعلم البرمجة</NuxtLink></li>
      <li><NuxtLink to="/information-security/start/">تعلم الأمن المعلوماتي</NuxtLink></li>
      <li><NuxtLink to="#">تعلم التصميم</NuxtLink></li>
      <li><NuxtLink to="#">كل المجالات</NuxtLink></li>
    </ul>
    <ul>
      <h1>الموقع</h1>
      <li><NuxtLink to="#">حول الموقع</NuxtLink></li>
      <li><NuxtLink to="#">السياسة و الخصوصية</NuxtLink></li>
      <li><NuxtLink to="#">للدعم او التطوير</NuxtLink></li>
      <li><NuxtLink to="#">اتصل بنا</NuxtLink></li>
    </ul>

    <ul class="">
      <h1>تابعنا:</h1>
      <li><a class="fb" href="https://github.com/marj3i"><i class="fab fa-github-square" aria-hidden="true"></i>جيتهاب</a></li>
      <li><a class="fb" href="https://twitter.com/frscodes/"><i class="fab fa-twitter-square" aria-hidden="true"></i>تويتر</a></li>
      <li><a class="fb" href="https://t.me/marj3i/"><i class="fab fa-telegram" aria-hidden="true"></i>تلغرام</a></li>
      <li><a class="fb" href="https://www.facebook.com/marj3i/"><i class="fab fa-facebook-square" aria-hidden="true"></i>فيسبوك</a></li>
    </ul>
  </section>

  <section class="copyright" style="cursor: pointer;">
    <p v-on:click="openFrscodes">جميع الحقوق محفوظة - مرجعي - FrsCodes</p>
  </section>
  </footer>
</template>

<script>
export default {
  methods: {
    openFrscodes: function(){
      // window.location.href = "https://frscodes.github.io/"
      open("https://frscodes.github.io/")
    }
  },
}
</script>