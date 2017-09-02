$(document).ready(function () {

    var model = {
        mails: [
            {name: "Nimit", imgURL: "", title: "Need approval", tag: "fashion", receivedAt: "timestamp"},
            {name: "John", imgURL: "", title: "You need to fll your form", tag: "fashion", receivedAt: "timestamp"},
            {name: "Someone", imgURL: "", title: "Hello", tag: "", receivedAt: "timestamp"},
            {name: "Joanne", imgURL: "", title: "Offer: If you need more money", tag: "spam", receivedAt: "timestamp"},
            {name: "James", imgURL: "", title: "This is awesome opportunity", tag: "", receivedAt: "timestamp"},
            {name: "Jakarta", imgURL: "", title: "Buy at 50%", tag: "sale", receivedAt: "timestamp"},
            {name: "Bali", imgURL: "", title: "I dont know why", tag: "", receivedAt: "timestamp"},
            {name: "Java", imgURL: "", title: "New Friend request", tag: "social", receivedAt: "timestamp"},
            {name: "Sam", imgURL: "", title: "Watch GoT", tag: "netflix", receivedAt: "timestamp"},
            {name: "Xhibit", imgURL: "", title: "Pimp my ride", tag: "mtv", receivedAt: "timestamp"}
        ],
        recentMails: [
            {name: "Sam", imgURL: "", title: "Watch GoT", tag: "netflix", receivedAt: "timestamp"},
            {name: "John", imgURL: "", title: "You need to fll your form", tag: "fashion", receivedAt: "timestamp"},
            {name: "Jakarta", imgURL: "", title: "Buy at 50%", tag: "sale", receivedAt: "timestamp"},
            {name: "James", imgURL: "", title: "This is awesome opportunity", tag: "", receivedAt: "timestamp"},
            {name: "Joanne", imgURL: "", title: "Offer: If you need more money", tag: "spam", receivedAt: "timestamp"},
            {name: "Nimit", imgURL: "", title: "Need approval", tag: "fashion", receivedAt: "timestamp"},
            {name: "Java", imgURL: "", title: "New Friend request", tag: "social", receivedAt: "timestamp"},
            {name: "Someone", imgURL: "", title: "Hello", tag: "", receivedAt: "timestamp"},
            {name: "Xhibit", imgURL: "", title: "Pimp my ride", tag: "mtv", receivedAt: "timestamp"},
            {name: "Bali", imgURL: "", title: "I dont know why", tag: "", receivedAt: "timestamp"}
        ]
    };

    var connector = {
        init: function () {
            console.log("init");
            mailView.init();
        },
        getMails: function () {
            return model.mails;
        },
        getRecentMails: function () {
            return model.recentMails;
        },
        listenForActions: function () {
            $('.show-alpha').click(function () {
                console.log("Showing all alphabetically sorted mails");
                $('.recent').hide();
                $('.alphabetically').show();
            });

            $('.show-recent').click(function () {
                console.log("Showing recent mails first");
                $('.alphabetically').hide();
                $('.recent').show();
            });
        }
    };

    var mailView = {
        init: function () {
            console.log("mail view init");
            this.alphaElem = $('.alphabetically');
            this.recentElem = $('.recent');

            this.render()
        },
        render: function () {
            console.log('alphabetically and recent list view render');
            var mails = connector.getMails();
            for (var i = 0; i < mails.length; i++) {
                var mail = mails[i];
                var tag = '';
                if (mail.tag) tag = mail.tag + ' | ';
                var mailAlphaEntry = '<li class="style-none mail-list"><a><img class="user-img" src="https://pbs.twimg.com/profile_images/892406095267811328/SesUzQto_400x400.jpg">' + mail.name + ' | ' + tag + mail.title + ' | ' + mail.receivedAt + '</a></li>';
                this.alphaElem.append(mailAlphaEntry);
            }
            var recentMails = connector.getRecentMails();
            for (var i = 0; i < recentMails.length; i++) {
                var mail = recentMails[i];
                var tag = '';
                if (mail.tag) tag = mail.tag + ' | ';
                var mailRecentEntry = '<li class="style-none mail-list"><a><img class="user-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA1zAAAAJDU3NjI1ZGU1LTA4ZWEtNDExMS05NGY1LWU3MWM3N2ZhMDg0Ng.jpg">' + mail.name + ' | ' + tag + mail.title + ' | ' + mail.receivedAt + '</a></li>';
                this.recentElem.append(mailRecentEntry);
            }
        }
    };

    connector.init();
    connector.listenForActions();
});