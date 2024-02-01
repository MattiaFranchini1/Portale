<template>
  <div class="user-view-container">
    <h1>Utenti della piattaforma</h1>

    <table class="user-table">
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Nome</th>
          <th>Cognome</th>
          <th>Azioni</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>
            <img :src="user.image" alt="User Avatar" class="avatar">
          </td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>
            <v-btn color="blue-darken-4" @click="redirectToDetails(user.id)">Dettagli</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import utenti from '../utenti';

export default {
  data() {
    return {
      users: utenti,
    };
  },
  methods: {
    redirectToDetails(userId) {
      this.$router.push({ name: 'userDetails', params: { userId } });
    },
  },
  mounted() {
    console.log('Utenti caricati', this.users);
  },
};
</script>

<style scoped>
.user-view-container {
  text-align: center;
  margin: 50px auto;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.user-table th, .user-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

/* Stile hover per le righe */
tr:hover {
  background-color: #f0f0f0;
}
</style>
