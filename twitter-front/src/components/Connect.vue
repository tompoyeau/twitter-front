<template>
  <v-container>
    <v-card title="Connexion" class="mx-auto pa-10" elevation="10" max-width="550" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        density="compact"
        placeholder="Entrez votre email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Mot de passe
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Entrez votre mot de passe"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-btn block class="" size="large" variant="tonal"> Se connecter </v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Connect",
  data: () => ({
    visible: false,
  }),
};
</script>
