Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  });


var data1 = {message:'Hello Vue'};
var app = new Vue({ 
    el: '#app',
    data: data1,
    created:function(){
        console.log('hi');
    },
    mounted:function(){
        console.log('mounted');
    },
    updated:function(){
        console.log('updated');
    },
});

var app2 = new Vue({
    el: '#app2',
    data:{
        message:'hiiiiiiiiiiiiiiiiiiiiiiiiiiii'
    }
});

var app3 = new Vue({
    el: '#app-3',
    data:{
        seen:false,
        url: "https://www.baidu.com",
    },
    methods:{
        flight:function(){
            alert('hi');
        }
    }
});

var app4 = new Vue({
    el: '#app-4',
    data:{
        todos:[
            {text:'1'},
            {text:'2'},
            {text:'3'},
        ],
    }
});

var app5 = new Vue({
    el: "#app-5",
    data:{
        message:"12",
        reversed: false,
        stylesobject:{
            color: 'white',
            fontStyle: 'italic',
        },
    },
    methods:{
        reverseMessage(){
            this.message = this.message.split("").reverse("").join("");
            this.reversed = !this.reversed;
        },
    },
});

var app6 = new Vue({
    el: "#app-6",
    data:{
        message:"hi"
    },
    watch:{
        message: function(){
            
        }
    },
    computed:{
        reverse:function(){
            return !this.message;
        }
    }
})

var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })