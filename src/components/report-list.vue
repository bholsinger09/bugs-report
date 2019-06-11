<template>
  <div class="bug-details">
    <h4 v-for=" bug in bugs" :key="bug._id">{{bug.title}} </h4>
    <h2 v-for=" bug in bugs" :key="bug._id">{{bug.user}}</h2>
    <ol class=" bugs">

      <li v-for=" bug in bugs" :key="bug._id" >{{bug.creator}}</li>
       
        <li v-for=" bug in bugs" :key="bug._id" >{{bug.description}}</li>
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
        return this.$store.state.bugs;
      }
    },

  } 
</script>

</script>