<template>
    <nuxt-link to="/listing/listingDetail" class="col-12 mb-3 card p-0">
        <div class="row mx-0">
            <div class="col-12 p-2 image-wrapper"><img class="img-fluid" src="@/assets/img/Amazing-White-Gray-Modern-exterior-House-Design-Ideas-1024x768.jpg"></div>
            <div class="col-12 pt-2 pb-3 px-3">
                <p class="mb-0">{{pName}}</p>
                <p class="mb-1" style="font-weight: bold;">{{pPrice}}</p>
                <p class="small mb-0 text-gray">{{pAddress}}</p>
            </div>
            <div class="col-12 pt-1">
                <div class="row py-2">
                    <div class="d-flex flex-row justify-content-start align-items-center col-6 pr-1 mb-3"><img src="@/assets/img/048-contract.svg" width="17" height="17">
                        <p class="mb-0 pl-2 small">{{pCert}}</p>
                    </div>
                    <div class="d-flex flex-row justify-content-start align-items-center col-6 pr-1 mb-3"><img src="@/assets/img/032-plan.svg" width="17" height="17">
                        <p class="mb-0 pl-2 small">LT {{pAreaGround}} / LB {{pAreaBuild}}</p>
                    </div>
                    <div class="d-flex flex-row justify-content-start align-items-center col-6 pr-1 mb-3"><img src="@/assets/img/double-bed.svg" width="17" height="17">
                        <p class="mb-0 pl-2 small">{{pBed}}</p>
                    </div>
                    <div class="d-flex flex-row justify-content-start align-items-center col-6 pr-1 mb-3"><img src="@/assets/img/049-bathroom.svg" width="17" height="17">
                        <p class="mb-0 pl-2 small">{{pBath}}</p>
                    </div>
                </div>
            </div>
        </div>
    </nuxt-link>

</template>

<script>
export default {
    props:{
        pName:{
            type : String,
            required : true
        },
        pPrice:{
            type : String,
            required : true
        },
        pAddress:{
            type : String,
            required : true
        },
        pCert:{
            type: String,
            required : true
        },
        pAreaGround:{
            type: String,
            required : true
        },
        pAreaBuild:{
            type:String,
            required: true
        },
        pBed:{
            type: String,
            required : true
        },
        pBath:{
            type: String,
            required : true
        },
    }
}
</script>