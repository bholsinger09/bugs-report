<template>
  <div class="report-list">
    <h1>List of bugs below</h1>
    <!-- there should be the selected bug details here-->
    <!-- there needs to be a form with the description of the bug
          the description should be editable and added as a note -->
    <!-- below the selected bug details needs to be a close button to change 
         the status to closed  -->
    <reportList />
    <!-- here needs to be where we can add notes-->
    <bugAddNotes />

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