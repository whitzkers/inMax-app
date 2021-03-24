<template>
    <div style ="border-bottom-style:none;">
        <searchNavbar />
        <div class="row mx-0 px-2 pt-4 pb-5 mb-5">
            <cardListingView :lists="loadLists" />
        </div>
        <fabViewMode />
        <bottomNavbar />
    </div>
</template>

<script>
import cardListingView from '@/components/Cards/cardListingView'
import bottomNavbar from '@/components/Navbar/bottomNavbar'
import fabViewMode from '@/components/fab/fabViewMode'
import searchNavbar from '@/components/Navbar/searchNavbar'
export default {
    components: {
        cardListingView,
        bottomNavbar,
        fabViewMode,
        searchNavbar
    },
    data(){
        return{
            loadLists:[
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
