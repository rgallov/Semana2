<template>
  <div id="app" class="container">
    <SiteHeader></SiteHeader>
    <main>
      <section id="services">
        <div class="section-1">
            <p class="section-text">Servicios</p>
        </div>
        <div class="container-fluid">
            <div id="servicio-div" class="row justify-content-center">
                <SiteServices v-for="serv in servicios" :key="serv.id" :servicio="serv"></SiteServices>                        
            </div>
        </div>
      </section>
      <section id="news">
              <div class="section-2 mt-2">
                  <p class="section-text">Noticias</p>
              </div>
              <div class="container-fluid">
                  <div id="noticia-div" class="row md-5 sm-5 xs-5 mt-2">
                      <SiteNews v-for="noticia in noticias.articles" :key="noticia.id" :noticia="noticia"></SiteNews>
                  </div>
              </div>
          </section>
          <section id="team">
              <div class="section-3 mt-2">
                  <p class="section-text">Equipo</p>
              </div>
              <div id="jsonFile3">
                  <div class="container-fluid">
                      <div class="row justify-content-center">
                          <SiteTeam v-for="pers in personas" :key="pers.codigo" :persona="pers"></SiteTeam>
                      </div>
                  </div>
              </div>
          </section>
    </main>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteServices from './components/SiteServices.vue'
import SiteNews from './components/SiteNews.vue'
import SiteTeam from './components/SiteTeam.vue'
import SiteFooter from './components/SiteFooter.vue'
import jsonServices from './assets/files/servicios.json'
import jsonTeam from './assets/files/team.json'
// import axios from 'axios'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteServices,
    SiteNews,
    SiteTeam,
    SiteFooter
  },
  data:function(){
      return {
          servicios: jsonServices.servicios,
          noticias: "",
          personas: jsonTeam.team
      }
  },
  methods: {
        testAPI(){
            // let urlText = "http://newsapi.org/v2/top-headlines?country=co&pageSize=4";
            let urlText = "https://gnews.io/api/v4/search?q=technology&max=4&lang=Spanish&token=cf851bcc541c6bcd9d5de79dccbe896c";
           
            fetch(urlText, {
                "method": "GET"/*,
                "headers": {
                    'X-Api-Key': '19d0d5b29b0941c590ab12644225a277'
                }*/
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        alert("Server returned " + response.status + " : " + response.statusText);
                    }
                }) 
                .then(json => {
                    this.noticias = json;                    
                }) 
                .catch(err => {
                    console.log('err: ' + err);
                }); 
        }
    },
    mounted(){
        this.testAPI()
        // axios.get('http://newsapi.org/v2/top-headlines?country=co&pageSize=4',{headers:{'X-Api-Key': '19d0d5b29b0941c590ab12644225a277'}})
        // .then(response => (this.noticias = response.data));
    }
}
</script>

<style>

</style>
