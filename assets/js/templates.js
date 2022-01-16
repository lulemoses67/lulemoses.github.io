
//templates

$(() => {

    const showTemplate = (y,x,z) => {

        let source   = $(y).html();
        let template = Handlebars.compile(source);
        // render the data into the template
        let html    = template(x);
     // put the rendered template into the DOM
        $(z).html(html);

    }
    showTemplate("#nav-template",data,'#navBar');
    showTemplate("#hero-template",author,'.hero-banner');
    showTemplate("#about-template",author,'#aboutSection');
    showTemplate("#work-template",author,'#workSection');

});
 