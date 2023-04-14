<template>
  <v-container>
    <h3>Nos utilisateurs</h3>
    <v-row>
      <v-progress-circular
        v-if="load"
        class="mx-auto"
        :size="70"
        :width="7"
        color="surface"
        indeterminate
      ></v-progress-circular>

      <router-link
      v-for="user in users"
      class="ma-5"
      :to="{
          name: 'ProfilView',
          params: { id: user.id },
        }"
        >
        <v-btn>
            {{ user.username }}
        </v-btn>
        </router-link>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      users: [],
      load: true,
    };
  },
  created() {
    axios.get("http://api.twitter.local/api/users").then((res) => {
      this.users = res.data;
      this.load = false;
    });
  },
};
</script>

<style scoped>
a {
    text-decoration: none;
    background-color: white;
}
</style>
