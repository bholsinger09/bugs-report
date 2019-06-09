<template>
  <div class="report-list">
    <h1>List of bugs below</h1>
    <reportList />
  </div>

</template>

<script>
  // @ is an alias to /src

  import reportList from '@/components/report-list.vue'

  export default {
    name: 'report-details',
    mounted() {
      this.$store.dispatch('getBugs')
    },
    components: {
      reportList


    }
  }
</script>

<style scoped>

</style>