<template>
    <div>
        <searchNavbar />

        <div class="containMap mx-auto">
            <div id ="map"></div>
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
            dummies:dummy.locations
        }
    },

    mounted(){
        this.createMap()
        
        // this.spawnMarker()
    },

    methods:{
        createMap(){
          mapboxgl.accessToken = this.access_token
          this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/whitzkers/ckmpzjkdy0mm017pdrnuoeilu', // style URL
            attributionControl: false,
            center: [0, 0], // starting position [lng, lat]
            zoom: 1 // starting zoom
          })
          let marker = new mapboxgl.Marker({}).setLngLat([0, 0]).addTo(this.map);
        },
        spawnMarker(){
            this.dummies.forEach(element => {
                new mapboxgl.Marker({color : 'black'}).setLngLat([element.lng, element.lat]).addTo(this.map);
    
                
            });
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
#map {
    min-width:360px;
    min-height:640px;
    position: absolute;
    text-align: center;

}
/* #map{
     width: 100vw; 
     margin: 0px;
     padding : 0px;

} */
.mapboxgl-marker {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border:1px solid gray;
    background-color:lightblue;
}
</style>