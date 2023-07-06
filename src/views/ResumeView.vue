<template>
    <div>
      <h1 class="resume-heading" v-motion-slide-top v-motion-fade>Resu<span>me</span></h1>
      <hr class="m-auto w-75">
      <div class="container">
          <h2 class="education-heading mt-5" v-motion-slide-bottom v-motion-fade>Educ<span>ation</span></h2>
            <div class="row gap-">
                <div class="col" v-for="item in educationData" :key="item.id"  v-motion-pop>
                    <div class="card h-100 bg-transparent">
                        <div class="card-body bg-transparent">
                            <h2 class="card-text text-white">{{ item.place }}</h2>
                            <h5 class="card-text text-white">{{ item.year }}</h5>
                            <img :src="item.img" class="card-img-top" alt="...">
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
    <div>
      <div class="container mt-5 mb-5">
        <hr class="m-auto w-75">
          <h2 class="skills-heading " v-motion-slide-bottom-visible v-motion-fade-visible>Ski<span>lls</span></h2>
            <div class="row gap-3">
                <div class="col" v-for="item in skillsData" :key="item.id"  v-motion-pop-visible>
                    <div class="card h-100 bg-transparent" style="width: 18rem;">
                        <div class="card-body bg-transparent">
                            <img :src="item.img" class="card-img-top" alt="...">
                            <p class="card-text text-white">{{ item.title }}</p>
                            <p class="card-text text-white">{{ item.levels }}</p>
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

  .resume-heading{
    margin-top: 4rem;
    margin-bottom: 3.5rem;
  }
  .education-heading{
    margin-bottom: 4rem;
  }

  .skills-heading{
    margin-top: 4rem;
    margin-bottom: 3.5rem;
  }

  .card{
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(60, 255, 0, 0.452), 0 0 6px rgb(85, 255, 0);
      transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  padding: 14px px 18px 36px;
  cursor: pointer;
}

.card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(72, 255, 0, 0.804), 0 4px 8px rgba(64, 255, 0, 0.909);
}



</style>