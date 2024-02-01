<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" expand-on-hover>
      <v-list>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item to="/">
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/users">
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Utenti</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/products">
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-package</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Prodotti</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/cart">
            <v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-cart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Carrello</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="orange darken-2">
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">FRANK SHOP</v-toolbar-title>

      <v-spacer></v-spacer>


    </v-app-bar>

    <v-main style="padding: 20px;">
      <router-view></router-view>
    </v-main>

    <!-- <v-footer app color="orange darken-2" dark class="text-center align-center">
      <v-spacer></v-spacer>
      <span class="white--text mb-2 text-center align-center">&copy; 2024 FRANK SHOP. Tutti i diritti riservati.</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
