<template>
    <div>
        <h1 class="testimonials-heading mt-5 mb-5" v-motion-slide-top v-motion-fade>Testim<span>onials</span></h1>
        <hr class="m-auto w-75 mb-5">
        <div class="container mb-5">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 mb-5 mt-5" v-for="item in testimonialsData" :key="item.id"  v-motion-pop>
                    <div class="card h-100 w-100 bg-transparent" style="width: 18rem;">
                        <div class="card-body ">
                            <img :src="item.img" class="card-img-top" alt="...">
                            <h3 class="card-text text-white mt-3">{{ item.name }}</h3>
                            <hr class="m-auto w-75a mb-3 text-white">
                            <p class="card-text text-white">{{ item.text }}</p>
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
      testimonialsData(){
        return this.$store.state.testimonialsData
      },
      
     },
     mounted(){
      this.$store.dispatch('fetchDataTestimonials')
     }
    }
</script>

<style scoped>

img{
  aspect-ratio: 1 / 1;
  object-fit: cover;
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
  cursor: pointer;
  }
  
  .card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(72, 255, 0, 0.804), 0 4px 8px rgba(64, 255, 0, 0.909);
  }

</style>