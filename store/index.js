import cookieparser from 'cookieparser'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null
    let board = []
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      user = (parsed.user && JSON.parse(parsed.user)) || null
      board = (parsed.board && JSON.parse(parsed.board)) || []
    }

    commit('auth/setUser', user)
    commit('board/setItems', board)
  }
}