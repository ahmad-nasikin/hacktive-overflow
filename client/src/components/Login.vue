<template lang="html">
  <div class="row">
    <div class="container">
      <div class="col-md-4">

      </div>
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <div>
              <input v-model="signup.username" type="text" class="form-control" placeholder="Username" required>
            </div>
          </div>
          <div class="form-group">
            <div>
              <input v-model="signup.email" type="email" class="form-control" placeholder="Email" required>
            </div>
          </div>
          <div class="form-group">
            <div>
              <input v-model="signup.password" type="password" class="form-control" placeholder="Password" required>
            </div>
          </div>
          <div>
            <div class="col-sm-12"><br>
              <button type="button" class="btn btn-primary" @click="register()" data-dismiss="modal">Sign Up</button>
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
      signup: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      axios.post('http://localhost:3002/users/signup', {
        username: this.signup.username,
        email: this.signup.email,
        password: this.signup.password
      })
      .then(result => {
        console.log(result)
        this.signup = {
          username: '',
          name: '',
          email: '',
          password: ''
        }
        alert('Sign Up Succes')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
