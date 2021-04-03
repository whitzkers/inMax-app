<template>
    <div class="fab-menu with-bottom-menu d-flex viewMode">
        <nuxt-link to="/listing" class="d-flex flex-row justify-content-center align-items-center py-2 menu active" style="width:105px;">
            <img src="@/assets/img/024-menu.svg" height="16" alt="16">
            <p class="mb-0 pl-2">List</p>
        </nuxt-link>
        <nuxt-link to="/listing/mapView" class="d-flex flex-row justify-content-center align-items-center py-2 menu" style="width:105px;">
            <img src="@/assets/img/049-pin.svg" height="16" alt="16">
            <p class="mb-0 pl-2">Peta</p>
        </nuxt-link>
    </div>
</template>

<style scoped>
.viewMode{
    z-index: 3;
}
</style>