<template>
    <div>
        <div class="container">
            <div class="row gap-2">
                <div class="col" v-for="item in educationData" :key="item.id">
                    <div class="card h-100" style="width: 18rem;">
                        <div class="card-body">
                            <p class="card-text">{{ item.place }}</p>
                            <p class="card-text">{{ item.year }}</p>
                            <img :src="item.img" class="card-img-top" alt="...">
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="container">
            <div class="row gap-2">
                <div class="col" v-for="item in skillsData" :key="item.id">
                    <div class="card h-100" style="width: 18rem;">
                        <div class="card-body">
                            <img :src="item.img" class="card-img-top" alt="...">
                            <p class="card-text">{{ item.title }}</p>
                            <p class="card-text">{{ item.levels }}</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
     computed:{
      educationData(){
        return this.$store.state.educationData
      },
      skillsData(){
        return this.$store.state.skillsData
      }
      
     },
     mounted(){
      this.$store.dispatch('fetchDataEducation')
      this.$store.dispatch('fetchDataSkills')
     }
  }
</script>

<style scoped>

</style>