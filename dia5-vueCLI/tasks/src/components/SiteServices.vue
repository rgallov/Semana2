<template>
<div class="col-sm-6 col-xs-12 col-lg-4">
    <div class="card">
        <div class="d-flex justify-content-center">
            <img class="service-image" :src="servicio.Imagen" />
        </div>
        <div class="card-body">
            <h5 class="card-title" v-html="servicio.Titulo"></h5>
            <p class="card-text">{{ servicio.Descripcion }}</p>
            <a :href="servicio.Enlace" target="_blank" class="btn btn-primary"
            >Ver Servicio >></a
            >
        </div>
    </div>
</div>
</template>

<script>
import json from '../assets/files/servicios.json'
export default {
  name: 'SiteServices',
  props: { servicio: Object },
  data:function(){
      return {
          servicios: json
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
