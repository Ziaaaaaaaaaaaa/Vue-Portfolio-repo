<template>
    <div class="container mt-5">
        <h1>Contact <span>Meh...</span></h1>
        <form  action="https://formspree.io/f/moqzbakn"
        method="POST">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label mt-3">Name</label>
                <input type="text" class="form-control  bg-transparent" id="exampleFormControlInput1" name="name" placeholder="Enter your full name" required autocomplete="off">
                <label for="exampleFormControlInput1" class="form-label mt-3">Email</label>
                <input type="email" class="form-control  bg-transparent" id="exampleFormControlInput1" name="email" placeholder="name@example.com" autocomplete="off">
                <label for="exampleFormControlInput1" class="form-label mt-3">Subject</label>
                <input type="text" class="form-control bg-transparent"  name="subject" placeholder="Subject" autocomplete="off">
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control  bg-transparent" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div>
                <button class="btn mb-5" type="submit">Send</button>
              </div>
        </form>
    </div>
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


.form-label{
    float: left;
}

.form-control{
    box-shadow: 0 6px 10px rgba(60, 255, 0, 0.452), 0 0 6px rgb(85, 255, 0);

}

textarea.form-control{
    color: white;
}


input[type="text"]
{
    color:white
}
input[type="email"]
{
    color:white
}


::placeholder{
    color: rgba(26, 255, 0, 0.37);
}

.btn{
    box-shadow: 0 6px 10px rgba(60, 255, 0, 0.452), 0 0 6px rgb(85, 255, 0);
    background-color: #48ff00c5;
}

.container{
    width: 40rem;
}
</style>