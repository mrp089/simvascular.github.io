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

// function clickLink(hrefTag)
// {
//     var a = document.createElement("a");
//     a.href = hrefTag;
//     a.click();
// }
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

function scrollToTop() {

    window.scrollTo({top: 0, behavior: 'smooth'});
    
}

function smoothScrollingToTag(id)
{
    var element = document.getElementById(id);

    console.log(element.getBoundingClientRect())
    var position = element.getBoundingClientRect().top;
    window.scrollTo({top: (position + scrollY - 65), behavior: 'smooth'});
}

$("#iconForSkip").click(function() {
    toggleMenu();
});

$("#skipToHome").click(function() {
    scrollToTop();
    toggleMenu(true);
});

$("#skipToGallery").click(function() {
    smoothScrollingToTag("gallery");
    toggleMenu(true);
});

$("#skipToDownload").click(function() {
    smoothScrollingToTag("download");
    toggleMenu(true);
});

$("#skipToDocumentation").click(function() {
    smoothScrollingToTag("documentation");
    toggleMenu(true);
});

$("#skipToOnline_Tutorials").click(function() {
    smoothScrollingToTag("tutor");
    toggleMenu(true);
});

$("#skipToRepository").click(function() {
    smoothScrollingToTag("repository");
    toggleMenu(true);
});

$("#skipToWorkshops").click(function() {
    smoothScrollingToTag("workshops");
    toggleMenu(true);
});

$("#skipToTeam").click(function() {
    smoothScrollingToTag("team");
    toggleMenu(true);
});

$("#skipToContact").click(function() {
    smoothScrollingToTag("contact");
    toggleMenu(true);
});

