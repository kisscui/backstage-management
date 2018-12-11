<template>
<div>
    <usersearch></usersearch>
    <user-table></user-table>
    <userpage></userpage>
</div>
</template>

<script>
import usersearch from "../components/usersearch"
import userpage from "../components/userPage"
import userTable from "../components/userTable"
export default {
    components:{
        userTable,
        userpage,
        usersearch
    },
    created(){
        this.$store.dispatch("getusers")
    }
}
</script>

<style>

</style>
