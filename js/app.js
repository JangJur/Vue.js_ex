var User = {
    template: `
    <div>
        User Component
        <router-view></router-view>
    </div>
    `
};
var UserProfile = { template: '<p>User Profile Component</p>' };
var UserPost = { template: '<p>User Post Component</p>' };

var routes = [
    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'posts',
                component: UserPost
            },
            {
                path: 'profile',
                component: UserProfile
            },
        ]

    }
];

var router = new VueRouter({
    routes
});

var app = new Vue({
    router
}).$mount('#app');
