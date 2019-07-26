Vue.component('todo-footer', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});
var cmp1Data;

var cmp1 = {
    template: '<div>This is another local child component1 <br> : {{ cmp1Data }}</div>',
    data: function() {
        return {
            cmp1Data : 100
        }
    }
};

var cmp2 = {
    template: '<div>This is another local child component2 <br> : {{ cmp2Data }}</div>',
    data: function() {
        return {
            cmp2Data : cmp1.data.cmp1Data
        }
    }
};

var app = new Vue({
    el: '#app',
    data: {
        props_msg: 'Hello Vue! passed from Parent Component'
    },

    components: {
        'todo-list1': cmp1,
        'todo-list2': cmp2
    },

});
