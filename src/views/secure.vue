<template>
    <div id="secure" class="container">
        <h1>Secure Area</h1>
        <p>Welcome <strong> {{user}}</strong>
        </p>
    </div>
</template>

<script>
export default {
    name:'Secure',
    data(){
        return {
            user:localStorage.getItem('user')
        }
    }
}
</script>

<style scoped>
    #secure {
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    padding: 20px;
    margin-top: 10px;
}

</style>
