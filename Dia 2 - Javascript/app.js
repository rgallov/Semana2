var vm = new Vue({
    el: '#app',
    template:
        ``,
    data: {
        title: 'TAREAS con Vue g-día',
        session: 5,
        teachers: {
            'name': 'Daniel',
            'class': '3'
        },
        newTask: '',
        tasks: [],
        //tasksVue:[],
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
});
