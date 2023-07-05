<template>
    <div>
        <div class="container">
            <div class="row gap-5">
                <div class="col" v-for="item in projectsData" :key="item.id">
                    <div class="card h-100" style="width: 18rem;">
                        <img :src="item.img" class="card-img-top" alt="...">
                        <div class="card-body">
                          <p class="card-text">{{ item.title }}</p>
                          <p class="card-text">{{ item.description }}</p>
                          <a :href="item.github" target="_blank" class="btn btn-danger">GitHub</a>
                          <a :href="item.netlify" target="_blank" class="btn btn-danger">Netlify</a>
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
      projectsData(){
        return this.$store.state.projectsData
      }
     },
     mounted(){
      this.$store.dispatch('fetchData')
     }
  }
</script>

<style scoped>
.card{
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(60, 255, 0, 0.452), 0 0 6px rgb(85, 255, 0);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
padding: 14px 80px 18px 36px;
cursor: pointer;
}

.card:hover{
   transform: scale(1.05);
box-shadow: 0 10px 20px rgba(72, 255, 0, 0.804), 0 4px 8px rgba(64, 255, 0, 0.909);
}
</style>