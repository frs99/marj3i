<template>
  <div class="navbar">
    <section class="header">
      <div class="logo" style="cursor: pointer;">
        <img src="/assets/img/logo.png">
      </div>
      <div class="list-nav">
        <nav>
          <ul class="headerList">
              <li>
                <a href="/">الرئيسية</a>
              </li>
              <li>
                <a href="/">مانقدمه</a>
              </li>
              <li>
                <a href="/about">من نحن</a>
              </li>
          </ul>
        </nav>
        <a class="a-support" href="https://marj3i.github.io/about/#support">
          <div class="support">
              <i class="fas fa-award" aria-hidden="true"></i>
              <p>ادعمنا</p>
          </div>
        </a>
        <div class="navbar">
          <i class="fas fa-bars" aria-hidden="true"></i>
          <i class="fas fa-times close" aria-hidden="true"></i>
        </div>
      </div>
    </section>
  </div>
  <router-view/>
</template>

<script>
export default {
  name:'Navbar',
}
</script>