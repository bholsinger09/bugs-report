<template>
  <div class="home">
    <div class="container">

      <img id="vue-logo" alt="Vue logo" src="../assets/logo.png">


      <header>
        <h1>Welcome to your debugger</h1>
      </header>

      <div class="row-12">
        <div class="col">
          <reportform />
        </div>
      </div>
      <div class="row">
        <div class="col-6 card" v-for="bug in bugs" :key="bugs._id">
          <router-link :to="{ name: 'report-details', params: { id: bug._id }}"
            :class="{selected: bug._id==selectedbug}">
            <h4 class="form-text">Title: {{bug.title}}</h4>
            <p class="form-text">User: {{bug.user}}</p>
            <p class="form-text">creator: {{bug.creator}}</p>
            <p class="form-text">bug description: {{bug.description}}</p>
            <p class="form-text">bug completed status: {{bug.closed}}</p>
          </router-link>
        </div>
        <div class="col-6">

        </div>

      </div>
    </div>

  </div>

</template>

<script>
  // @ is an alias to /src

  import reportform from '@/components/report-form.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getBugs')
    },
    computed: {
      bugs() {
        return this.$store.state.bugs;
      },
      selectedbug() {
        return this.$store.state.bug;
      }

    },
    components: {

      reportform

    },
    methods: {
      selectBug(id) {
        this.$store.dispatch("setBugById", id);
      }
    }


  }
</script>

<style scoped>
  .form-text {
    color: royalblue;

  }

  .card {
    background-color: black
  }

  header {
    color: red
  }

  #vue-logo {
    height: 5vh;
    width: 5vw;
  }

  .card:hover {
    border: 2px solid blue;
  }

  .selected {
    border: 3px solid green;
  }
</style>