<template>
    <div class="text-right d-flex float-right justify-content-end align-items-end align-content-end align-self-end flex-nowrap fab-menu" style="position: fixed;z-index: 1000;border-radius: 30px;width: 56px:height:56px;margin-left: 35vw;background-color: #212365;border-style: none;color: #212365;">
            <button class="d-flex justify-content-center align-items-center fab-menu-btn btn rounded-round btn-float btn-icon" @click="$router.push('/#')" style="border-radius: 30px;width: 56px;height: 56px;background-color: #212365;text-align: center;color: #212365;">
                <img class="d-flex justify-content-center align-items-center" src="@/assets/img/edit.svg" style="width:28px " />

            </button>
    </div>
</template>