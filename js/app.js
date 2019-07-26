var Body = { template: '<div>This is Body</div>' };
var Header = { template: '<div>This is Header</div>' };
var Footer = { template: '<div>This issss Footer</div>' };

var LoginBody = { template: '<div>This is LoginBody</div>' };
var LoginHeader = { template: '<div>This is LoginHeader</div>' };
var LoginFooter = { template: '<div>This is LoginsFooter</div>' };

var router = new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                default: Body,
                header: Header,
                footer: Footer
            }
        },
        {
            path: '/login',
            components: {
                default: LoginBody,
                header: LoginHeader,
                footer: LoginFooter
            }
        }
    ]
});

var app = new Vue({
    router
}).$mount('#app');