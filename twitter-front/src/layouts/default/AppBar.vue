<template>
  <v-bottom-navigation active color="primary">
    <router-link to="/">
      <v-btn value="home">
        <v-icon>mdi-home</v-icon>
        <span>Accueil</span>
      </v-btn>
    </router-link>

    <router-link to="/utilisateurs">
      <v-btn value="users">
        <v-icon>mdi-account-group</v-icon>
        <span>Utilisateurs</span>
      </v-btn>
    </router-link>
  </v-bottom-navigation>
</template>

<script setup></script>

<style scoped>

a {
  color: white;
  margin: 0;
  padding: 0;
}



</style>
