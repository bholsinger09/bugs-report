<template>
  <div>

    <form class="debugger-form" @submit.prevent="getBugs">
      <input class="form-input" type="text" placeholder="enter bugs">
      <button class="submit-button" type="submit">Submit</button>
    </form>
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>

  export default {
    name: 'reportform',
    data() {
      return {};

    },
    computed: {
      message() {
        return ('edit me')
      }

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