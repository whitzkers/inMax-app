<template>
    <div>
        <topNavbar
        navLocation= "Notification"/>
        <div class="row no-gutters row-cols-4" style="text-align:center;padding-top:16px;margin-bottom:16px;">
            <div class="col text-center legend" style="margin:auto;"><img src="@/assets/img/profilePicture.png" width="40vw">
                <p style="margin-top: 8px;font-family: Roboto, sans-serif;">Account</p>
            </div>
            <div class="col text-center legend" style="margin: auto;text-align: center;"><img src="@/assets/img/profilePicture.png" width="40vw">
                <p style="margin-top: 8px;font-family: Roboto, sans-serif;">Challenge</p>
            </div>
            <div class="col text-center legend" style="text-align: center;"><img src="@/assets/img/profilePicture.png" width="40vw">
                <p style="margin-top: 8px;font-family: Roboto, sans-serif;">Income</p>
            </div>
            <div class="col text-center legend" style="text-align: center;"><img src="@/assets/img/profilePicture.png" width="40vw">
                <p style="margin-top: 8px;font-family: Roboto, sans-serif;">Property</p>
            </div>
        </div>
        <notifList />
        <notifList />
        <notifList />
    </div>
</template>

<script>
import notifList from '@/components/notification/notifList'
import topNavbar from '@/components/Navbar/topNavbar'
export default {
    components: {
        notifList,
        topNavbar
    }   
    
}
</script>