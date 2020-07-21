const book = {
  state: {
    fileName: '',
    menuVisiable: false
  },
  mutations: {
    SET_FILENAME: (state, fileName) => {
      state.fileName = fileName
    },
    SET_MENUVISIABLE: (state, menuVisiable) => {
      state.menuVisiable = menuVisiable
    }
  },
  // 通过return返回一个promise对象
  actions: {
    setFileName: ({ commit }, fileName) => {
      return commit('SET_FILENAME', fileName)
    },
    setMenuVisiable: ({ commit }, menuVisiable) => {
      return commit('SET_MENUVISIABLE', menuVisiable)
    }
  }
}
export default book
