<template>
    <tbody class="table-content" style="font-family: Roboto, sans-serif;">
        <score 
        v-for="score in scores" 
        :key="score.id"
        :Rank ="score.Rank"
        :Name ="score.Name"
        :Score ="score.Score" />
    </tbody>
</template>

<style scoped>

</style>

<script>
import score from '@/components/score/score'
export default {
    components:{
        score
    },
    props:{
        scores:{
            type: Array,
            required : true
        }
    }
}
</script>

