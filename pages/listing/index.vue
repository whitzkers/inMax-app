<template>
    <div style ="border-bottom-style:none;">
        <searchNavbar />
        <div class="row mx-0 px-2 pt-4 pb-5 mb-5">
            <cardListing 
                pName ="Perumahan Sawojajar"
                pPrice="Rp. 700.000.000"
                pAddress="Jl. Danau Toba no 12, Malang Jawa Timur"
                pCert="SHM"
                pAreaGround="120"
                pAreaBuild="54"
                pBed="2"
                pBath="1"
             />
            <cardListing
                pName ="Perumahan Villa Puncak Tidar"
                pPrice="Rp. 1.200.000.000"
                pAddress="Jl. Villa Puncak Tidar Blok O 12, Malang Jawa Timur"
                pCert="SHM"
                pAreaGround="120"
                pAreaBuild="100"
                pBed="4"
                pBath="3"
             />
        </div>
        <fabViewMode />
        <bottomNavbar />
    </div>
</template>

<script>
import cardListing from '@/components/Cards/cardListing'
import bottomNavbar from '@/components/Navbar/bottomNavbar'
import fabViewMode from '@/components/fab/fabViewMode'
import searchNavbar from '@/components/Navbar/searchNavbar'
export default {
    components: {
        cardListing,
        bottomNavbar,
        fabViewMode,
        searchNavbar
    }

}
</script>
