export const state = () => ({
  list: []
})
export const mutations = {
  add (state, item) {
    state.list.push(
      item
    )
  },
  remove (state, index) {
    state.list.splice(index, 1)
  },
  set (state, list) {
    state.list = list
  }
}
export const getters = {
  usersWithAuto: (state, getters, rootState) => {
    return state.list.map((user) => {
      const car = rootState.cars.list.find(car => car.carId === +user.carId)
      return Object.assign({}, user, { car })
    })
  }
}
export const actions = {
  async fetch ({ commit }) {
    const response = await this.$axios.$get('users')
    commit('set', response)
  },
  async update ({ dispatch }, user) {
    const response = await this.$axios.post('users', user)
    if (response.status === 200) {
      dispatch('fetch')
    }
  },
  async delete ({ commit }, { id, index }) {
    await this.$axios.$delete('users/' + id)
    commit('remove', index)
  }
}
