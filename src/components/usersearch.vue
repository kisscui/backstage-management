<template>
    <el-form ref="form" :inline="true" label-width="100px">
        <el-form-item >
            <el-input v-model="user" placeholder="请输入xxx"></el-input>
        </el-form-item>
         <el-form-item>
            <el-button @click="search" type="success">查询</el-button>
        </el-form-item>
        <el-form-item>
            <el-button  type="danger" @click="removeAll">删除全选</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data(){
        return {
            user:''
        }
    },
    methods:{
        search(){
            const name=this.user
            //把输入的名字传递给mutatiom
            this.$store.commit("setsearch",{
                name,
            })
            //分发dispatch重新渲染
            this.$store.dispatch("getusers")
        },
        removeAll(){
            this.$store.dispatch("removeAll")
        }
    }
}
</script>

<style>

</style>
