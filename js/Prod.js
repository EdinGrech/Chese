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

$("#navCheeseSvg").click(function(){
    if (flip == false) {
        $(".menu__list").css("display", "block").css("position", "fixed").css("top", "0").css("left", "0").css("width", "30%").css("height", "100%").css("z-index", "100").css("background-color", "rgba(240, 240, 240,0.95)");
        $("#navCheeseSvg").css("width", "40%").css("padding-top","18%");
        $(".menu__group").css("display","flex");
        flip = true;
    }
    else {
        $(".menu__list").removeAttr("style");
        $("#navCheeseSvg").removeAttr("style");
        $(".menu__group").removeAttr("style");
        flip = false;
    }
});

$().ready(function(){
    $('.infoPopOut').height(0);
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

$(".buttonOffSet").click(function(){
    alert("product added to cart");   
});
