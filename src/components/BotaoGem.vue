<template>
  <v-card id="create">
   
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>1</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
        @click="gen2"
      >
        <v-icon>2</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
      <v-icon>3</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
      <v-icon>4</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>5</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-card>
</template>

<script>
import axios from 'axios';
export default {    
    data: () => ({
      direction: 'bottom',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: true,
      right: false,
      bottom: false,
      left: true,
      transition: 'slide-y-reverse-transition',
    }),

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
    methods:{
        gen2: function() {
            return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=151").then(res=>{
      console.log("pegou a lista de pokemons");
      this.pokemons = res.data.results;
      this.filteredPokemons = res.data.results;
      })
        }
    }

}
</script>

<style>
    /* This is for documentation purposes and will not be needed in your application */
    #create .v-speed-dial {
        position: absolute;
    }

    #create .v-btn--floating {
        position: relative;
    }
</style>