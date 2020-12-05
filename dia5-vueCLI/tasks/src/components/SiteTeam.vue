<template>
<div class="col">
            <div v-if="persona.codigo % 2 === 0" class="card text-white bg-dark">
                <div class="d-flex justify-content-center p-2"> <img class="team-image__img"
                        :src="persona.Imagen"></div>
                <div class="card-body">
                    <h5 class="card-title">{{persona.Nombre}}</h5>
                    <p class="card-text" v-html=persona.Descripcion></p>
                </div>
                <div class="card-footer bg-white"> <small class="text-muted">Last updated 3 mins
                        ago</small>
                </div>
            </div>
            <div v-else class="card text-white bg-danger">
                <div class="d-flex justify-content-center p-2"> <img class="team-image__img"
                        :src="persona.Imagen"></div>
                <div class="card-body">
                    <h5 class="card-title">{{persona.Nombre}}</h5>
                    <p class="card-text" v-html=persona.Descripcion></p>
                </div>
                <div class="card-footer bg-white"> <small class="text-muted">Last updated 3 mins
                        ago</small>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'SiteTeam',
  props: { persona: Object }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
