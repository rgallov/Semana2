<template>
  <div class="col-lg-6 col-xs-12 border">
    <div class="d-flex justify-content-center align-items-center">
      <div class="p-3">
        <!-- <img :src="noticia.urlToImage" style="width: 200px; height: 200px" /> -->
        <img :src="noticia.image" style="width: 200px; height: 200px" />
      </div>
      <div class="p-2">
        <h5 class="news-title">{{ noticia.title }}</h5>
        <p>{{ noticia.description }}</p>
      </div>
    </div>
    <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
      <a
        :href="noticia.url"
        class="btn btn-outline-info"
        role="button"
        aria-pressed="true"
        target="_blank"
        >Ver Noticia >></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteNews",
  props: { noticia: Object },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
