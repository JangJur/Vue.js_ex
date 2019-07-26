var eventBus = new Vue();
Vue.component('child-component', {
    template: '<div>하위 컴포넌트 영역입니다.<button v-on:click="showLog">show</button></div>',
    methods: {
        showLog: function() {
            eventBus.$emit('triggerEventBus', 100);
        }
    }
});

var app = new Vue({
    el: '#app',
    created: function() {
        eventBus.$on('triggerEventBus', function(value) {
            console.log("이벤트를 전달받음. 전달받은 값 : ", value);
        });
    }
});
