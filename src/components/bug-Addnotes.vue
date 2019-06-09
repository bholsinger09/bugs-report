<template>
  <div>


  </div>

</template>


<script>
  export default {
    name: 'addNotes',
    mounted() {
      this.$store.dispatch('getBugs')
    },

    computed:
    {
      bugs() {
        return this.$store.state.bugs;
      }

    },

  }

</script>