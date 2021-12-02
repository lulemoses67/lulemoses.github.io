$(function() {
    // navbar
    $('.btn-menu').click(function () {
        $('aside').toggle();
    });
    // am using handlebars for templating
    // get the source code for our template
    // and compile it
    var source   = $("#nav-template").html();
    var template = Handlebars.compile(source);
    var data = {navs:[
        {
          navName: "home",
          classIcon: "fa fa-home", 
          navLink: "index.html", 
          },
        {
          navName:"feeds",
          classIcon:"fa fa-feed", 
          navLink: "feed.html", 
          }, 
        {
          navName:"about us",
          classIcon:"fa fa-address-card",
          navLink: "about.html", 
          }, 
        {
          navName:"contact",
          classIcon:"fa fa-envelope",
          navLink: "contact.html", 
          },
        ]};
     // render the data into the template
     var navData    = template(data);
     // put the rendered template into the DOM
     $('.navbar').prepend(navData);

     
});