<template>
    <nav class="navbar navbar-light navbar-expand sticky-top topNavbar">
        <div class="container-fluid">
            <div class="w-100">
                <div class="d-flex flex-row row">
                    <div class="d-flex flex-fill justify-content-start align-items-center justify-content-sm-center align-items-sm-center col-12">
                        <div @click="$router.go(-1)">
                            <img src="@/assets/img/return.svg" width="23" height="23">
                        </div>
                        <h5 class="mb-0 pl-3" style="font-family: Roboto, sans-serif;">
                             {{navLocation}}
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        navLocation:{
            type: String,
            required: true
        }
    }
}
</script>