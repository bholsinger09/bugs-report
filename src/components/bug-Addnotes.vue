<template>
  <div>
    <!--one row 3 columns  user  message    addNote-->
    <!-- add note should handle the submit of the form for the selected bug-->

    <!--one row 3 columns for the details    delete button-->



  </div>

</template>

<!-- var note = new Schema({
content: { type: String, required: true },
bug: { type: ObjectId, ref: 'Bug' required: true },
creator: { type: String, required: true } //The provided name for who made the note
user: { type: String, required: true },
flagged: { type: String, enum: ["pending", "completed", "rejected"] }
}, { timestamps: true }) -->


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