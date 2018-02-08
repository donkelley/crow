var app = {

    findByName: function() {
        console.log('findByName');

        // new template-based version
        var self = this;
        this.store.findByName($('.search-key').val(), function(employees) {
            $('.employee-list').html(self.employeeLiTpl(employees));
        });

        // this.store.findByName($('.search-key').val(), function(employees) {
        //     var l = employees.length;
        //     var e;
        //     $('.employee-list').empty();
        //     for (var i=0; i<l; i++) {
        //         e = employees[i];
        //         $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
        //     }
        // });
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    renderHomeView: function() {
        // var html =
        //         "<div class='header'><h1>Home V3</h1></div>" +
        //         "<div class='search-view'>" +
        //         "<input class='search-key'/>" +
        //         "<ul class='employee-list'></ul>" +
        //         "</div>"
        // $('body').html(html);
        // $('.search-key').on('keyup', $.proxy(this.findByName, this));

        // use the homeTpl html template:
        $('body').html(this.homeTpl());
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

    initialize: function() {
        var self = this;

        // compile html templates
        this.homeTpl = Handlebars.compile($("#home-tpl").html());
        this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());

        this.store = new MemoryStore(function() {
            self.showAlert('Store Initialized', 'Info');
            self.renderHomeView(); // render home html template
        });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    }

};

app.initialize();
