<template>
  <div class='header'>    
    <div class="uk-navbar-left">
            <nuxt-link to="/"><div class="logo"></div></nuxt-link>
        </div>
        
    <div class="navbar-right" ref='nbar'>
      <nuxt-link class='navlink' to="/" v-if='username'>{{ username }}</nuxt-link>
      <a href='#' v-if='username' @click="logout">Выход</a>
      <nuxt-link v-if='!username' to="/register">Регистрация</nuxt-link>
      <nuxt-link v-if='!username' to="/login">Вход</nuxt-link>
      

    </div>        
      
    <div class='hamburger' @click='processBars()'>
      <font-awesome-icon :icon="['fas', 'bars']" ref='bars' class='hambars'/>
      <font-awesome-icon :icon="['fas', 'times']" ref='times' class='times hid'/>
    </div> 
    
  
 </div>
</template>

<style lang='sass'>
@font-face
    font-family: 'Roboto'
    font-style: normal
    font-weight: 300
    font-display: swap
    src: url('~assets/fonts/RobotoMono.ttf') format('truetype')
.logo
  border-radius: 50%
  height: 40px
  width: 40px
  background-image: url("/img/stonks.jpg")
  background-size: cover
  margin-left: 10px
.header
  max-width: 1400px
  display: flex
  flex-direction: row
  justify-content: space-between
  margin-top: 30px
  .navlink
    color: #f5cb42
.hamburger
  position: absolute
  z-index: 1010
  right: 0px
  top: 30px
  height: 50px
  width: 50px
  display: none
  align-items: center
  justify-content: center
  .hambars, .times
    color: #fff
    height: 30px
    width: 30px
.hid
  display: none
.eng
  font-weight: 600
.language
  list-style: none
  display: flex
  flex-direction: row
  text-transform: uppercase
  padding-left: 0
.navbar-right
  display: flex
  justify-content: center
  align-items: center  
  flex-direction: row
  a
    text-decoration: none
    font-family: Roboto
    color: rgba(255, 255, 255, .9)
    font-size: 18px
    font-weight: 300
    margin-right: 20px
.nuxt-link-exact-active
    color: rgba(255, 255, 255, 1)
.nuxt-link, .nuxt-link-active
  text-decoration: none
  color: rgba(255, 255, 255, .9) 


@media(max-width: 600px)
  .navbar-right
    display: none
    margin-top: 30px
    a
      font-size: 36px
  .hamburger
    display: flex
  .header
    flex-direction: column

.showNav
  display: flex
  flex-direction: column
  z-index: 1002 

</style>

<script>
  import { mapMutations } from 'vuex'
  export default{
    computed: {   
      username() {
        return this.$store.getters['auth/username']
      }
  },
    methods: {      
      processBars(){
        function hamburger(bar, icon){
          bar.classList.toggle('showNav')
          icon.classList.toggle('hid')
          }
          this.$refs.times.classList.toggle('hid')      
          let mobBar = this.$refs.nbar
          let bars = this.$refs.bars
          let menuLinks = document.querySelectorAll('a')
          hamburger(mobBar, bars)
          menuLinks.forEach((menuLink)=>{ 
            menuLink.addEventListener("click", hamburger(mobBar, bars)) 
        })
      },
    ...mapMutations({
      logout: 'auth/logout'
    })
    }
  }
</script>