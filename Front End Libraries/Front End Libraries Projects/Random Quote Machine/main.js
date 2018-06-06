$(document).ready(function () {
    var randonNumber = Math.floor(Math.random() * 10);
    var quotes = [];
    var colors = ["cadetblue", "brown", "firebrick", "forestgreen", "grey", "indianred", "maroon",
        "mediumturquoise", "olive", "olivedrab"
    ];

    $.getJSON(
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10&callback=",
        function (a) {
            quotes = a;
            $("#text").html(a[randonNumber].content);
            $("#author").html("<p>&mdash; " + a[randonNumber].title + "</p>");
        });

    $("#new-quote").click(function () {
        //var forismaticApi = 'http://api.forismatic.com/api/1.0/?method=getQuote';
        //var wikiApi = 'https://en.wikiquote.org/w/api.php';
        //var quotesanddesign = 'http://quotesondesign.com/wp-json/posts';
        var randonNumber = Math.floor(Math.random() * 10);
        $("#text").html(quotes[randonNumber].content);
        $("#author").html("<p>&mdash; " + quotes[randonNumber].title + "</p>");
        $('body').css('background-color', colors[randonNumber]);
        $('#quote-icon').css('color', colors[randonNumber]);
        $('.btn').css('background-color', colors[randonNumber]);
        $('button').css('background-color', colors[randonNumber]);
    });

    $("#tweet-quote").click(function () {
        var url = "https://twitter.com/intent/tweet?text=" + quotes[randonNumber].content +
            " -" + quotes[randonNumber].title;
        var strippedurl = url.replace(/<(?:.|\n)*?>/gm, '');
        debugger
        window.open(strippedurl);
    });

});