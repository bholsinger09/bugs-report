<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Welcome to your debugger</h1>
    <reportform />
  </div>

</template>

<script>
  // @ is an alias to /src

  import reportform from '@/components/report-form.vue'

  export default {
    name: 'home',
    components: {

      reportform

    }
  }
</script>