<template>
     <!--Footer -->
      <footer class="page-footer bg-secondary mt-2">
          <!-- Footer Text -->
          <div class="container-fluid text-center text-md-left">
              <!-- Grid row -->
              <div class="row pt-2">
                  <!-- Grid column -->
                  <div class="col-md-6 mt-md-0 mt-3">
                      <!-- Content -->
                      <!-- <h5 class="text-uppercase font-weight-bold">Footer text 1</h5> -->
                      <span class="footer__span">
                          <i class="fab fa-github"></i><a class="footer-ul__link" href="https://github.com/rgallov/semana1">  GitHub</a>
                      </span>
                      <div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog"
                          aria-labelledby="myModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                  <div class="modal-header">
                                      <h4 class="modal-title w-100 font-weight-bold">Contactenos</h4>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                      </button>
                                  </div>
                                  <div class="modal-body">
                                      <form>
                                          <div class="form-group">
                                              <i class="fas fa-user prefix grey-text"></i>
                                              <input type="text" id="formName" class="form-control validate">
                                              <label data-error="wrong" data-success="right"
                                                  for="formName">Nombre:</label>
                                          </div>
                                          <div class="form-group">
                                              <i class="fas fa-envelope prefix grey-text"></i>
                                              <input type="email" id="formEmail" class="form-control validate">
                                              <label data-error="wrong" data-success="right" for="formEmail">Your
                                                  email</label>
                                          </div>

                                          <div class="form-group">
                                              <i class="fas fa-pencil prefix grey-text"></i>
                                              <textarea type="text" id="formMensaje" class="form-control"
                                                  rows="4"></textarea>
                                              <label data-error="wrong" data-success="right"
                                                  for="formMensaje">Mensaje:</label>
                                          </div>
                                      </form>
                                  </div>
                                  <div class="modal-footer justify-content-center">
                                      <button type="button" class="btn btn-secondary"
                                          data-dismiss="modal">Cerrar</button>
                                      <button class="btn btn-primary">Enviar</button>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="footer__span">
                          <i class="far fa-envelope"></i><a href="" class="footer-ul__link" data-toggle="modal"
                              data-target="#modalContactForm">  Contacto</a>
                      </div>
                  </div> <!-- Grid column -->
                  <hr class="clearfix w-100 d-md-none pb-3"> <!-- Grid column -->
                  <div class="col-md-6 mb-md-0 mb-3">
                      <!-- Content -->
                      <!-- <h5 class="text-uppercase font-weight-bold">Footer text 2</h5> -->
                      <ul class="footer-ul">
                          <li class="footer-ul_li"><i class="fas fa-user-tie"></i>  Juan Sebastian Franco - FullStack Developer</li>
                          <li class="footer-ul_li"><i class="fas fa-user-tie"></i>  Harvy Santiago Rosero - FullStack Developer</li>
                          <li class="footer-ul_li"><i class="fas fa-user-tie"></i>  Rodrigo Gallo Vega - FullStack Developer</li>
                      </ul>

                  </div> <!-- Grid column -->
              </div> <!-- Grid row -->
          </div> <!-- Footer Text -->
          <!-- Copyright -->
          <div class="footer-copyright text-center py-1 bg-dark">© 2020 MINTIC - UTP
          </div> <!-- Copyright -->
      </footer>
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
