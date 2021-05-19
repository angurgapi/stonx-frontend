<template>
  <div class="wallet">
    <h2 class='wallet-title'>Мой кошелек</h2>
    <table class="uk-table uk-table">
      <thead>
        <tr>
          <td>валюта</td>
          <td>баланс</td>
          <td>старт цена</td>
          <td>текущая цена</td>
          <td>прибыль</td>
          <td>stonks, %</td>
          <td>x</td>        
       </tr>
      </thead>
      <tbody>
        <tr v-for="coin, index in coins.filter(coin => coin.username === this.$store.getters['auth/username'])">
          <td class="uk-width-1-6">{{ coin.symbol }}</td>          
          <td class="uk-width-1-6" ref='inWallet'>{{ coin.amount }}</td>
          <td class="uk-width-1-6" ref='initPrice'>{{ coin.initPrice }}</td>
          <td class="uk-width-1-6" ref="`currentOf${coin.symbol}`">{{ currentPrice(coin) }}</td>
          <td class="uk-width-1-6" ref='gainings'>{{ currentProfit(coin) }}</td>
          <td class="uk-width-1-6"><p ref='stonks'>{{ currentStonks(coin) }}</p></td> 
          <td class="uk-width-1-7"><a><span class="uk-badge" style="background: #1C1C1C;" @click="removeFromWallet(coin.id)">-</span></a></td>                
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="sass">
.wallet table thead
  border-bottom: 2px solid rgba(0,0,0,.4)
</style>

<script>
  import { mapMutations } from 'vuex'
  import coinsQuery from '~/apollo/queries/coins/coins'
  import strapi from '~/utils/Strapi'
  export default{
    data(){
      return{
        coins: [         
        ],                
      }
    },
    methods:{
        
    currentPrice(coin){
      let smbl = coin.symbol
      let thisCoin = this.$parent.coins.filter(coin => {
            return coin.symbol.toLowerCase().includes(smbl.toLowerCase())
          })[0]
      return parseFloat(thisCoin.price).toFixed(4)
    },
    currentProfit(coin){
      let prft = (this.currentPrice(coin) - coin.initPrice) * coin.amount
      return prft.toFixed(4)
    },
    currentStonks(coin){
      let stonks = coin.initPrice * coin.amount / this.currentProfit(coin)
      return stonks.toFixed(2)
    },
    async removeFromWallet(id){
      try {
        await strapi.deleteEntry('coins', id)
        alert('Монета удалена')
        location.reload()
        
      } catch (err) {
        this.loading = false
        console.log('Ошибка')
      }
    },
  },
  apollo: {
    coins: {
      prefetch: true,
      query: coinsQuery,
      variables () {
        return { username: this.$store.getters['auth/username'] }
      }
    }
  },

}
</script>