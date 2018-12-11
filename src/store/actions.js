import axios from "axios"
export default {
    
     getusers ({commit, state}) {
        const {name,page,pagesize}=state.search
        commit("changeLoading",true)
        axios.get("http://localhost:3000/user/listpage",{
          params:{
            name,
            page,
            pagesize
          }
        }).then(res=>{
          const {users, total} = res.data.users
            commit("setusers",users)
            commit("setsearch",{total,page})
            commit("changeLoading",false)
        })
      },
      remove({commit},payload){
        const {index,id}=payload
        axios.get("http://localhost:3000/user/remove",{
          params:{
            id
          }
        }).then(res=>{
            commit("removeid",index)
        })
      },
      removeAll({commit,state}){
        const {ids}=state
          axios.get("http://localhost:3000/user/batchremove",{
            params:{
              ids
            }
          }).then(res=>{
               if(res.data.code===200){
                 commit("removeselect")
               }
          })
      }
}