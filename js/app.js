new Vue({
    el: '#app',
    methods: {
        getData: function() {
            axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
            .then(function(response){
                console.log(response);
            });
        }
    }
});