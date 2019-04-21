// import Vuex from 'vuex'
// import Vue from 'vue'
// Vue.use(Vuex)
// const store = new Vuex.Store({
//   // 1.状态(里面保存数据)
//   state: {
//     count: 20
//   },
//   // 2.mutations方法
//   mutations:{
//      add(state,step){
//          state.count+=step
//      },
//      sub(state,step){
//          state.count-=step
//      }
//   },
//   //3.actions动作
//    actions:{
//        add(context,step){
//            context.commit("add",step)
//        },
//        sub(context,step){
//            context.commit("sub",step)
//        }
//    },
//    //4.
//    getters: {
//     msg: state => {
//       if(state.count>20){
//           return '太大了'
//       }else if(state.count<10){
//           return '太小了'
//       }
//     }
//   }
// })
// export default store
