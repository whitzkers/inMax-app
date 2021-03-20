<template>
    <div class="d-flex">
        <div class="my-auto w-100">
            <div class="text-center pb-5 mb-5 pt-3 w-100 logoPlace"><img src="@/assets/img/inmaxLogo.png" style="width: 55vw;"></div>
            <form class="mx-3 my-auto " style="font-family: Roboto, sans-serif;">
                <div class="form-group mb-3" id="emailForm" style="font-family: Roboto, sans-serif;"><input class="form-control" type="email" placeholder="Email" style="font-family: Roboto, sans-serif;"></div>
                <div class="form-group mb-3" id="passForm" style="font-family: Roboto, sans-serif;"><input class="form-control d-flex" type="password" placeholder="Password" style="font-family: Roboto, sans-serif;"></div>
                    <div class="form-group text-center d-block pt-4 mb-3" id="loginForm" style="font-family: Roboto, sans-serif;">
                        <button class="btn btn-primary btn-block" id="btnLogin" type="submit">
                            Login
                        </button>
                    </div>
                <div class="form-group text-center d-block" id="loginForm" style="font-family: Roboto, sans-serif;">
                    <button class="btn btn-secondary btn-block" id="btnLogin-1" type="submit" style="background: #6c757d;">
                        Forgot Password
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .logoPlace{
        padding-top:16px;
        
        margin: 86px 0px;
    }
    form{
       
        padding:16px;
    }
</style>