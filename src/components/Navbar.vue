<template>
    <nav id="NavBar" class="navbar navbar-expand-lg" style="background-color: rgb(0, 0, 0);" >
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="" style="border-radius: 0%; height: 5rem;"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="white" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            <i class="bi bi-list"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="text text-decoration-none" to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text text-decoration-none" to="resume">Resume</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text text-decoration-none" to="projects">Projects</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text text-decoration-none" to="testimonials">Testimonials</router-link>
              </li>
              <li class="nav-item">
                <router-link class="text text-decoration-none" to="contact">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav-item{
  margin-inline: 1rem;
  font-size: 17.7px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}


.text{
  color: white;
}

.nav-item:hover{
  text-decoration: underline;
  text-decoration-color: rgb(0, 212, 0);
}
.text:hover{
  color: rgb(1, 227, 1);
}
</style>