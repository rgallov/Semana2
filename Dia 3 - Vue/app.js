var vm = new Vue({
 el:'#app',
 template: '<div v-bind:style="estilos" v-on:click="log()"></div>',
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

var classes = new Vue({
    el:'#classes',
    data:{
        isActive: true,
        hasError:false
    }
});

var message = new Vue({
    el: '#app1',
    data:{
        message: 'Hello Vue!'
    }
});

var message1 = new Vue({
    el: '#app2',
    data:{
        message1: ''
    }
});

var message2 = new Vue({
    el: '#app3',
    data:{
        message2: ''
    }
});

var example1 = new Vue({
    el: '#example-1',
    data: { 
        items: [ { mensaje: 'Foo' }, { mensaje: 'Bar' } ] 
    } 
});

var example2 = new Vue({ 
    el: '#v-for-object', 
    data: { 
        object: { 
            primerNombre: 'John', 
            apellido: 'Doe', 
            edad: 30 
        } 
    } 
});

var example3 = new Vue({ 
    el: '#example-3', 
    data: { 
        counter: 0 
    } 
});

// Definir un nuevo componente llamado button-counter 
Vue.component(
    'button-counter', 
    { data: function () { 
        return { 
            count: 0
        } 
    }, 
    template: '<button v-on:click="count++">Me ha pulsado {{ count }} veces.</button>' 
});

var component = new Vue({ 
    el: '#components-demo' 
});

var component = new Vue({ 
    el: '#components-demo1' 
});

Vue.component('blog-post', 
    { props: ['title'], 
    template: '<h3>{{ title }}</h3>'
});

var component = new Vue({ 
    el: '#component-blog' 
});

var component1 = new Vue({ 
    el: '#blog-post-demo', 
    data: { 
        posts: [ 
            { id: 1, title: 'Mi viaje con Vue' }, 
            { id: 2, title: 'Blogging con Vue' }, 
            { id: 3, title: 'Por qué Vue es tan divertido?' } 
        ] 
    } 
});


