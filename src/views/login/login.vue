<template>
    <div class="login">
        <div class="login-form-wrap">
            <div class="login-title">SIMPLE OA LOGIN</div>
            <a-form
                    ref="loginForm"
                    :model="formState"
                    :rules="formRules"
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
            >
                <a-form-item name="userName">
                    <a-input v-model:value="formState.userName">
                        <template #prefix>
                            <UserOutlined style="color: rgba(0, 0, 0, 0.25)"/>
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item name="password">
                    <a-input type="password" v-model:value="formState.password">
                        <template #prefix>
                            <LockOutlined style="color: rgba(0, 0, 0, 0.25)"/>
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 24 }">
                    <a-button
                            type="primary"
                            block
                            :loading="loading"
                            @click="onSubmit"
                    >登录
                    </a-button
                    >
                    <a-button
                            block
                            :loading="loading"
                            @click="resetFields"
                            style="margin-top: 10px"
                    >取消
                    </a-button
                    >
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue'
import {ref, reactive, onMounted} from 'vue'
import {useForm} from 'ant-design-vue/es/form'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import user from '../../api/user'
import rsaEncryption from '../../util/RSAEncryption'
import {message} from "ant-design-vue";
import RouterUtil from "../../router/instance";

const router = RouterUtil.instance()
router.updateSpinRefAndRouter(ref(false), useRouter())
const store = useStore()
const loginForm = ref()
const loading = ref(false)
const formState = reactive({
    userName: '',
    password: ''
})

const labelCol = {
    span: 0
}
const wrapperCol = {
    span: 24
}
const {resetFields} = useForm(formState)
const formRules = reactive({
    userName: [
        {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
        }
    ]
})

const onSubmit = () => {
    loginForm.value
            .validate()
            .then(() => {
                console.log('values', formState)
                const encryptPwd = rsaEncryption.encrypt(
                        formState.password
                )
                formState.password = encryptPwd
                loading.value = true
                user.loginIn({...formState, verifyCode: '2323'})
                        .then(res => {
                            console.log('login res ', res)
                            if (res.status) {
                                console.log('success')
                                message.success('login successfully.')
                                store.dispatch('setUserInfo', res.data)
                                router.replace({
                                    path: '/'
                                })
                            } else {
                                formState.password = ''
                                formState.userName = ''
                            }
                            loading.value = false
                        })
                        .catch(err => {
                            loading.value = false
                            new Error(err)
                        })
            })
            .catch((error: any) => {
                console.log('error', error)
            })
}

onMounted(() => {
})
</script>

<style scoped lang="scss">
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    //background-color: cornflowerblue;
    background: url('../../assets/image/login_bg.jpg') center center/cover no-repeat;

    > .login-form-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 400px;
        width: 470px;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 6px;

        > .login-title {
            font-size: 38px;
            color: #ffffff;
        }

        > form {
            width: 300px;
            margin-top: 30px;
        }
    }
}
</style>
