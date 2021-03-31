<template>
    <div class="d-inline-flex flex-row flex-nowrap px-0 overflow-auto">
        <cardClientList class="content ml-3"
            v-for="list in clientList"
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
import cardClientList from '@/components/Cards/cardClientList'
export default {
    components:{
        cardClientList
    },
    props:{
        clientList:{
            type : Array,
            required: true
        }
    }
}
</script>