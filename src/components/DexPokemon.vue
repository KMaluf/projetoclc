<template>
  <div id="pokemon">
      
      


        <div class="card">
        <div class="card-image">
            <figure>
            <img :src="currentImg" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{num}} - {{name | upper}}</p>
                <button class="" @click="mudarSprite">Virar</button>
                
            </div>
            </div>

            <div class="content">
                
            </div>
        </div>
        </div>





  </div>



</template>

<script>
import axios from 'axios';

export default {
    created: function(){
        axios.get(this.url).then(res =>{
            this.pokemon.type = res.data.types[0].type.name;
            this.pokemon.front = res.data.sprites.front_default;
            this.pokemon.back = res.data.sprites.back_default;
            this.pokemon.front_shiny = res.data.sprites.front_shiny;
            this.currentImg = this.pokemon.front;
            console.log(this.pokemon)
        })
    },

    data(){
        return {
            isFront: false,
            currentImg: '',
            pokemon: {
                type: '',
                front:'',
                back:'',
            }
        }
    },

    props: {
        num: Number,
        name: String,
        url: String
    },
    filters: {
        upper: function(value){
            var newName = value[0].toUpperCase() + value.slice(1);
            return newName;
        }
    },
    methods: {
        mudarSprite: function() {
            if(this.isFront){
                this.isFront = false;
                this.currentImg = this.pokemon.front;
            }else {
                this.isFront = true;
                this.currentImg = this.pokemon.front_shiny;
            }
        }
    }

}
</script>

<style>
    #pokemon{
        margin-top: 1%;
        margin-left: 30%;
    }

    

</style>