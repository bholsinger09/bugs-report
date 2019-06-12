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

    <button type="submit" class="btn btn-success" @click="submitNote">Add Notes</button>
    <button type="submit" v-if="!selectedBug.closed" class="btn btn-warning" @click="closeBug">Close Bug</button>

    <div class=card>
      <form v-if="!selectedBug.closed" class="notes" @submit.prevent="submitNote">
        <p>user name:</p>
        <input class="form-input" type="text" placeholder="enter username" v-model="user">
        <p>Note Reported By:</p>
        <input class="form-input" type="text" placeholder="enter name" v-model="creator">

        <p>Add note description</p>
        <input class="form-input" id="description" type="text" placeholder="Description Of Bug" v-model="content">

      </form>

      <div class="row">
        <div class="col-6 card" v-for="note in notes" :key="notes._id">


          <p class="form-text">User: {{note.user}}</p>
          <p class="form-text">creator: {{note.creator}}</p>
          <p class="form-text">bug description: {{note.content}}</p>
          <button class="btn btn-warning" @click="deleteNote(note)">Remove Comment</button>

        </div>
        <div class="col-6">

        </div>


      </div>





    </div>

  </div>

</template>

<script>
  // @ is an alias to /src




  export default {
    name: 'report-details',
    props: ["id"],
    mounted() {
      this.$store.dispatch("getSelectedBugById", this.id);
      this.$store.dispatch('getNotes', this.id)

    },
    computed: {
      selectedBug() {
        return this.$store.state.bug;
      },
      notes() {

        return this.$store.state.notes;
      }
    },

    data() {
      return {
        content: "",
        bug: this.id,
        creator: "",
        user: ""
      }
    },
    methods: {

      submitNote() {
        let data =
        {
          content: this.content,
          user: this.user,
          creator: this.creator,
          bug: this.bug
        }

        this.$store.dispatch('createNote', data)
        this.content = ""
        this.user = ""
        this.creator = ""

      },
      deleteNote(note) {

        this.$store.dispatch('deleteNote', note)
      },
      closeBug() {
        this.$store.dispatch('editBug', this.id)

      }

    }

  }
</script>

<style scoped>
  .report-list {
    background-color: black
  }

  h1 {
    margin-bottom: 2em;
    color: red
  }

  em {
    color: red
  }

  h5 {
    color: lightblue
  }
</style>