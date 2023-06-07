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
$(window).ready(checkWidth);
$(window).resize(checkWidth);

function clickLink(hrefTag)
{
    var a = document.createElement("a");
    a.href = hrefTag;
    a.click();
}
function toggleMenu(closeMenu = false)
{
    var element = document.getElementById("contentOfSkip");

    var navigationSection = document.getElementById("navigationSection")
    var nav = document.getElementById("navElement");
    var icon = document.getElementById("iconForSkip");

    
    //if the menu is currently on
    if(element.classList.contains("visible") || closeMenu)
    {
        element.classList.remove("visible");

        if (smallScreen) {
            $('.html').css({"overflow": "hidden"})
            $('.body').css({"overflow": "hidden"})
        }

        navigationSection.classList.remove("menuOn");
        nav.classList.remove("menuOn");
        icon.classList.remove("menuOn");

    }
    else
    {
        element.classList.add("visible");
    
        if (smallScreen) {
            $('.html').css({"overflow": "auto"})
            $('.body').css({"overflow": "auto"})
        }

        navigationSection.classList.add("menuOn");
        nav.classList.add("menuOn");
        icon.classList.add("menuOn");
    }
}

$("#iconForSkip").click(function() {
    toggleMenu();
});

$("#skipToHome").click(function() {
    clickLink("#home");
    toggleMenu(true);
});

$("#skipToGallery").click(function() {
    clickLink("#gallery");
    toggleMenu(true);
});

$("#skipToDownload").click(function() {
    clickLink("#download");
    toggleMenu(true);
});

$("#skipToDocumentation").click(function() {
    clickLink("#documentation");
    toggleMenu(true);
});

$("#skipToOnline_Tutorials").click(function() {
    clickLink("#tutor");
    toggleMenu(true);
});

$("#skipToRepository").click(function() {
    clickLink("#repository");
    toggleMenu(true);
});

$("#skipToWorkshops").click(function() {
    clickLink("#workshops");
    toggleMenu(true);
});

$("#skipToTeam").click(function() {
    clickLink("#team");
    toggleMenu(true);
});

$("#skipToContact").click(function() {
    clickLink("#contact");
    toggleMenu(true);
});
