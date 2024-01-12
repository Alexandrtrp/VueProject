import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const localDB = {
  page1: [
      {id:1, date: '20.03.2023', category: 'food', value: 169},
      {id:2, date: '21.03.2023', category: 'navigation', value: 58},
      {id:3, date: '22.03.2023', category: 'sport', value: 450}
  ],
  page2: [
      {id:4, date: '23.03.2023', category: 'entertaiment', value: 980},
      {id:5, date: '24.03.2023', category: 'education', value: 1500},
      {id:6, date: '25.03.2023', category: 'food', value: 200}
  ],
  page3: [
      {id:7, date: '26.03.2023', category: 'entertaiment', value: 980},
      {id:8, date: '27.03.2023', category: 'education', value: 1500},
      {id:9, date: '28.03.2023', category: 'food', value: 200}
  ],
  page4: [
      {id:10, date: '29.03.2023', category: 'entertaiment', value: 980},
      {id:11, date: '30.03.2023', category: 'education', value: 1500},
      {id:12, date: '31.03.2023', category: 'food', value: 200}
  ]
}

export default new Vuex.Store({
  state: {
      paymentsList: [],
      paymentsListIDS: [],
      categoryList: []
  },
  mutations: {
      setPaymentsListData(state, payload){
          const newUniqIdsObj = payload.filter((item)=>{
              return state.paymentsListIDS.indexOf(item.id) <0
          })

          const uniqIds = newUniqIdsObj.map(obj => obj.id)
          state.paymentsList.push(...newUniqIdsObj)
          state.paymentsListIDS.push(...uniqIds)
      },
      setPaymentsCategoryList(state,payload){
        state.categoryList = payload
      },
      addDataToPaymentsList(state,data){
          state.paymentsList.push(data)
      }
  },
  actions: {
      fetchData({commit, dispatch}, page){
          return new Promise ((resolve)=>{
              setTimeout(()=>{
                  const items = localDB[`page${page}`]
                  resolve(items)
              }, 0)
          }).then(res=> {
            dispatch('fetchCategory')
            commit('setPaymentsListData', res)
          })
      },
      fetchCategory({commit}){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const items = ['Sport','Education','Food','Internet','Transport']
                resolve(items)
            }, 0)
        }).then(res=> commit('setPaymentsCategoryList', res))
      }
  },
  getters: {
      getFullPaymentValue: state => {
          return state.paymentsList.reduce((res, cur)=> res + cur.value, 0) 
      },
      getPaymentsList: state => state.paymentsList,
      getCategoryList: state => state.categoryList
  }
})