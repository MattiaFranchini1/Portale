<template>
  <div class="form-view">
    <v-card v-if="!loggedInUser" class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field v-model="loginData.email" density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Password</div>

      <v-text-field v-model="loginData.password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

      <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="handleLogin">Log In</v-btn>

      <v-card-text class="text-center">
        <router-link to="/registration" class="text-blue text-decoration-none">
          Registrati ora <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import utenti from '../utenti';

export default {
  name: 'HomeView',
  data() {
    return {

      visible: false,
      utenti: [],
      loggedInUser: false,
      loginData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin() {
      const { email, password } = this.loginData;
      const userExists = this.utenti.some(user => user.email === email && user.password === password);
      const user = this.utenti.find(user => user.email === email && user.password === password);

      if (userExists) {
        // Utente trovato, esegui azioni di login
        console.log('Login successo!');
        this.loggedInUser = true;
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.reload();
      } else {
        // Utente non trovato, gestisci l'errore o mostra un messaggio
        console.log('Login fallito. Utente non trovato.');
      }
    }
  },
  mounted() {
    this.utenti = utenti;
    console.log(this.utenti)
  }
}
</script>

<style>
.form-view {
  background-color: #f5f5f5;
  height: 100%;
  padding-top: 80px;
}
</style>
