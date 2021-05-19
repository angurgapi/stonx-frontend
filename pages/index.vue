<template>
  <div class="page-wrapper">
    <div class="page-grid">
      <div v-if='username' class='left'>
        <Wallet />
      </div>
      <div v-else>
        <div class="uk-margin">
          <p>
            Для доступа к кошельку необходимо
          <router-link :to="{ name: 'login'}">
             войти
          </router-link> или  <router-link :to="{ name: 'register'}">зарегистрироваться
          </router-link>
          </p>
          </div>
        
      </div>

      <div class="currencies">
    
        <div class='search-wrapper'>
        <form class="uk-search uk-search-default">
            <span uk-search-icon></span>
            <input class="uk-search-input" v-model="query" type="search" placeholder="Искать...">
        </form>
      </div>

       <table class="uk-table uk-table">
          <thead>
              <tr>
                <td>валюта</td>
                <td>цена</td>
                <td>+</td>        
              </tr>
          </thead>
          <tbody>
              <tr v-for="coin in filteredList">
                <td>{{ coin.symbol }}</td>
                <td>{{ parseFloat(coin.price).toFixed(5) }}</td>
                <td><a><span class="uk-badge" style="background: rgba(255,255,255,.2);" @click="addToWallet(coin)">+</span></a></td>                
              </tr>
          </tbody>
      </table>
      <div class="coin-modal" ref='modal'>
        <span class="uk-badge" style="background: rgba(0,0,0,.4); position: absolute; right: 3px; top: 3px" @click="closeModal">x</span></a>
        <h4 class="coin-title" ref='modalTitle'></h4>
        <form class="uk-form" @submit.stop.prevent="handleSubmit">
          <label class="uk-form-label">Количество</label>
            <input class="uk-input" v-model="amount" type="text">
            <label class="uk-form-label">Старт цена</label>
            <input class="uk-input" v-model="initPrice" type="text">
            <button class="uk-button uk-button-primary" name="button">Добавить</button>
        </form>
      </div>
    </div>
  </div>
</div>   
</template>


<style lang="sass">
.page-wrapper 
  max-width: 100%
  margin: 0 auto
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center
.search-wrapper
  margin-top: 20px
  .uk-search input
    border-radius: 5px
.currencies
  color: rgba(255,255,255,.8)
  max-width: 100vw
  table
    thead
      color: #f5cb42
      font-weight: 600
      text-transform: uppercase
.page-grid
  margin-top: 30px
  width: 95%
  display: grid
  grid-template-columns: 2fr 1fr
.wallet
  display: flex
  flex-direction: column
  background: rgba(255,255,255,.6)
  padding: 10px 0 10px 0
  border-radius: 10px
  margin-top: 20px
  color: #1C1C1C
.uk-table td
  padding: 5px
.coin-modal
  display: none
  flex-direction: column
  position: absolute
  top: 30%
  left: 40vw
  width: 250px
  margin: auto
  z-index: 1002
  background: #fff
  padding: 20px
  border-radius: 5px
  input
    text-align: center
    border: 2px solid rgba(0,0,0,.4)
  .uk-button
    margin-top: 10px

@media(max-width:600px)
  .page-grid
    grid-template-columns: 1fr
  .wallet table
    font-size: 12px
  .uk-table td
    padding: 3px
  .currencies table td
    max-width: 100px
</style>

<script>
  import Wallet from '~/components/Wallet.vue'
  import strapi from '~/utils/Strapi'
  import { mapMutations } from 'vuex'
  export default{
    data(){
      return{
        coins: [         
        ],
        query: '',
        symbol: '',
        amount: 0,
        initPrice: 0          
      }
    },

    computed: {   
      username() {
        return this.$store.getters['auth/username']
      },
      filteredList() {
      return this.coins.filter(coin => {
        return coin.symbol.toLowerCase().includes(this.query.toLowerCase())
      })
    }
  },
   async asyncData(context) {  
    try {
      return await fetch("https://api.binance.com/api/v3/ticker/price")
        .then(res => res.json())
        .then(data => {
          return {
            coins: data
          }
        });
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
    }
  },

  mounted(){
    setInterval(() => {
    this.$nuxt.refresh()
    }, 4000);  
  },

  methods:{
     addToWallet(coin){
      this.$refs.modal.style.display = 'flex'
      this.$refs.modalTitle.innerText = coin.symbol
     },
    async handleSubmit() {
      this.loading = true
      try {
        await strapi.createEntry('coins', {
          symbol: this.$refs.modalTitle.textContent,
          amount: parseFloat(this.amount),
          initPrice: parseFloat(this.initPrice),
          username: this.username     
        })
        alert('Монета добавлена в кошелек')
        location.reload()
        this.$refs.modal.style.display = 'none'      
        this.$router.push('/')
      } catch (err) {
        this.loading = false
        console.log('Ошибка')
      }
    },
    closeModal(){
      this.$refs.modal.style.display = 'none'   
    }
  },


  }
</script>