export default{
    setusers(state,payload){
        state.users=payload
     },
     setsearch (state, payload) {
       state.search = {
         ...state.search,
         ...payload
       }
     },
     removeid(state,index){
       state.users.splice(index,1)
     },
     setids(state,ids){
       state.ids=ids
     },
     removeselect(state){
       const ids=state.ids.split(",")
       state.users=state.users.filter(user=>!ids.includes(user.id))
     },
     changeLoading(state,payload){
       state.loading2=payload
     }
}