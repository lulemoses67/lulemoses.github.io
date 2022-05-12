
//A function to show a template taking the the data and element to put data and reusable 
export const showTemplate=(a,b,c) => {
    let source = $(a).html();
    var template = Handlebars.compile(source);
    var result = template(c);
    $(b).html(result);
}

// animated texts
export const animatedText = (elm,text) => {
    let x = text ;
    let y ='';
    let i = 0; 
    setInterval(() => {
        if (i < x.length) {
            $(elm).html(y);
            y += x[i];
            i++;
        } else if (i >= x.length ) {
            $(elm).html('scroll down <i class="fas fa-caret-down"></i>' );
            setTimeout(function() { 
                i = 0;
                y = "";
            }, 1000);
        } 
    }, 250);
}