$(() => {
  
  {
    //pre loader
    setInterval(() => {
      $('#preLoader').fadeOut();
    }, 1000);
  }
  {
  
      //button to toggle the menu on small screens
      $('.btn-menu').on("click", () => {
        $('nav').slideToggle();
        $('#menuBtn').toggleClass('fa-close fa-bars ');
      });
  
      //Nav item to hide the menu on small screens 
      $('.nav-item').on("click", () => {
        if ($(window).width() < 539) {
          $('nav').slideToggle();
          $('#menuBtn').toggleClass('fa-close fa-bars ');
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