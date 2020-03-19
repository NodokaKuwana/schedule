// import axiosBase from 'axios'

// const axios = axiosBase.create({
//   baseURL: 'http://localhost:3333',
//   timeout: 30000
// })

// export default {
//   namespaced: true,
//   state: {
//     nextId: 1,
//     todos: [],
//     isDoneAll: false
//   },
//   getters: {
//     allTodos(state) {
//       return state.todos
//     },
//     activeTodos(state) {
//       return state.todos.filter((t) => !t.isDone)
//     },
//     completedTodos(state) {
//       return state.todos.filter((t) => t.isDone)
//     }
//   },
//   mutations: {
//     incrementId(state) {
//       state.nextId += 1
//     },
//     setTodos(state, todos) {
//       // TODO ここダサいのでどうにか死体
//       state.todos =
//         Array.isArray(todos) && todos.length > 0
//           ? todos.map((t) => ({ ...t, isDone: JSON.parse(t.isDone) }))
//           : []
//       state.nextId =
//         Array.isArray(todos) && todos.length > 0
//           ? Math.max(...todos.map((t) => +t.id)) + 1
//           : 0
//       state.isDoneAll = state.todos.every((t) => t.isDone)
//     }
//   },
//   actions: {
//     async getTodos({ commit }) {
//       try {
//         commit('setTodos', (await axios.get('/todos')).data)
//       } catch (e) {
//         console.error('Failed to get todos', e.message)
//       }
//     },
//     async addTodo({ commit, dispatch, state }, text) {
//       const todo = { id: state.nextId, text, isDone: false }
//       commit('incrementId')
//       try {
//         await axios.post('/todos', todo)
//         dispatch('getTodos')
//       } catch (e) {
//         console.error('Failed to add todo', e.message)
//       }
//     },
//     async toggleTodo({ commit, dispatch, state }, id) {
//       const target = state.todos.find((t) => t.id === id)
//       if (!target) {
//         console.log(`Todo[${id}] is not found`)
//         return
//       }
//       try {
//         await axios.put(`/todos/${id}`, { ...target, isDone: !target.isDone })
//         dispatch('getTodos')
//       } catch (e) {
//         console.error('Failed to toggle todo', e.message)
//       }
//     },
//     async toggleAllTodo({ commit, dispatch, state }) {
//       try {
//         await Promise.all(
//           state.todos.map(async t => axios.put(`/todos/${t.id}`, { ...t, isDone: !state.isDoneAll }))
//         )
//         dispatch('getTodos')
//       } catch (e) {
//         console.error('Failed to toggle todo', e.message)
//       }
//     },
//     async deleteTodo({ commit, dispatch, state }, id) {
//       const target = state.todos.find((t) => t.id === id)
//       if (!target) {
//         console.log(`Todo[${id}] is not found`)
//         return
//       }
//       try {
//         await axios.delete(`/todos/${id}`)
//         dispatch('getTodos')
//       } catch (e) {
//         console.error('Failed to delete todo', e.message)
//       }
//     }
//   }
// }
