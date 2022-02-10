<template>
  <div className='alert'>
    <i class="fas fa-exclamation-triangle"></i>
    <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  name:'Alert',
  props:{
    info:String,
  }
}
</script>