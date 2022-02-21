$(() => {

    //button to toggle the menu on small screens
    $('.btn-menu').on("click", () => $('nav').slideToggle());

    //Have a bug want that specify nav display it own childs with that class only 
    if ($(window).width() < 768) {
        $('.nav-item').on("click", () => {
           $('nav-bars.').hide();
        });
    }
    
    //Navbar responsive when screen resizes
    $(window).on("resize", () => {
        if ($(window).width() > 768 )
            $('nav').show();
        else
            $('nav').hide();
      });


    // animated texts
    const animatedText = (elm,text) => {
        let x = text ;
        let y ='';
        let i = 0; 
        setInterval(() => {
            if (i < x.length) {
                $(elm).html(y);
                y += x[i];
                i++;
            } else if (i >= x.length ) {
                i = 0;
                y = "";
            }
        }, 250);
        console.log(x.length);
    }
    
    animatedText('#lul','A Front-end Developer.');
    //breadcrumbs
    $(".hero").delay(1000).animate({ opacity: 1 }, 700);
    
});
