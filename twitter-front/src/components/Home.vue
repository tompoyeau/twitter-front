<template>
  <v-container>
    <v-row>
      <v-progress-circular
        v-if="load"
        class="mx-auto"
        :size="70"
        :width="7"
        color="surface"
        indeterminate
      ></v-progress-circular>

      <v-col md="6" sm="12" v-for="tweet in tweets">
        <v-card class="ma-5" variant="tonal">
          <v-card-title>
            <router-link
              :to="{
                name: 'ProfilView',
                params: { id: tweet.userID.id },
              }"
            >
              <v-avatar color="surface-variant">
                <v-img
                  alt="Avatar"
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                ></v-img>
              </v-avatar>
              {{ tweet.userID.username }}
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
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { format } from "date-fns"
export default {
  name: "Home",
  data() {
    return {
      tweets: [],
      load: true,
      like: false,
    };
  },
  created() {
    axios.get("http://api.twitter.local/api/tweets").then((res) => {
      this.tweets = res.data;
      this.load = false;
    });
  },
  methods: {
    format(date) {
      return format(new Date(date), 'dd/MM/yyyy');
    }
  }
};
</script>

<style scoped>
a {
  color: #00e676;
  text-decoration: none;
}
</style>
