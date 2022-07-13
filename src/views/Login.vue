<template>
  <div class="container">
    <div class="col-12">
        <h2>Sign In</h2>
        <form @submit.prevent="login">
            <input type="text" v-model="email" placeholder="Email" /><br>
            <input type="text" v-model="password" placeholder="Password" /> <br>
            <button type="submit">Sign In</button>
        </form>
            <router-link to="register">Dont have an account? </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
methods: {
    login(){
        this.$store.dispatch('login', {
            email: this.email,
    password: this.password
        })
    }
}

}
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
}

.container{
    display: flex;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 40%;
    min-height: 50vh;
background: #67595954;
border-radius: 10px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(9.2px);
-webkit-backdrop-filter: blur(9.2px);

}
input{
    position: relative;
    top: 3rem;
    margin: 15px;
    height: 2rem;
    width: 15rem;
    outline: none;
    border: none;
    box-shadow:  6px 6px 24px #a0a0a0,
             -6px -6px 24px #dedede;
    border-radius: 10px;
}

button{
    position: relative;
    top: 5rem;
    margin: 10px;
    height: 2rem;
    width: 15rem;
    outline: none;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    box-shadow:  6px 6px 24px #a0a0a0,
             -6px -6px 24px #dedede;
}

h2{
    margin-top: 1rem;
    font-size: 2rem;
}

</style>