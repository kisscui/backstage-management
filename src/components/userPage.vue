<template>
<div>
    <el-pagination
        layout="prev, pager, next,sizes"
        @current-change="changePage"
        :page-sizes="[10, 20, 30,]"
        @size-change="pageSize"
        :total="search.total">
    </el-pagination>
</div>
</template>

<script>
import {mapState} from "vuex"
export default {
      computed:{
          ...mapState(["search"])
      },
      methods:{
          changePage(page){
              console.log(page)
              //将页码传递给mutation
              this.$store.commit('setsearch', {
                    page
                })
            //  分发dispatch重新渲染
            this.$store.dispatch('getusers')
          },
          //获取每页条数
          pageSize(pagesize){
              //每页条数传给mutation(以对象的形式发送过去)
              this.$store.commit('setsearch',{
                  pagesize
                })
             //分发dispatch重新渲染
             this.$store.dispatch("getusers")
          }
      }
}
</script>

<style>

</style>
