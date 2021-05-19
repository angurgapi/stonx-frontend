import Cookies from 'js-cookie'

export const state = () => ({
  items: []
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  add(state, item) {
     state.items.push({
        ...item
      })   
    Cookies.set('board', state.items)
  },
  remove(state, id) {
    // const record = state.items[id]
    // if (record.quantity > 1) {
    //   record.quantity--
    // } else {
    //   const index = state.items.findIndex(i => i.symbol === item.symbol)
          // }
    state.items.splice(id, 1)
    Cookies.set('board', state.items)
  },
  recordAmount(state, id, amount){
    console.log(state.items[id].inWallet)
    // state.items[id].inWallet = amount
    
    // state.items[id].inWallet = amount
    // console.log(state.items[id].inWallet)
  },
  fixInitPrice(state, id, initPrice){
    state.items[id].initPrice = initPrice    
  },
  calcProfit(id){
    const record = state.items[id]
    if(parseFloat(record.inWallet) && parseFloat(record.initPrice)){
      let prft = parseFloat(record.inWallet) * parseFloat(record.price) - parseFloat(record.inWallet) * parseFloat(record.initPrice)
      record.profit = prft.toFixed(4)
    }
  },
  emptyList(state) {
    state.items = []
    Cookies.set('board', state.items)
  }
}

export const getters = {
  items: state => {
    return state.items
  },
  price: state => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    )
  },
  numberOfItems: state => {
    return state.items.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    )
  }
}