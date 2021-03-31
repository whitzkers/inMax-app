<template>
    <div>
        <searchNavbar />

        <div id ="map" class="d-flex justify-content-center align-items-center" style="height:100vh; width:100vw;">  
        </div>
        <fabViewMode />
        <bottomNavbar />
    </div>
</template>

<script>
import searchNavbar from '@/components/Navbar/searchNavbar'
import fabViewMode from '@/components/fab/fabViewMode'
import bottomNavbar from '@/components/Navbar/bottomNavbar'
import dummy from '@/assets/js/dummy.json'
import mapboxgl from 'mapbox-gl'
export default {
    data(){
        return{
            access_token: 'pk.eyJ1Ijoid2hpdHprZXJzIiwiYSI6ImNrbWgzMHR1NDAzYTQybm1xN3BieGVzaDEifQ.XjrFWak9W9mUc9kYxTIJAA',
            map:{},
            dummies:dummy
        }
    },
    mounted(){
        this.createMap()
    },

    methods:{
        createMap(){
          mapboxgl.accessToken = this.access_token
          this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/whitzkers/ckmpzjkdy0mm017pdrnuoeilu', // style URL
            attributionControl: false,
            center: [112.634102, -7.977270], // starting position [lng, lat]
            zoom: 10 // starting zoom
          })
        },
        spawnMarker(){
            
        }
    
    },
  
    components:{
        searchNavbar,
        fabViewMode,
        bottomNavbar
    }
    
}

</script>

<style scoped>
    .mapbox-improve-map{
        display:none;
    }
</style>