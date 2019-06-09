<template>
  <div class="report-list">
    <h1>List of bugs below</h1>
    <reportList />
  </div>

</template>

<script>
  // @ is an alias to /src

  import reportList from '@/components/report-list.vue'
  import bugAddNotes from '@/components/bug-Addnotes.vue'

  export default {
    name: 'report-details',
    mounted() {
      this.$store.dispatch('getBugs')
    },
    components: {
      reportList,
      bugAddNotes


    }
  }
</script>

<style scoped>

</style>