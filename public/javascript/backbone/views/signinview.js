App.Views.Signin = Backbone.View.extend({
    el: '#page',
    initialize: function() {
        console.log('sign in page loaded');
        this.template = Handlebars.compile($('#signin-template').html());
        this.render();
    },
    render: function() {
        $('#page-table').empty();
        this.$el.empty();
        this.$el.append(this.template());
    },
    events: {
        'click #signup-button': 'createCustomer'
    },
    createCustomer: function() {
        var data = {
            email: $('[name=email]').val(),
            password: $('[name=password]').val(),
            name: $('[name=name]').val()
        };

        var data1 = {
            email: $('[name=email]').val(),
            password: $('[name=password]').val()
        };

        $.ajax({
            type: "POST",
            url: '/users',
            data: data,
            success: function() {
                var template = Handlebars.compile($('#home-template').html());
                $('#page').empty();
                $('#page').append(template);
            },
            fail: function() {}
        });

        var template = Handlebars.compile($('#home-template').html());
        $('#page').empty();
        $('#page').append(template);

        console.log('what do you seek?');
    }
});
