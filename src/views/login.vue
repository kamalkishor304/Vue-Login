<template>
    <div id="login">
        <h1>Login</h1>
        <div>
            <b-form>
                <b-form-group>
                    <label for="feedback-user">Username</label>
                    <b-input v-model="input.username" placeholder="Username"></b-input>
                </b-form-group>
                <b-form-group>
                    <label for="text-password">Password</label>
                    <b-input type="password" v-model="input.password" placeholder="Password"></b-input>
                </b-form-group>
                <b-button type="submit" variant="primary" v-on:click="login()">Login</b-button>
                <b-form-invalid-feedback :state="validation">
                    <b-alert show variant="danger">{{errorMsg}}</b-alert>
                </b-form-invalid-feedback>
            </b-form>
        </div>
    </div>


</template>

<script>
    export default {
        name: 'Login',

        data() {
            return {
                input: {
                    username: '',
                    password: '',
                },
                userId: '',
                errorMsg: '',
                flag: false

            }
        },
        computed: {
            validation() {
                return !this.flag
            }
        },
        methods: {
            login() {
                this.errorMsg = ''
                if (this.input.username != "" && this.input.password != "") {
                    if (this.input.username == this.$parent.fackAccount.username && this.input.password == this.$parent
                        .fackAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({
                            name: "secure"
                        });
                    } else {
                        this.flag = true
                        this.errorMsg = 'The Username and/or password is incorrect'
                        return false
                    }
                } else {
                    this.flag = true
                    this.errorMsg = 'A username and password must be present'
                    return false
                }
            }
        }
    }
</script>

<style scoped>
    #login {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
}
</style>