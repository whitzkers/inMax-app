<template>
    <div>
        <header id="headerBase" class="mb-3">
            <div class="row no-gutters row-cols-2 bg-primary">
                <div class="col pl-3 py-4">
                    <h2 class="text-left d-inline text-white" id="txtHi" style="font-family: Roboto, sans-serif;color: rgb(255, 255, 255);">Hi !&nbsp;</h2>
                    <h5 id="txtName" class="text-white" style="font-family: Roboto, sans-serif;">John Doe</h5>
                </div>
                <div class="col text-right d-flex flex-column justify-content-start align-items-end pt-4" style="font-family: Roboto, sans-serif;">
                    <nuxt-link to="/notification">
                        <img class="mr-3 mb-2 mt-1" src="@/assets/img/012-notification.png" width="32">
                    </nuxt-link>
                    <p class="text-primary badge small mr-3 mt-0 p-1 bg-white">5 New</p>
                </div>
            </div>
            <div class="row bg-primary mx-0">
                <div class="col-12" style="height:5rem;"></div>
            </div>
            <div class="row mx-0" style="margin-top: -5rem;">
                <div class="col-12">
                    <div class="col-12 mb-3 card p-0 mt-2" style="width:100vw;">
                        <div class="row mx-0">
                            <div class="col-12 px-3 py-4">
                                <div class="row">
                                    <div class="col">
                                            <h4 class="text-center mb-2" style="font-family: Roboto, sans-serif;">121</h4>
                                            <p class="text-center text-gray mb-0">Total Listing</p>
                                    </div>
                                    <div class="col border-left">                                       
                                            <h4 class="text-center mb-2" style="font-family: Roboto, sans-serif;">21</h4>
                                            <p class="text-center text-gray mb-0">Listing Terjual</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container py-4" id="Latest-Listing" style="font-family: Roboto, sans-serif;">
            <div class="row row-cols-2 mb-3">
                <div class="col-8">
                    <h3 class="d-block mb-3">Listing Terbaru</h3>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-start" style="font-family: Roboto, sans-serif;">
                    <nuxt-link to="/listing" class="linkChallenge mt-2"  style="font-family: Roboto, sans-serif;color: #f5821f;">See All</nuxt-link>
                </div>
            </div>
            <div class="row">
                <div class="d-inline-flex flex-row px-0 overflow-x">
                    <cardRecentListView :recents="LoadedRecentLists"/>
                    <div class="content">
                        <div class="clearfix mr-3"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container py-4" id="Leaderboards" style="font-family: Roboto, sans-serif;">
            <div class="mb-4">
                <div class="row row-cols-2 mb-3">
                    <div class="col-8">
                        <h3 class="d-block mb-3">Leaderboard</h3>
                    </div>
                    <div class="col-4 d-flex justify-content-end align-items-start" style="font-family: Roboto, sans-serif;"><a class="linkChallenge mt-2" href="#" style="font-family: Roboto, sans-serif;">&nbsp;</a></div>
                </div>
            </div>
            <div class="table-responsive tableScore">
                <table class="table">
                    <thead style="font-family: Roboto, sans-serif;">
                        <tr style="font-family: Roboto, sans-serif;">
                            <th class="tableCell" style="font-family: Roboto, sans-serif;">Rank</th>
                            <th class="tableCell" style="font-family: Roboto, sans-serif;">Agent</th>
                            <th class="tableCell text-right" style="font-family: Roboto, sans-serif;">Scores</th>
                        </tr>
                    </thead>
                    <scoreList :scores="loadedScore"/>
                </table>
            </div>
        </div>
        <br />
        <br/>
        <br/>
        <br/>
        
        <div class="content">
            <div class="clearfix mr-3"></div>
        </div>
        <bottomNavbar />
    </div>
</template>

<style scoped>

</style>

<script>
import bottomNavbar from '@/components/Navbar/bottomNavbar'
import cardRecentListView from '@/components/Cards/cardRecentListView'
import scoreList from '@/components/score/scoreList'
export default {
    components: {
        bottomNavbar,
        cardRecentListView,
        scoreList
    },
    data(){
        return{
            loadedScore:[
                {Rank: 1, Name:"lorem Ipsum", Score: 1000},
                {Rank: 2, Name:"lorem Ipsum", Score: 900},
                {Rank: 3, Name:"lorem Ipsum", Score: 800}
            ],
            loadedRecentLists:[
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





