
export const state = () => ({
  list: []
})

export const mutations = {
  add (state, { text }) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, index) {
    state.list.splice(index, 1)
  },
  set (state, list) {
    state.list = list
  }
}
export const actions = {
  async fetch ({ commit }) {
    const response = await this.$axios.$get('/cars')
    commit('set', response)
  },
  async update ({ dispatch }, car) {
    const response = await this.$axios.post('cars', car)
    if (response.status === 200) {
      dispatch('fetch')
    }
  },
  async delete ({ commit }, { id, index }) {
    await this.$axios.$delete('/cars/' + id)
    commit('remove', index)
  }
}
