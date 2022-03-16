<template>
  <div class="edit_githab">
    <a target="_blanc" :href="to + link">عدل محتوى الصندوق على Githab</a>
  </div>
</template>
<script>
export default {
  props:{
    link:String,
  },
  data() {
    return {
      to: 'https://github.com/marj3i/marj3i.github.io/tree/main/components/global/Support-for-MD'
    }
  },
}
</script>
<style>
  .edit_githab {
    margin-top: -20px;
  }
  .edit_githab a{
    font-size: 14px;
    text-decoration:revert;
  }
</style>