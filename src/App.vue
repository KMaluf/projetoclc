<template>
    <v-app id="inspire">
    <v-app-bar
      app
      shrink-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        
        <v-row>
          <BotaoGem/>
          <v-col 
            v-for="(poke,index) in filteredPokemons"
            :key="poke.url"
            cols="2"
            >
            <v-sheet
              
              color="white"
              elevation="5"
              height="190"
              width="285"
            > <DexPokemon :name="poke.name" :url="poke.url" :num="index+1"/>
              
            </v-sheet>
            
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

  
  
</template>

<script>
import axios from 'axios';
import DexPokemon from './components/DexPokemon.vue';
import BotaoGem from './components/BotaoGem.vue'

export default {
  name: 'App',
  data(){
    return{
      pokemons:[],
      filteredPokemons: [],
      busca: '',
    }
  },
  

  created: function(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0").then(res=>{
      console.log("pegou a lista de pokemons");
      this.pokemons = res.data.results;
      this.filteredPokemons = res.data.results;
      })
  },
  components:{
    BotaoGem,
    DexPokemon
  },
  methods:{
    toggleTheme(){
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },

    buscar: function(){
      this.filteredPokemons = this.pokemons;
      if(this.busca == '' | this.busca == ' '){
        this.filteredPokemons = this.pokemons;
      }else{
        this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name == this.busca);
      }   
    },
    mudarSprite: function() {
            if(this.isFront){
                this.isFront = false;
                this.currentImg = this.pokemon.front_shiny;
            }else {
                this.isFront = true;
                this.currentImg = this.pokemon.front;
            }
        }
  }
}
</script>

<style>
  .cartinha{
    padding: 50%;
  }
</style>
