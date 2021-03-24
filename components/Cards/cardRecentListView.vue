<template>
    <div>
        <cardRecentList 
            v-for="list in recents"
            :key="list.id"
            :pName="list.pName"
            :pPrice="list.pPrice"
            :pAddress="list.pAddress"
            :pCert="list.pCert"
            :pAreaGround="list.pAreaGround"
            :pAreaBuild="list.pAreaBuild"
            :pBed="list.pBed"
            :pBath="list.pBath"
        />
    </div>
</template>

<script>
import cardRecentList from '@/components/Cards/cardRecentList'
export default {
    components:{
        cardRecentList
    },
    props:{
        recents : {
            type : Array,
            required : true
        }
    }
}
</script>