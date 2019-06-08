<template>
  <div>

    <form class="debugger-form" @submit.prevent="getBugs">
      <p>Reported By:</p>
      <input class="form-input" type="text" placeholder="enter name">
      <p>Title :</p>
      <input class="form-input" type="text" placeholder="Enter Bugs">
      <p>Enter Description of Bug</p>
      <input class="form-input" id="description" type="text" placeholder="Description Of Bug">


    </form>
    <button class="submit-button" type="submit">Report</button>
  </div>
</template>

<script>

  export default {
    name: 'reportform',
    data() {
      return {};

    },
    computed: {


    },
    methods: {

      getBugs() {

        this.$store.dispatch("getBugs")

      }

    },
    props: {
      msg: String
    }



  }


</script>

<style scoped>
  *p {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  #description {
    padding: 1rem;
  }

  .submit-button {
    margin-top: 2rem;
  }
</style>