<template>
  <section class="" style="padding-top:20px;">



    <section v-if="game_over" class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <p class="title" style="font-size:250px">
            GAME OVER!
          </p>
        </div>
      </div>
    </section>

<div v-if="!(game_over)" class="columns is-multiline is-mobile">
  <div class="column">
    <div v-for="i of 10"  v-bind:key="i" class="columns is-multiline is-mobile">
      <div v-for="j of 10"  v-bind:key="j" class="column is-1">
        <b-button v-bind:type="color_array_100[(i-1)*10+j-1].color"
         @click="color_change(i,j,color_array_100[(i-1)*10+j-1].value)"
         >
         {{color_array_100[(i-1)*10+j-1].number+1}}
       </b-button>
      </div>
    </div>
  </div>

  <div class="column is-3">
    <div class="columns is-mobile">
      <div class="column">
        <b-button @click="number_change()" style="font-size:70px">
          {{next_number}}
        </b-button>
      </div>
      <div class="column is-7">
      </div>
    </div>
  </div>

  <div class="column is-2">
  </div>

</div>







  </section>
</template>

<script>
import Card from '~/components/Card'


export default {
  name: 'HomePage',

  components: {
    Card
    },

  data(){
    var color_array_100=[];

    for(var i=0,l=100;i<l;i++){
      color_array_100.push({
        number:i,
        value:true,
        color:'is-primary'
      });
    }


    return{
      game_over:false,
      next_number:"Start!",
      next_random:0,
      drop_number:0,
      color_array_100,
      array_100:[...Array(100).keys()].map(i => ++i)
      // https://qiita.com/sakymark/items/710f0b9a632c375fbc31
      ,dammy1:"dammy1 dayo"
      ,status_color:'is-primary'
      ,dammy_value:true
    }
  }
    ,methods:{
      greet: function() {
        this.status_color="is-warning"
      },
      color_change: function(i,j,value) {
        if(value==true){
          value=false;
        }
        else{
          value=true;
        }
        this.color_array_100[(i-1)*10+j-1].value=value;

        if(this.color_array_100[(i-1)*10+j-1].value==true)
        {this.color_array_100[(i-1)*10+j-1].color='is-primary'}
        else{
          this.color_array_100[(i-1)*10+j-1].color='is-warning'
        }

      },
      number_change: function() {
        if(this.array_100.length<1){
          this.game_over=true;
        }
        else{
          this.drop_number=Math.floor( Math.random() * this.array_100.length );
          this.next_random = this.array_100[this.drop_number]-1;
          this.next_number = this.color_array_100[this.next_random].number +1;
          this.color_array_100[this.next_random].value=false;
          this.color_array_100[this.next_random].color='is-warning';
          this.array_100.splice(this.drop_number, 1);
        }
      }

    }
}

</script>
