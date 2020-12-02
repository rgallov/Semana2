var vm = new Vue({
    el: '#app',
    template: '<div v-bind:style="estilos" v-on:click="log()"></div>',
    data: {
        titulo: 'Rectángulo',
        largo: 100,
        alto: 40
    },
    computed: {
        area: function () {
            return this.largo * this.alto;
        },
        estilos: function () {
            return {
                width: this.largo + 'px',
                height: this.alto + 'px'
            }
        }
    },
    methods: {
        log: function () {
            console.log('Soy un rectángulo con un área de ' + this.area + ' pixels');
        }
    },
    created: function () {
        console.log('Se crea la instancia: todavía no se ha reemplazado "#app" por el template de esta instancia ');
    },
    mounted: function () {
        console.log('ya se ha renderizado el template en el DOM')
    }
});

var classes = new Vue({
    el: '#classes',
    data: {
        isActive: true,
        hasError: false
    }
});

var message = new Vue({
    el: '#app1',
    data: {
        message: 'Hello Vue!'
    }
});

var message1 = new Vue({
    el: '#app2',
    data: {
        message1: ''
    }
});

var message2 = new Vue({
    el: '#app3',
    data: {
        message2: ''
    }
});

var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [{ mensaje: 'Foo' }, { mensaje: 'Bar' }]
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
    {
        data: function () {
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
    {
        props: ['title'],
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



var component1 = new Vue({
    el: '#jsonFile',
    data: {
        persons: []
    },
    compute: {
        odd() {
            if (this.person.codigo % 2 === 0)
                return true;
            else
                return false;
        }
    },
    methods: {
        loadJSON(callback) {

            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', './team.json', true)
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    callback(xobj.responseText);
                }
            };
            xobj.send(null);
        },
        init() {
            let that = this
            that.loadJSON(function (response) {
                // Parse JSON string into object
                var data = JSON.parse(response);
                that.persons = data.team
            });
        }
    },
    mounted() {
        this.init()
    }
});

/*
import  persons from "./team.json";
var component1 = new Vue({
    el: '#jsonFile',
    data: persons.team,
    template: `
    <div>
    <ul>
        <li v-for="person in persons">
            {{person.Nombre}}
        </li>
    </ul>
</div>`
});

var component1 = new Vue({
    el: '#jsonFile',
    export default{
      data(){
          return{
              persons: persons.team
          }
      }
  },
    template: `
    <div>
    <ul>
        <li v-for="person in persons">
            {{person.Nombre}}
        </li>
    </ul>
</div>`
});*/

var component1 = new Vue({
    el: '#jsonFile1',
    data: {
        persons: []
    },
    compute: {
        odd() {
            if (this.person.codigo % 2 === 0)
                return true;
            else
                return false;
        }
    },
    methods: {
        loadJSON(callback) {

            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', './team.json', true)
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    callback(xobj.responseText);
                }
            };
            xobj.send(null);
        },
        init() {
            let that = this
            that.loadJSON(function (response) {
                // Parse JSON string into object
                var data = JSON.parse(response);
                that.persons = data.team
            });
        }
    },
    template:
    `
    <div class="container-fluid">
            <div class="row justify-content-center mb-5">
                <div class="col mt-5" v-for="person in persons" :key="person.codigo">
                    <div v-if="person.codigo % 2 === 0" class="card text-white bg-dark">
                        <div class="d-flex justify-content-center p-2"> <img class="team-image__img"
                                :src="person.Imagen"></div>
                        <div class="card-body">
                            <h5 class="card-title">{{person.Nombre}}</h5>
                            <p class="card-text">{{person.Descripcion}}</p>
                        </div>
                        <div class="card-footer bg-white"> <small class="text-muted">Last updated 3 mins
                                ago</small>
                        </div>
                    </div>
                    <div v-else class="card text-white bg-danger">
                        <div class="d-flex justify-content-center p-2"> <img class="team-image__img"
                                :src="person.Imagen"></div>
                        <div class="card-body">
                            <h5 class="card-title">{{person.Nombre}}</h5>
                            <p class="card-text">{{person.Descripcion}}</p>
                        </div>
                        <div class="card-footer bg-white"> <small class="text-muted">Last updated 3 mins
                                ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    mounted() {
        this.init()
    }
});

Vue.component(
    'complejo',
    {        
        props:{persona:Object},
        template:
        `               
        <div class="col mt-5">
            <div v-if="persona.codigo % 2 === 0" class="card text-white bg-dark">
                <div class="d-flex justify-content-center p-2"> <img class="team-image__img"
                        :src="persona.Imagen"></div>
                <div class="card-body">
                    <h5 class="card-title">{{persona.Nombre}}</h5>
                    <p class="card-text">{{persona.Descripcion}}</p>
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
                    <p class="card-text">{{persona.Descripcion}}</p>
                </div>
                <div class="card-footer bg-white"> <small class="text-muted">Last updated 3 mins
                        ago</small>
                </div>
            </div>
        </div>
        `
    });

    var component1 = new Vue({
        el: '#jsonFile3',
        data: {
            persons3: []
        },
        compute: {
            odd() {
                if (this.person.codigo % 2 === 0)
                    return true;
                else
                    return false;
            }
        },
        methods: {
            loadJSON(callback) {
    
                var xobj = new XMLHttpRequest();
                xobj.overrideMimeType("application/json");
                xobj.open('GET', './files/team.json', true)
                xobj.onreadystatechange = function () {
                    if (xobj.readyState == 4 && xobj.status == "200") {
                        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                        callback(xobj.responseText);
                    }
                };
                xobj.send(null);
            },
            init() {
                let that = this
                that.loadJSON(function (response) {
                    // Parse JSON string into object
                    var data = JSON.parse(response);
                    that.persons3 = data.team
                });
            }
        },
        mounted() {
            this.init()
        }
    });