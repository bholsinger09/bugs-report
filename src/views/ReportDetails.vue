<template>
  <div class="report-list">
    <h1>List of bugs below</h1>
    <!-- there should be the selected bug details here-->
    <!-- there needs to be a form with the description of the bug
          the description should be editable and added as a note -->
    <!-- below the selected bug details needs to be a close button to change 
         the status to closed  -->
    <!-- <h1>{{bug.title}}</h1> -->

    <!-- here needs to be where we can add notes-->
    <bugAddNotes />

  </div>

</template>

<script>
  // @ is an alias to /src


  import bugAddNotes from '@/components/bug-Addnotes.vue'

  export default {
    name: 'report-details',
    props: ["id"],
    mounted() {
      this.$store.dispatch("getSelectedBugById", this.id);


    },
    computed: {
      selectedBug() {

        return this.$store.state.bug;

      }
    },
    data() {
      return {}
    },
    components: {

      bugAddNotes


    }
  }
</script>

<style scoped>

</style>