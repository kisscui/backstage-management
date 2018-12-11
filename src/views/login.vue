<template>
    <el-form ref="form"  label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="login">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            user:{
                username:"",
                password:""
            }
        }
    },
    methods:{
        login(){
            console.log(this.user)
            //结构赋值
            const {username,password}=this.user
            axios.get("http://localhost:3000/login",{
                params:{
                    username,
                    password
                }
            }).then(res=>{
                localStorage.setItem("user",this.user.username)
                this.$router.push("/")
                this.user.username="",
                this.user.password=""
            })  
        }
    }
}
</script>

<style>

</style>
