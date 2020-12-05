<template>
    <header>
          <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark ">
              <a class="navbar-brand " href="# "> <i class="fas fa-laptop-code"></i>  Workshop 2 </a>
              <div class="collapse navbar-collapse justify-content-end " id="navbarNav ">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link active" href="#Home">Inicio</a>
                          <!-- <a href="#" class="main-menu__link">Inicio</a> -->
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#services">Servicios</a>
                          <!-- <a href="#" class="main-menu__link">Servicios</a> -->
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#news">Noticias</a>
                          <!-- <a href="#" class="main-menu__link">Noticias</a> -->
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#team">Equipo</a>
                          <!-- <a href="#" class="main-menu__link">Equipo</a> -->
                      </li>
                  </ul>
              </div>
          </nav>
          <!-- carousel -->

          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
              </ol>
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="../assets/images/html5.jpg" style="width:1200px; height:200px;">
                      <!-- <div class="carousel-caption d-none d-md-block text-left">
                          <h5>HTML 5</h5>
                          <p>Servicios sobre HTML 5.</p>
                      </div> -->
                  </div>
                  <div class="carousel-item">
                      <img src="../assets/images/node-js.jpg" style="width:1200px; height:200px;">
                      <!-- <div class="carousel-caption d-none d-md-block">
                          <h5>Node JS</h5>
                          <p>Servicios sobre Node JS.</p>
                      </div> -->
                  </div>
                  <div class="carousel-item">
                      <img src="../assets/images/python.png"  style="width:1200px; height:200px;">
                      <!-- <div class="carousel-caption d-none d-md-block">
                          <h5>Python</h5>
                          <p>Servicios sobre Python</p>
                      </div> -->
                  </div>
              </div> <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span
                      class="sr-only">Previous</span> </a> <a class="carousel-control-next"
                  href="#carouselExampleCaptions" role="button" data-slide="next"> <span
                      class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span>
              </a>
          </div>
      </header>
</template>

<script>
export default {
  name: 'SitioHeader',
  props: {    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
