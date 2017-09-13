<template lang="html">
  <div class="row">
    <div class="container">
      <div class="col-md-4">

      </div>
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <div>
              <input v-model="signin.username" type="text" class="form-control" placeholder="Username" required>
            </div>
          </div>
          <div class="form-group">
            <div>
              <input v-model="signin.password" type="password" class="form-control" placeholder="Password" required>
            </div>
          </div>
          <div>
            <div class="col-sm-12"><br>
              <button type="button" class="btn btn-primary" @click="login()" data-dismiss="modal">Sign In</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-4">

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data () {
    return {
      signin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:3002/users/signin', this.signin)
      .then(response => {
        console.log('ini response data token', response.data.dataToken)
        let token = response.data.dataToken
        localStorage.setItem('token', token)
        this.$router.push('/home')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
