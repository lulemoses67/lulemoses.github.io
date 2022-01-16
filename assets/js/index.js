
$(() => {

    $('.logo').html(author.name);
    //button to toggle the menu on small screens
    $('.btn-menu').on("click", () => $('#navBar').slideToggle());
    
    //Navbar responsive when screen resizes
    $(window).on("resize", () => {
        if ($(window).width() < 768 ) {
            $('#navBar').hide();
        } else{
            $('#navBar').show();

        }
      });
});

