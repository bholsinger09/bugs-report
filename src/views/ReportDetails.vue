<template>
  <div class="report-list">
    <h1>Your selected bug :</h1>
    <!-- there should be the selected bug details here-->
    <!-- there needs to be a form with the description of the bug
          the description should be editable and added as a note -->
    <!-- below the selected bug details needs to be a close button to change 
         the status to closed  -->
    <div class="row">
      <div class="col-12">
        <h5>Bug Title: {{selectedBug.title}}</h5>
        <h5>Bug creator: {{selectedBug.creator}}</h5>
        <h5>Bug user: {{selectedBug.user}}</h5>
        <h5>Bug description: {{selectedBug.description}}</h5>
        <h5>Bug Completed: <em>{{selectedBug.closed}}</em></h5>
      </div>
    </div>

    <button class= "btn btn-success">Add Notes</button>

    
    

    <!-- here needs to be where we can add notes-->
   

  </div>

</template>

<script>
  // @ is an alias to /src


  

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
    
  }
</script>

<style scoped>

.report-list {
  background-color: black
}

 h1{
   margin-bottom: 2em;
   color:red
 }
 em{
   color:red
 }
 h5{
   color:lightblue
 }

</style>