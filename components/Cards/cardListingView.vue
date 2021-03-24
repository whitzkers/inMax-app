<template>
       <div>
        <cardListing
            v-for="card in lists"
            :key="card.id"
            :pName="card.pName"
            :pPrice="card.pPrice"
            :pAddress="card.pAddress"
            :pCert="card.pCert"
            :pAreaGround="card.pAreaGround"
            :pAreaBuild="card.pAreaBuild"
            :pBed="card.pBed"
            :pBath="card.pBath"
        />
        </div>
</template>

<script>
import cardListing from '@/components/Cards/cardListing'
export default {
    components:{
        cardListing
    },
    props:{
        lists:{
            type: Array,
            required : true
        }
    }
}
</script>