<template>
  <div class='main'>

   <Navbar />
    <Nuxt />
  </div>
</template>

<style lang="sass">

html
  font-family: 'Source Sans Pro'    
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  background: #1C1C1C
  min-width: 100%
*,
*::before,
*::after 
  box-sizing: border-box
  margin: 0
.uk-button
  border-radius: 3px
  background: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%)
  text-transform: capitalize
  font-weight: 600
  color: #1C1C1C
.form-wrapper
  max-width: 500px
legend
  text-align: center
  color: #fff
.uk-input
  background: none
  border: 1px solid #FFFFFF
  box-sizing: border-box
  border-radius: 3px
.page-wrapper
  display: flex
  justify-content: center
</style>

<script>

import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>