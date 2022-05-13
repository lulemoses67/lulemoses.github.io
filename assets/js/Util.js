
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