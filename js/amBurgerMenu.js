let flip = false;

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