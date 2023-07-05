<template>
    <div>
      <h1 class="projects-heading mt-5 mb-5" v-motion-slide-top v-motion-fade>Proj<span>ects</span></h1>
      <hr class="m-auto w-75 mb-5">
    </div>

  <div class="projects">
    <div class="row my-3">
    </div>
    <div class="container">
      <div class="row justify-content-center gap-3">
        <div
          class="card p-0"
          v-for="item in projectsData"
          style="width: 20rem"
          :key="item.id"
          v-motion-pop>
          <img
            :src="item.img"
            loading="lazy"
            class="card-img-top"
            :alt="item.name"
          />
          <div class="card-body">
            <h4 class="card-text">
              {{ item.title }}
            </h4>
            <a :href="item.github" target="_blank" class="btn btn-danger">GitHub</a>
            <a :href="item.netlify" target="_blank" class="btn btn-danger">Netlify</a>
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

.btn {
  margin: 1rem;
}

span {
  
  color: #ffffff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #06a600, 0 0 20px #48ff00, 0 0 30px;
  }
  to {
    text-shadow: 0 0 20px #00a308, 0 0 30px #6bff4d, 0 0 40px #a0ff4d;
  }
}
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