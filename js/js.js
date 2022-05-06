let flip = false;

$(".info").click(function(){
    var otherInput = $(this).closest('.prodCard').find('.infoPopOut');
    if (flip == false) {
        otherInput.css("opacity", "1").css("padding-left","60px").css("visability","visible");
    flip = true;
    }
    else {
        $(".infoPopOut").css("opacity", "0").css("padding-left","0px").css("visability","hidden");
        flip = false;
    }
});