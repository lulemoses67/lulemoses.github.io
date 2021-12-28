$(function() {
    // navbar
    $('.btn-menu').click(function () {
        $('aside').toggle();
    });
    $('aside').click(function (){
      $('aside').hide();
    });
    // am using handlebars for templating
    // get the source code for our template
    // and compile it
    var source   = $("#nav-template").html();
    var template = Handlebars.compile(source);
    var data = {navs:[
        {
          navName: "home", 
          navLink: "index.html", 
          },
        {
          navName:"work", 
          navLink: "#work", 
          }, 
        {
          navName:"about us",
          navLink: "#about", 
          }, 
        {
          navName:"My blog",
          navLink: "https://hultechnews.blogspot.com/",
          },
        {
          navName:"Hire",
          navLink: "#hire",
          },
        {
          navName:"contact",
          navLink: "#contact",
         }
        ]};
     // render the data into the template
     var navData    = template(data);
     // put the rendered template into the DOM
     $('.navbar').prepend(navData);

     
});
 