<template>
  <a :href="link" target="_blanc">
    <div class="edit_page">
      <slot></slot>
    </div>
  </a>
</template>

<script>
export default {
  props:{
    link:String,
  },
}
</script>