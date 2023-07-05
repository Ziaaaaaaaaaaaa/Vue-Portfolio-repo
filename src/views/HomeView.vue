<template>
  <div>
    <h1 class="animate__animated animate__fadeInDown animate__delay-1s	1s display-5 headings">Welcome to my <span> Portfolio </span></h1>
    <h2 class="animate__animated animate__fadeIn animate__delay-2s	2s">My Name is Zia <span>Khan</span></h2>
    <h3 class="animate__animated animate__fadeInUp animate__delay-3s	3s">Aspiring <span> Web Developer </span></h3>
  </div>
  <a href="#about"><button class="btnA"><i class="bi bi-arrow-down-circle icon " style="font-size: 3rem;"></i></button></a>
  <div class="hero-image"></div>
  <section>
    <div class="about">
    <h1 class="about-title" id="about" v-motion
    :initial="{
      opacity: 0,
      y: 100
    }"
    :visible="{
      opacity: 1,
      y: 0,
      transition: {
        delay: 500
      }
    }">About <span>meh...</span></h1>

    </div>
    <div class="container text-center"  v-motion
    :initial="{
      opacity: 0,
      y: 100
    }"
    :visible="{
      opacity: 1,
      y: 0,
      transition: {
        delay: 500
      }
    }">
      <div class="row w-100">
        <div class="col">
          <img class="image" style="width: 20rem; margin-top: 2rem; " src="https://i.postimg.cc/027Wjhnn/zia.jpg" alt="">
        </div>
        <div class="col">
          <p v-motion-fade>Hi ! I'm a aspiring web developer, I'm super determined to be someone and make something of my life . When i found out and looked into web development i found interest in it since it seems like the type of career field i'd be comfortable in and its my prefered type of working style. I'm always up for a challenge and i needed to Learn a new skill which is coding.No matter what comes my way, I'm not going to back down. smashing through problems and learning from my mistakes. I pour my heart and soul into my work, making sure that the websites I build are not just okay but totally mind-blowing. Being a web developer is my passion. Even if things get tough, I won't give up. I'll find a way to make things work, no matter what. i have always been an introvert and kept to myself but since i started this coding course ive become a bit more social and im learning to work with others.</p>
        </div>
      </div>
    </div>
  
</section>
</template>

<script>
  export default {
    
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

  .headings{
    padding-top: 14rem;
    position: relative;
  }

  .about{
    padding-top: 10rem;
  }


  p{
    font-size: 1.3rem;
  }

  .about-title{
    font-size: 3.5rem;
    padding-bottom: 4rem;
  }

  .hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://i.postimg.cc/7PTcD6WJ/photo-1497032628192-86f99bcd76bc.jpg");
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(20%);
    position: absolute;
    top: 0;
    z-index: -1;
  }
  .btnA {
    padding: 0.5rem;
    border-radius: 2rem;
    border: none;
    background-color: rgba(204, 204, 204, 0);
    margin-top: 7rem;
  }

  .icon{
    color: rgba(255, 255, 255, 0.786);
  }

</style>