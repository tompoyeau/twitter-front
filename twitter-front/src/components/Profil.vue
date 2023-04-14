<template>
  <v-container>
    <router-link to="/">
      <v-btn prepend-icon="mdi-arrow-left"> Retour  </v-btn>
    </router-link>
    <h1>{{ $route.params.user.username }}</h1>
    <h5>{{ $route.params.user.email }}</h5>

    <h3>Voici les tweets de {{ $route.params.user.username }}</h3>
    <v-col sm="12" v-for="tweet in tweets">
      <v-card class="ma-5" variant="tonal">
          <v-card-title>
            <router-link
              :to="{
                name: 'ProfilView',
                params: { id: $route.params.user.id },
              }"
            >
              <v-avatar color="surface-variant">
                <v-img
                  alt="Avatar"
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                ></v-img>
              </v-avatar>
              {{ $route.params.user.username }}
            </router-link>
          </v-card-title>
          <v-card-subtitle>
            {{ this.format(tweet.date) }}
          </v-card-subtitle>
          <v-card-text>
            {{ tweet.texte }}
          </v-card-text>
          <v-card-actions class="align-content-end">
            <v-spacer></v-spacer>
            <v-btn
              v-if="like"
              class="like"
              @click="like = false"
              icon="mdi-heart"
            ></v-btn>
            <v-btn
              v-else
              class="like"
              @click="like = true"
              icon="mdi-heart-outline"
            ></v-btn>
            <v-btn icon="mdi-comment"></v-btn>
          </v-card-actions>
        </v-card>
    </v-col>
  </v-container>
</template>

<script>
import { format } from "date-fns"
export default {
  name: "Connect",
  data() {
    tweets: [];
    like: false;
  },
  created() {
    this.tweets = this.$route.params.user.tweet;
  },
  methods: {
    format(date) {
      return format(new Date(date), 'dd/MM/yyyy');
    }
  }
};
</script>

<style>

a {
  color: #00e676;
  text-decoration: none;
}
.like {
  color: #00e676;
}
</style>
