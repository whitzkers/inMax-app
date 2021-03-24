<template>
        <tr style="font-family: Roboto, sans-serif;">
            <td class="tableCell" style="font-family: Roboto, sans-serif;">{{Rank}}</td>
            <td class="tableCell" style="font-family: Roboto, sans-serif;">{{Name}}</td>
            <td class="tableCell text-right" style="font-family: Roboto, sans-serif;">{{Score}}</td>
        </tr>
</template>

    

<script>
export default {
    props:{
        Rank:{
            type : Number,
            required : true
        },
        Name:{
            type: String,
            required : true
        },
        Score:{
            type:Number,
            required:true
        }
    }
}
</script>