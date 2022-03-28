$(() => {

    //button to toggle the menu on small screens
    $('.btn-menu').on("click", () => $('nav').slideToggle());

    //Have a bug want that specify nav display it own childs with that class only 
    if ($(window).width() < 768) {
        $('.nav-item').on("click", () => {
           $('nav').hide();
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
                $(elm).html('scroll down <i class="fas fa-caret-down"></i>' );
                setTimeout(function() { 
                    i = 0;
                    y = "";
                }, 1000);
            } 
        }, 250);
        console.log(x.length);
    }
    
    animatedText('#lul','A Front-end Developer.');
    //breadcrumbs
    {
        $(".hero").delay(1000).animate({ opacity: 1 }, 700);
    }

    {//modal
        $('.toggle-modal').on("click", () => $('.modal').fadeToggle());
    }

    { //form
        
        $('#contactForm').on('submit', function( e ){ 
            var form = $( this ), // this will resolve to the form submitted
                action = form.attr( 'action' ),
                  type = form.attr( 'method' ),
                  data = {};
         
              // Make sure you use the 'name' field on the inputs you want to grab. 
            form.find( '[name]' ).each( function( i , v ){
               var input = $( this ), // resolves to current input element.
                   name = input.attr( 'name' ),
                   value = input.val();
               data[name] = value;
            });
         
           // Code which makes use of 'data'.
            let hul = data;
            $('.modal').fadeToggle();
            alert('Thank You')
            console.log(hul);
            e.preventDefault();
         });
        
        
    }

    {

        
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
          
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 150;
          
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }
          
          window.addEventListener("scroll", reveal);
    

    }

});
