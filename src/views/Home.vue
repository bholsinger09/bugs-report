<template>
  <div class="home">
    <img id="vue-logo" alt="Vue logo" src="../assets/logo.png">

    <h1>Welcome to your debugger</h1>
    <reportform />
    <div v-show="bugs"></div>

    
  </div>

</template>

<script>
  // @ is an alias to /src

  import reportform from '@/components/report-form.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getBugs')
    },
    computed:{
      bugs(){
        return this.$store.state.bugs;
      }

    },
    components: {

      reportform

    }
  }
</script>

<style scoped>
  #vue-logo {
    height: 5vh;
    width: 5vw;
  }
</style>