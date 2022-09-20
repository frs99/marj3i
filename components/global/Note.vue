<template>
  <div class="note">
    <i class="fas fa-info-circle"></i>
    <div>
      <p><slot>default</slot></p>
    </div>
  </div>
</template>

<style>
  .note p{
    text-align: right;
  }
</style>