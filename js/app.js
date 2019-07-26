var Main = { template: '<div>main</div>' };
var Login = { template: '<div>login</div>' };

var routes = [
    { path: '/main', component: Main },
    { path: '/login', component: Login }
];

var router = new VueRouter({
    mode: 'history',
    routes
});

var app = new Vue({
    router
}).$mount('#app');