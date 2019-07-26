Vue.component('slibling-component', {
    props: ['slib'],
    template: '<p>{{ slib }}</p>'
});

Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! passed from Parent Component',
        anotherMessage : 'You know what? This is another message!'
    }

});