<template>
    <div>
        <fabEditRequest />
        <topNavbar navLocation = "Listing Detail"/>
        <div class="carousel slide" data-ride="carousel" id="carousel-1">
            <div class="carousel-inner">
                <div class="carousel-item active"><img class="w-100 d-block" src="@/assets/img/Amazing-White-Gray-Modern-exterior-House-Design-Ideas-1024x768.jpg" alt="Slide Image"></div>
                <div class="carousel-item image-wrapper" height="200px"><img class="w-100 d-block img-fluid" src="@/assets/img/Amazing-White-Gray-Modern-exterior-House-Design-Ideas-1024x768.jpg" alt="Slide Image"></div>
                <div class="carousel-item"><img class="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image"></div>
                <div class="carousel-item"><img class="w-100 d-block" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image"></div>
            </div>
            <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
            <ol class="carousel-indicators">
                <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-1" data-slide-to="1"></li>
                <li data-target="#carousel-1" data-slide-to="2"></li>
                <li data-target="#carousel-1" data-slide-to="3"></li>
            </ol>
        </div>
        <div class="container" style="padding : 16px 16px 24px 16px;">
            <h1 style="font-size: 20px;margin-bottom: 16px;font-family: Roboto, sans-serif;">Perumahan Sawojajar</h1><span class="d-inline-block" style="font-size: 20px;font-weight: bold;margin-bottom: 8px;font-family: Roboto, sans-serif;">Rp. 700.000.000</span>
            <p style="margin-bottom: 16px;color: #8c8c8c;font-family: Roboto, sans-serif;">Jl. Danau Toba no 12, Malang Jawa Timur</p>
            <div class="col-12 pt-1">
                <div class="row py-2">
                    <div class="d-flex flex-row justify-content-start align-items-center col-6 pr-1 mb-3"><img src="@/assets/img/048-contract.svg" width="17" height="17">
                        <p class="mb-0 pl-2 small">SHM</p>
                    </div>
                    <div class="d-flex flex-row justify-content-start align-items-center col-6 pr-1 mb-3"><img src="@/assets/img/032-plan.svg" width="17" height="17">
                        <p class="mb-0 pl-2 small">LT 150 / LB 100</p>
                    </div>
                    <div class="d-flex flex-row justify-content-start align-items-center col-6 pr-1 mb-3"><img src="@/assets/img/double-bed.svg" width="17" height="17">
                        <p class="mb-0 pl-2 small">2</p>
                    </div>
                    <div class="d-flex flex-row justify-content-start align-items-center col-6 pr-1 mb-3"><img src="@/assets/img/049-bathroom.svg" width="17" height="17">
                        <p class="mb-0 pl-2 small">2</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="padding:16px 16px 36px 16px;">
            <h1 style="font-size: 24px;margin-bottom: 16px;font-family: Roboto, sans-serif;">Kontak Agen</h1>
            <div class="row no-gutters">
                <div class="col col-3 align-items-center pt-2" style="text-align:center;"><img style="width:56px; height:56px; text" src="@/assets/img/profilePicture.png"></div>
                <div class="col col-9" style="padding:8px;">
                    <p style="margin-bottom: 8px;font-size: 16px;font-family: Roboto, sans-serif;">John Doe</p>
                       <p style="font-family: Roboto, sans-serif;">johnDoe@inmax.com</p>
                </div>
            </div>
        </div>
        <div class="container" style="padding:16px 16px 36px 16px;">
            <h1 style="font-size: 24px;margin-bottom: 16px;font-family: Roboto, sans-serif;">Deskripsi Properti</h1>
            <p style="margin: 0px;font-family: Roboto, sans-serif;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum ornare vehicula. Nullam cursus, leo id hendrerit semper, lacus ipsum aliquet diam, molestie placerat neque neque laoreet purus. Sed eget mi augue.<br></p>
            <p id="moreDesc" class="collapse expanded" style="margin:0px;">Curabitur placerat, nunc maximus vehicula rhoncus, dui purus placerat massa, vel bibendum ipsum turpis sit amet ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed bibendum porta pretium. Aenean facilisis est ac molestie consequat. Praesent porttitor ligula nisl, non elementum lectus lobortis ac. Fusce ultrices ut tellus ut ullamcorper. Pellentesque vel sollicitudin tortor. Donec in enim erat. Vivamus vel tincidunt magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet eleifend sem, feugiat laoreet diam consectetur in.<br></p><a class="btn btn-link" href="#moreDesc" data-toggle="collapse" aria-expanded="false" aria-controls="#moreDesc" role="button" style="padding:0px;"><span class="expanded" style="font-family: Roboto, sans-serif;">Lihat Selengkapnya</span></a>
        </div>
        <div class="container" style="padding:16px 16px 36px 16px;">
            <h1 style="font-size: 24px;margin-bottom: 16px;font-family: Roboto, sans-serif;">Lokasi</h1>
            <div style="background: url(&quot;assets/img/Screen%20Shot%202021-03-03%20at%2019.47.35.png&quot;) center / cover no-repeat;width: 75vw;height: 50vw;margin: 0 auto;box-shadow: 0px 6px 11px rgb(193,187,187);border-radius: 8px;" href="#"><img src="assets/img/352-pin.svg" width="25vw" style="position: absolute;margin-left: 95px;margin-top: 30px;"></div>
        </div>
        <div class="container" style="padding:16px 16px 36px 16px;">
            <h1 style="font-size: 24px;margin-bottom: 16px;font-family: Roboto, sans-serif;">Rekomendasi</h1>
            <div class="col-md-12 offset-md-0 d-inline-flex px-0 overflow-x">
                <cardRecentListView :clientList="loadedLists"/>
            </div>
        </div>
    </div>
</template>

<script>
import topNavbar from '@/components/Navbar/topNavbar'
import fabEditRequest from '@/components/fab/fabEditRequest'
import cardRecentListView from '@/components/Cards/cardRecentListView'
export default {
    components:{
        topNavbar,
        fabEditRequest,
        cardRecentListView
    },
    data(){
        return{
            loadedLists:[
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