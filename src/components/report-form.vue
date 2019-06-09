<template>
  <div>

    <form class="bugs" @submit.prevent="getBugs">
      <p>user name:</p>
      <input class="form-input" type="text" placeholder="enter username">
      <p>Reported By:</p>
      <input class="form-input" type="text" placeholder="enter name">
      <p>Title :</p>
      <input class="form-input" type="text" placeholder="Enter Bugs">
      <p>Enter Description of Bug</p>
      <input class="form-input" id="description" type="text" placeholder="Description Of Bug">


    </form>
    <button class="submit-button" type="submit" @submit="getBugs">Report</button>

    <!-- <div class="bug-list">
      <ol class="bugs">
        <li v-for="bug in bugs" :key="bug.id" ">{{bug.user}}</li>
        <li v-for=" bug in bugs" :key="bug.id" ">{{bug.creator}}</li>
        <li v-for=" bug in bugs" :key="bug.id" ">{{bug.title}}</li>
        <li v-for=" bug in bugs" :key="bug.id" ">{{bug.description}}</li>
      </ol>
    </div> -->
  </div>
</template>

<script>

  export default {
    name: 'reportform',
    data() {

      return {};
    },
    computed: {
      bugs() {
        return this.$store.state.results;
      }


    },
    methods: {



      getBugs() {
        this.$store.dispatch("getBugs")
      }
    }, props: { msg: String }
  } </script>
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