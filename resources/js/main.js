$(document).ready(function(){
    //STICKY MENU START
    $(".sticky_menu").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky")
        }
    });
    //STICKY MENU END
      
    //MIXITUP START
    var mixer = mixitup(".a")
    //MIZITUP END
    
});

function openNav(){
    document.getElementById ("navbar_menu").style.width = "100%"
}

function closeNav(){
    document.getElementById ("navbar_menu").style.width = "0%"
}