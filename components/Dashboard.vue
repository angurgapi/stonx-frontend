<template>
  <div class="board">
    <h2 class='wallet-title'>мои монеточки</h2>
    <table class="uk-table uk-table">
      <thead>
        <tr>
          <td>валюта</td>
          <td>баланс</td>
          <td>купив за</td>
          <td>цена</td>
          <td>навар</td>
          <td>stonks, %</td>
          <td>x</td>        
       </tr>
      </thead>
      <tbody>
        <tr v-for="coin, index in selectedCoins">
          <td class="uk-width-1-5">{{ coin.symbol }}</td>          
          <td class="uk-width-1-5" ref='inWallet'><input class="uk-input" v-model="coin.inWallet" type="text" @change='recordAmount(index, coin.inWallet)'></td>
          <td class="uk-width-1-5" ref='initPrice'><input class="uk-input" v-model="coin.initPrice" type="text" @change='fixInitPrice(index, coin.initPrice)'></td>
          <td class="uk-width-1-5">{{ coin.price }}</td>
          <td class="uk-width-1-5" ref='gainings' @click='calcProfit(index)'><p v-if='!coin.profit'>посчитать</p><p v-if='coin.profit'>{{ coin.profit }}</p></td>
          <td><p ref='stonks'></p></td> 
          <td class="uk-width-1-5"><a><span class="uk-badge" style="background: rgba(255,255,255,.2);" @click="removeFromBoard(index)">-</span></a></td>                
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="sass">
  
</style>

<script>
  import { mapMutations } from 'vuex'
  export default{
    data(){
      return{
        // coins: [         
        // ],                
        gainings: ''
      }
    },
    methods:{
      ...mapMutations({
        addToBoard: 'board/add',
        removeFromBoard: 'board/remove',
        recordAmount: 'board/recordAmount',
        fixInitPrice: 'board/fixInitPrice',
        calcProfit: 'board/calcProfit'
      }),
  },
  computed: {
    selectedCoins(){
      // console.log(this.$store.getters['board/items'])
      return this.$store.getters['board/items']
    },

  }

  }
</script>