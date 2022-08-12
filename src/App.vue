<template>
  <div id="app">
    <Main />
    <app-footer/>
  </div>
  
</template>

<script>
import Main from '@/views/Main.vue'
import footer from '@/views/footer.vue'

export default {
  name: 'app',
  components: {
    Main,
    'app-footer':footer,
   
    
},
}
</script>

<style lang="scss">
body{
  background-color: #e4e4e4 !important;
	font-family: Open Sans !important;
  margin-top: 10% !important;
  margin-bottom: 50px !important;
}
</style>
