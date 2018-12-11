<template>
    <el-table
      v-loading="loading2"
      element-loading-text="拼命加载中"
      :data="users"
      @selection-change="changeSelect"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        :formatter="change"
        width="180">
      </el-table-column>
      <el-table-column
        prop="birth"
        label="出生年月"
        width="180">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="地址">
      </el-table-column>
      <el-table-column
      fixed="right"
      width="100">
        <template slot-scope="scope">
          <el-button @click="del(scope.$index,scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed:{
            ...mapState(['users','loading2'])
    },
    methods:{
        change(row, column, cellValue, index){
            return cellValue?"男":"女"
        },
        del(index,id){
          //向action分发id，和index
          this.$store.dispatch('remove', {
            id, index
          })
        },
        changeSelect(selection){
          //用map()筛选出所选id
          console.log(1)
          const ids=selection.map(item=>item.id).join()
          this.$store.commit('setids', ids)
        }
    }
}
</script>

<style>

</style>
