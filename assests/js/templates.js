$(function() {

    // get the source code for our template
    // and compile it
    var source   = $("#work-template").html();
    var template = Handlebars.compile(source);
    //getting data and compiling it.
    var data = {work:[
        {
            position : "web developer",
            company : "hultech",
            companyLogo :"logo.png",
            started : 2019,
            ended : "present",
            task : [
                "Web design",
                "SEO",
                "Google Analytics",
                "Writing Reusable Codes",
                "Debugging",
                "Managing Content"
            ], 
            reference: "https://hultechnews.blogspot.com"
        }
    ]};

    
    //rendering data and putting back to the DOM.
    var works = template(data);
    // put the rendered template into the DOM
    $('.lastk').html(works);
    $(".carousel-btn").click(function (){
        
    });

});