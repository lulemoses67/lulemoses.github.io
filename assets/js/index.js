
$(() => {

  {

    //button to toggle the menu on small screens
    $('.btn-menu').on("click", () => {
      $('nav').slideToggle();
      $('#menuBtn').toggleClass('fa-close fa-bars ');
    });

    //Nav item to hide the menu on small screens 
    $('.nav-item').on("click", () => {
      if ($(window).width() < 539) {
        $('nav').slideToggle()
      }
    });
    //Navbar responsive when screen resizes
    $(window).on("resize", () => {
      if ($(window).width() > 539 )
          $('nav').show();
      else
          $('nav').hide();
    });

  }

  { //modal
    $('#contactModal').on("click", () => $('.contact-modal').fadeIn());
    $('.modalBtn').on("click", () => $('.modal').fadeOut());
  }
  
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
  }
  
  animatedText('#lul','A Front-end Developer.');


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

