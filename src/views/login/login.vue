<template>
    <div class="login-container">
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
            <el-form-item pro="username">
                <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">

            </el-form-item>
        </el-form>
    </div>
</template>
