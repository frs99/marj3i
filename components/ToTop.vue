<template>
  <button id="myBtn" title="Go to top"><i class="fas fa-arrow-circle-up"></i></button>
</template>

<script>
export default {
  mounted () {
    let ToTop = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        ToTop.style.display = "block";
      } else {
        ToTop.style.display = "none";
      }
    };

    // When the user clicks on the button, scroll to the top of the document
    ToTop.onclick = function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
}
</script>