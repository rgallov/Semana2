var vm = new Vue({
 el:'#app',
 template: '<div v-bind:style="estilos" v-on:click="log()"></div>chec',
 data: {
     titulo: 'Rectángulo',
     largo:100,
     alto:40
 },
 computed:{
     area: function(){
         return this.largo * this.alto;
     },
     estilos: function(){
         return {
             width: this.largo + 'px',
             height: this.alto + 'px'
         }
     }
 },
 methods:{
     log: function(){
         console.log ('Soy un rectángulo con un área de ' + this.area + ' pixels');      
     }
 },
 created: function(){
     console.log('Se crea la instancia: todavía no se ha reemplazado "#app" por el template de esta instancia ');
 },
 mounted: function(){
     console.log('ya se ha renderizado el template en el DOM')
 }
});