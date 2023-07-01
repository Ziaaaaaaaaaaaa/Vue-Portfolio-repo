<template>
  <section>
  <div class="headings">
    <h1 class="animate__animated animate__fadeInDown animate__delay-1s	1s display-5">Welcome to my <span> Portfolio </span></h1>
    <h2 class="animate__animated animate__fadeIn animate__delay-2s	2s">My Name is Zia Khan</h2>
    <h3 class="animate__animated animate__fadeInUp animate__delay-3s	3s">Aspiring <span> Web Developer </span></h3>
  </div>
</section>
  <section>
  <div class="about">
    <h1 class="about-title animate__animated animate__fadeInDown animate__delay-1s	1s">About meh...</h1>

    </div>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          Column
        </div>
        <div class="col">
          <p> Hey! I'm like a web developer wannabe, and I'm, like, super determined and stuff. When I found out about web development, I was like, "Wow, that's my thing!" I'm always up for a challenge, you know? Learning new coding stuff, trying out fancy frameworks, and keeping up with what's hot in the industry is my jam.

            No matter what comes my way, I'm not gonna back down. I'm like a bulldozer, smashing through problems and learning from my mistakes. I pour my heart and soul into my work, making sure that the websites I build are not just okay but totally mind-blowing.
            
            Being a web developer is like my passion, man. I'm all about making cool stuff online and connecting people. It's like magic, dude! Even if things get tough, I won't give up. I'll find a way to make things work, no matter what.
            
            So, if you wanna work with me, be ready for some serious determination and awesomeness. Let's team up and make the internet a rad place together, dude!</p>
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
    margin-top: 14rem;
  }

  .about{
    padding-top: 20rem;
  }

  p{
    font-size: 1.3rem;
  }

  .about-title{
    font-size: 3.5rem;
    padding-bottom: 4rem;
  }

  .row{
    padding-inline: 15rem;
  }

  .col{
    gap: 7rem;
  }

</style>