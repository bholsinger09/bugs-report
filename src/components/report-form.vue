<template>
  <div>
    <input v-model="message" placeholder="edit me">
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
    props: {
      msg: String
    }



  }


</script>