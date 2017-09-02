$(document).ready(function () {

    var model = {
        mails: [
            {name: "Nimit", imgURL: "", title: "Need approval", tag: "fashion", receivedAt: "2017-10-06"},
            {name: "John", imgURL: "", title: "You need to fll your form", tag: "fashion", receivedAt: "2017-11-16"},
            {name: "Someone", imgURL: "", title: "Hello", tag: "", receivedAt: "2017-12-27"},
            {name: "Joanne", imgURL: "", title: "Offer: If you need more money", tag: "spam", receivedAt: "2017-09-29"},
            {name: "James", imgURL: "", title: "This is awesome opportunity", tag: "", receivedAt: "2017-09-29"},
            {name: "Jakarta", imgURL: "", title: "Buy at 50%", tag: "sale", receivedAt: "2017-10-06"},
            {name: "Bali", imgURL: "", title: "I dont know why", tag: "", receivedAt: "2017-09-29"},
            {name: "Java", imgURL: "", title: "New Friend request", tag: "social", receivedAt: "2017-12-27"},
            {name: "Sam", imgURL: "", title: "Watch GoT", tag: "netflix", receivedAt: "2017-10-06"},
            {name: "Xhibit", imgURL: "", title: "Pimp my ride", tag: "mtv", receivedAt: "2017-12-27"}
        ],
        recentMails: [
            {name: "Sam", imgURL: "", title: "Watch GoT", tag: "netflix", receivedAt: "2017-09-29"},
            {name: "John", imgURL: "", title: "You need to fll your form", tag: "fashion", receivedAt: "2017-09-29"},
            {name: "Jakarta", imgURL: "", title: "Buy at 50%", tag: "sale", receivedAt: "2017-09-29"},
            {name: "James", imgURL: "", title: "This is awesome opportunity", tag: "", receivedAt: "2017-10-06"},
            {name: "Joanne", imgURL: "", title: "Offer: If you need more money", tag: "spam", receivedAt: "2017-10-06"},
            {name: "Nimit", imgURL: "", title: "Need approval", tag: "fashion", receivedAt: "2017-11-02"},
            {name: "Java", imgURL: "", title: "New Friend request", tag: "social", receivedAt: "2017-11-02"},
            {name: "Someone", imgURL: "", title: "Hello", tag: "", receivedAt: "2017-11-02"},
            {name: "Xhibit", imgURL: "", title: "Pimp my ride", tag: "mtv", receivedAt: "2017-12-27"},
            {name: "Bali", imgURL: "", title: "I dont know why", tag: "", receivedAt: "2017-12-27"}
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
                var classForTag = '';
                if (mail.tag) {
                    classForTag = 'tag';
                    tag = mail.tag;
                }
                var imgURL = "https://pbs.twimg.com/profile_images/892406095267811328/SesUzQto_400x400.jpg";
                var mailAlphaEntry = '<tr class="mail-list"><td><a><img class="user-img" src="' + imgURL + '">' + mail.name + '</a></td><td>' + mail.title + ' <span class="' + classForTag + '">' + tag + '</span></td><td>' + mail.receivedAt + '</td></tr>';
                this.alphaElem.append(mailAlphaEntry);
            }
            var recentMails = connector.getRecentMails();
            for (var i = 0; i < recentMails.length; i++) {
                var mail = recentMails[i];
                var classForTag = '';
                if (mail.tag) {
                    classForTag = 'tag';
                    tag = mail.tag;
                }
                var imgURL = "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA1zAAAAJDU3NjI1ZGU1LTA4ZWEtNDExMS05NGY1LWU3MWM3N2ZhMDg0Ng.jpg";
                var mailRecentEntry = '<tr class="mail-list"><td><a><img class="user-img" src="' + imgURL + '">' + mail.name + '</a></td><td>' + mail.title + ' <span class="' + classForTag + '">' + tag + '</span></td><td>' + mail.receivedAt + '</td></tr>';
                this.recentElem.append(mailRecentEntry);
            }
        }
    };

    connector.init();
    connector.listenForActions();
});