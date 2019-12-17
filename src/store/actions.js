export default {
  booking: ({commit}, payload) => {
    let packs = JSON.parse(localStorage.getItem('PACKS') !== null ? localStorage.getItem('PACKS') : '[]')
    if (packs.length > 0) {
      if (packs.filter(x => x.id === payload.id && x.type === payload.type).length < 1) {
        packs.push(payload)
      }
    } else {
      packs.push(payload)
    }
    localStorage.setItem('PACKS', JSON.stringify(packs))
    commit('mutateBooking', packs)
  },
  deleteBooking: ({commit}, payload) => {
    let packs = JSON.parse(localStorage.getItem('PACKS') !== null ? localStorage.getItem('PACKS') : '[]')
    packs = packs.filter((x) => x.id !== payload.id || x.type !== payload.type)
    localStorage.setItem('PACKS', JSON.stringify(packs))
    commit('mutateBooking', packs)
  }
}
