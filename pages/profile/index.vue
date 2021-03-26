<template>
    <div>
        <div class="container bg-primary py-4 mb-4" id="pnlProfile">
            <div class="row no-gutters row-cols-2 mb-1">
                <div class="col d-flex justify-content-center align-items-center col-3"><img class="d-flex" src="@/assets/img/profilePicture.png"></div>
                <div class="col col-9" id="idInfo">
                    <div class="pl-3">
                        <h5 id="txtName" class="mb-0 pt-1 text-white mt-1" style="font-family: Roboto, sans-serif;">John Doe</h5>
                        <p class="text-white small mb-3 opacity-75">johndoe@inmax.com</p>
                        <p class="badge p-1 text-primary bg-white mb-2">Edit Profile</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-4" id="Commision" style="font-family: Roboto, sans-serif;">
            <div class="row row-cols-2 mb-3">
                <div class="col-8">
                    <h3 class="d-block mb-0">Komisi Saya</h3>
                    <p class="small" style="color: rgb(56,53,53);">Bulan Ini</p>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-start" style="font-family: Roboto, sans-serif;"><a class="linkChallenge mt-2" href="#" style="font-family: Roboto, sans-serif;">Riwayat</a></div>
            </div>
            <div class="row pt-2">
                <div class="col-4">
                    <p class="text-gray">Pending</p>
                </div>
                <div class="col-8">
                    <p class="text-right">Rp. 50.000.000</p>
                </div>
                <div class="col-12">
                    <hr class="my-0">
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-4">
                    <p class="text-gray">Tercairkan</p>
                </div>
                <div class="col-8">
                    <p class="text-right">Rp. 10.000.000</p>
                </div>
                <div class="col-12">
                    <hr class="my-0">
                </div>
            </div>
            <div class="row pt-3">
                <div class="col-4">
                    <p style="font-weight: bold;">TOTAL</p>
                </div>
                <div class="col-8">
                    <p class="text-right" style="font-weight: bold;">Rp. 60.000.000</p>
                </div>
                <div class="col-12">
                    <hr class="my-0">
                </div>
            </div>
        </div>
        <div class="container py-4" id="MyListing" style="font-family: Roboto, sans-serif;">
            <div class="row row-cols-2 mb-3">
                <div class="col-8">
                    <h3 class="d-block mb-3">Listing Saya</h3>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-start" style="font-family: Roboto, sans-serif;"><a class="linkChallenge mt-2" href="#" style="font-family: Roboto, sans-serif;">&nbsp;</a></div>
            </div>
            <cardClientListView :clientList="loadedClientList" />
        </div>
        <div class="clearfix mb-5"></div>
        <bottomNavbar />
    </div>
</template>

<script>
import bottomNavbar from '@/components/Navbar/bottomNavbar'
import cardClientListView from '@/components/Cards/cardClientListView'

export default {
    components:{
        bottomNavbar,
        cardClientListView
    },
    data(){
        return{
            loadedClientList:[
                {pName:"lorem Ipsum",pPrice:"Rp. 123.456.789", pAddress: "Jl Lorem Ipsum no Dolor", pCert:"SHM", pAreaGround:"123",pAreaBuild:"123",pBed:"2",pBath:"3"},
                {pName:"lorem Ipsum",pPrice:"Rp. 123.456.789", pAddress: "Jl Lorem Ipsum no Dolor", pCert:"SHM",pAreaGround:"123",pAreaBuild:"123",pBed:"2",pBath:"3"},
                {pName:"lorem Ipsum",pPrice:"Rp. 123.456.789", pAddress: "Jl Lorem Ipsum no Dolor", pCert:"SHM",pAreaGround:"123",pAreaBuild:"123",pBed:"2",pBath:"3"},
                {pName:"lorem Ipsum",pPrice:"Rp. 123.456.789", pAddress: "Jl Lorem Ipsum no Dolor", pCert:"SHM",pAreaGround:"123",pAreaBuild:"123",pBed:"2",pBath:"3"},
                {pName:"lorem Ipsum",pPrice:"Rp. 123.456.789", pAddress: "Jl Lorem Ipsum no Dolor", pCert:"SHM",pAreaGround:"123",pAreaBuild:"123",pBed:"2",pBath:"3"}
            ]
        }
    }

}
</script>