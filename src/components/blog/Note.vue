<template>
  <div className='note'>
      <i class="fas fa-info-circle"></i>
      <p>{{info}}</p>
    </div>
</template>

<script>
export default {
  name:'Note',
  props:{
    info:String,
  }
}
</script>i