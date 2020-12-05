Vue.component('MiTarea',
{
    template:
    `
        <div>
        <div>
            <input type="text" class="form-control mt-5" v-model="newTask" v-on:keyup.enter="addTask">
            <button class="btn btn-info mt-2" v-on:click="addTask">
                Agregar tarea</button>
        </div>
        <div>
            <h2>Tareas</h2>
        </div>
        <div id="results" v-for="(task,index) in tasks" :key="task.id" class="container mt-2">

            <div class="alert mt-2" role="alert" v-bind:class="[task.state?'alert-success':'alert-danger']">
                
                <div class="d-flex justify-content-between align-items-center">
                    <div>{{task.name}}</div>
                    <div> {{task.state}}</div>
                    <div>
                        <button class="btn btn-success" @click="doTask(index)">Ok</button>
                        <button class="btn btn-info"  @click="deleteTask(index)"><i class="fa fa-trash"></i></button>
                    </div>
                </div>

            </div>

            </div>
            </div>
    `,
    data: function() {
        return {
           newTask: '',
            tasks: [],
            //tasksVue:[],
        }
    },
    computed: {

    },
    methods: {
        addTask() {
            this.tasks.push({ name: this.newTask, state: false });
            console.log(this.newTask);
            this.newTask = '';
            localStorage.setItem('tasks-vue', JSON.stringify(this.tasks))
        },
        doTask(index) {
            console.log('editando...');
            this.tasks[index].state = true;
            localStorage.setItem('tasks-vue', JSON.stringify(this.tasks))
        },
        restartTask(index) {
            console.log('editando...');
            this.tasks[index].state = false;
            localStorage.setItem('tasks-vue', JSON.stringify(this.tasks))
        },
        deleteTask(index) {
            console.log('eliminando...');
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks-vue', JSON.stringify(this.tasks))
        }
    },
    created: function () {
        let dataDB = JSON.parse(localStorage.getItem('tasks-vue'));
        if (dataDB === null) {
            this.tasks = [];
        } else {
            this.tasks = dataDB;
        }

    },
    mounted: function () {

    }
}

)