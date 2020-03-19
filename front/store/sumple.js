import axiosBase from 'axios'

const axios = axiosBase.create({
  baseURL: 'http://localhost:3333',
  timeout: 30000
})

export default {
  namespaced: true,
  state: {
    nextId: 1,
    todos: [],
    isDoneAll: false
  },
  getters: {
    allTodos(state) {
      return state.todos
    },
    activeTodos(state) {
      return state.todos.filter(t => !t.isDone)
    },
    completedTodos(state) {
      return state.todos.filter(t => t.isDone)
    }
  },
  mutations: {
    incrementId(state) {
      state.nextId += 1
    },
    setTodos(state, todos) {
      // TODO ここダサいのでどうにか死体
      state.todos = Array.isArray(todos) && todos.length > 0 ? todos.map(t => ({ ...t, isDone: JSON.parse(t.isDone) })) : []
      state.nextId = Array.isArray(todos) && todos.length > 0 ? Math.max(...todos.map(t => +t.id)) + 1 : 0
      state.isDoneAll = state.todos.every(t => t.isDone)
    }
  },
  actions: {
    async getTodos({ commit }) {
      try {
        consolelog("TODO OK")
      } catch (e) {
        console.error('Failed to get todos', e.message)
      }
    }
  }
}
