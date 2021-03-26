<template>
        <nav class="navbar navbar-light navbar-expand fixed-bottom d-flex justify-content-center bottomNavbar">
            <div class="container-fluid">
                <div class="w-100">
                    <div class="row">
                            <div class=" navItems d-flex flex-column justify-content-end align-items-center col menu active">
                                <nuxt-link to="/mainmenu">
                                    <img src="@/assets/img/025-house.png" width="20" height="22">
                                    <p class="small m-0 pt-1">Home</p>
                                </nuxt-link>
                            </div>

                            <div class=" navItems d-flex flex-column justify-content-end align-items-center col menu">
                                <nuxt-link to = "/listing">
                                    <img src="@/assets/img/006-search.png" width="20" height="22">
                                    <p class="small m-0 pt-1">Listing</p>
                                </nuxt-link>
                            </div>

                            <div class="navItems d-flex flex-column justify-content-end align-items-center col menu">
                                <nuxt-link to = "/profile">
                                    <img src="@/assets/img/053-user.png" width="20" height="22">
                                    <p class="small m-0 pt-1">Profile</p>
                                </nuxt-link>
                            </div>
                    </div>
                </div>
            </div>
        </nav>
</template>

