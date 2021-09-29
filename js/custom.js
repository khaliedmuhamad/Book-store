$(document).ready(function(){
    $('.home .slider').bxSlider({
        mode:"fade",
        speed:800,
        slideMargin:"20px",
        controls:"false"
    }
    );
    
    $('.seller .slider').bxSlider({
        controls:"true",
        speed:800,
        slideMargin:"20px",
      

      
    }
    );
    $("body").niceScroll({
        cursorcolor:"#ee434c",
        cursorwidth: "15px",
        cursorborder: "0px",
        cursorborderradius: "2px",
        scrollspeed: 50, 
    mousescrollstep: 30, 

    });

  });