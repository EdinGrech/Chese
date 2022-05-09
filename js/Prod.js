let flip = false;
var direction = $(".prodCard").css("flex-direction");

$(".info").click(function(){
    var otherInput = $(this).closest('.prodCard').find('.infoPopOut');
    console.log(direction)
    if (flip == false) {
        otherInput.css("opacity", "1").css("padding-left","60px").css("visability","visible");
        otherInput.height("100%");
        flip = true;
    }
    else {
        otherInput.css("opacity", "0").css("padding-left","0px").css("visability","hidden");
        otherInput.height(0);
        flip = false;
    }
});

$().ready(function(){
    $('.infoPopOut').height(0)
    $('.container').height($('.container').width());
    $('.overlay p').height($('.container').width());
    if (direction == "column") {
        $(".bottemSpacer").height($("#LastP").height());
    }});

window.addEventListener('resize', function(event) {
    var direction = $(".prodCard").css("flex-direction");
    console.log(direction)
    if (direction != "coloum"){
        $('.container').height($('.container').width());
        $('.overlay p').height($('.container').width());    }
    else{
        $('.container').height("auto");
        $('.overlay p').height("auto");
    }
}, true);
