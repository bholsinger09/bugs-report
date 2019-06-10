<template>
  <div>

    <form class="bugs" @submit.prevent="handleSubmit">
      <p>user name:</p>
      <input class="form-input" type="text" placeholder="enter username" v-model="user">
      <p>Reported By:</p>
      <input class="form-input" type="text" placeholder="enter name" v-model="creator">
      <p>Title :</p>
      <input class="form-input" type="text" placeholder="Enter Bugs" v-model="title">
      <p>Enter Description of Bug</p>
      <input class="form-input" id="description" type="text" placeholder="Description Of Bug" v-model="description">
      <button class="submit-button" type="submit" @submit="handleSubmit">Report</button>

    </form>


    


  </div>
</template>

<script>

  export default {
    name: 'reportform',
    data() {

      return {
        //this is binded by v-model 
        description: "",
        user: "",
        creator: "",
        title: ""
      };
    },
    mounted() {
      this.$store.dispatch('getBugs')
    },
    computed:
    {
      bugs() {
        return this.$store.state.bugs;
      }
    },

    methods:
    {
      //thiswill call post method from store 
      //this will also add data to current empty array on api 
      handleSubmit() {
        let data =
        {
          closed: false,
          description: this.description,
          user: this.user,
          creator: this.creator,
          title: this.title
        }
        this.$store.dispatch('createPost', data)
        
      }

    },
 
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