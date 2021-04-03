<template>
    <div>
        <cardClientListAlt1
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
import cardClientListAlt1 from '@/components/Cards/cardClientListAlt1'
export default {
    components:{
        cardClientListAlt1
    },
    props:{
        clientList:{
            type : Array,
            required: true
        }
    }
}
</script>