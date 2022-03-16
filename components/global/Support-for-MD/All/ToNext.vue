<template>
  <NuxtLink :to="link">
    <div class="to_next">
      <slot></slot>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props:{
    link:String,
  },
  
}
</script>