var smallScreen;

checkWidth();

function checkWidth()
{
    if (screen.width <= 767 && (document.documentElement.clientWidth <= 767)) {
        smallScreen = true;
    }
    else
    {
        smallScreen = false;
    }
}

//hooks that check width
$(window).ready(checkWidth());
$(window).resize(checkWidth());


function clickLink(hrefTag, target_Blank = true)
{
    var a = document.createElement("a");
    a.href = hrefTag;

    if(target_Blank)
    {
        a.target = "_blank";
    }
    
    a.click();
}

function toggleMenu(closeMenu = false)
{
    checkWidth();
    
    var element = document.getElementById("contentOfSkip");

    var navigationSection = document.getElementById("navigationSection")
    var nav = document.getElementById("navElement");
    var icon = document.getElementById("iconForSkip");

    
    //if the menu is currently on
    if(element.classList.contains("visible") || closeMenu)
    {
        element.classList.remove("visible");

        if (smallScreen) {
            $('.html').css({"overflow": "auto"})
            $('.body').css({"overflow": "auto"})
        }

        navigationSection.classList.remove("menuOn");
        nav.classList.remove("menuOn");
        icon.classList.remove("menuOn");

    }
    else
    {
        element.classList.add("visible");
    
        if (smallScreen) {
            $('.html').css({"overflow": "hidden"})
            $('.body').css({"overflow": "hidden"})
        }

        navigationSection.classList.add("menuOn");
        nav.classList.add("menuOn");
        icon.classList.add("menuOn");
    }
}

$("#skipToTop").click(function() {
    scrollToTop();
});

$("#logo").click(function() {
    clickLink("/index.html", false);
});

$("#iconForSkip").click(function() {
    toggleMenu();
});

$(".skipTo").click(function() {
    var classes = $(this).attr("class");
    var id = classes.split(/\s+/)[1];
    clickLink("index.html#" + id, false);
});