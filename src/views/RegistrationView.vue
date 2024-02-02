<template>
  <div class="registration-form">
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Registration</div>

      <v-text-field v-model="userData.name" density="compact" placeholder="Your Name" prepend-inner-icon="mdi-account" variant="outlined"></v-text-field>

      <v-text-field v-model="userData.email" density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password
      </div>

      <v-text-field v-model="userData.password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'" density="compact" placeholder="Create a password" prepend-inner-icon="mdi-lock-outline" variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

      <v-btn block class="mb-8" color="green" size="large" variant="tonal" @click="handleRegistration">
        Register
      </v-btn>

      <v-card-text class="text-center">
        <!-- Aggiunto il link per tornare alla vista di accesso -->
        <router-link to="/" class="text-blue text-decoration-none">
          Already have an account? Log in <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import utenti from '../utenti';

export default {
  name: 'RegistrationForm',
  data() {
    return {
      visible: false,
      userData: {
        name: '',
        email: '',
        password: ''
      },
      utenti: [], // Aggiungi l'array utenti nel componente
    };
  },
  mounted() {
    this.utenti = utenti;
  },
  methods: {
    handleRegistration() {
      // Ottieni i dati dell'utente registrato
      const { name, email, password } = this.userData;

      // Crea un nuovo utente
      const newUser = {
        name,
        email,
        password
      };

      // Aggiungi il nuovo utente all'array utenti
      this.utenti.push(newUser);

      // Esegui il login con il nuovo utente (puoi anche memorizzare l'utente nel localStorage se necessario)
      console.log('Utente registrato:', newUser);
      console.log(this.utenti)
    },
  },
};
</script>

<style>
.registration-form {
  background-color: #f5f5f5;
  height: 100%;
  padding-top: 80px;
}
</style>
