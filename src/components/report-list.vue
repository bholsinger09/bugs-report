<template>
  <div class="bug-list">
    <ol class="bugs">
      <li v-for="bug in bugs" :key="bug._id" ">{{bug.user}}</li>
        <li v-for=" bug in bugs" :key="bug._id" ">{{bug.creator}}</li>
        <li v-for=" bug in bugs" :key="bug._id" ">{{bug.title}}</li>
        <li v-for=" bug in bugs" :key="bug._id" ">{{bug.description}}</li>
      </ol>
    </div> 
</template>

<script>
  export default {
    name: 'report-list',
    mounted() {
      this.$store.dispatch('getBugs')
    },

    computed:
    {
      bugs() {
        return this.$store.state.results;
      }
    },

  } 
</script>

</script>