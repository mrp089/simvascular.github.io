var smallScreen;
var currentScreenWidth;

checkWidth();

// checks the width for compatibility with mobile devices
function checkWidth()
{
    if (document.documentElement.clientWidth <= 767) {
        smallScreen = true;
    }
    else
    {
        smallScreen = false;
    }

    // updates the listeners on the menu with changes in width
    if(document.documentElement.clientWidth != currentScreenWidth)
    {
        listenersForMenu();
        currentScreenWidth = document.documentElement.clientWidth;
    }
}

// updates the variable for width when the window size changes
window.onresize = checkWidth();

// the menu opens and closes depending on if the user is hovering
// on the three bars in the header

// if you click on three bars the navigation bar in the headers
// then the navigation menu stays open

// click_menuOn is true if the menu should be open whether or not
// the user has hovered on the menu because they have clicked on the three bars
var click_menuOn = false;

// if the menu is open but the user is on a laptop,
// they will not be able to close the menu with the hovering listeners
// so this removes the listeners for hovering
// at the window width when the navigation menu takes up the whole page (767px)
function listenersForMenu() {

    // resets all listeners
    $("#naviconholder").off();
    $("#navElement").off();
    $("#naviconholder").unbind();

    //if the screen is not a small window (and won't open the full-screen navigation)
    //allows for hovering
    if(!smallScreen)
    {
        // listeners for hovering on icon
        $("#naviconholder").on("mouseover", function() {
            var iconForSkip = document.getElementById("iconForSkip");
            iconForSkip.style.color = "var(--white)";
            toggleMenu();
        });
    
        $("#naviconholder").on("mouseout", function() {
            if(!click_menuOn)
            {
                var iconForSkip = document.getElementById("iconForSkip");
                iconForSkip.style.color = "var(--blue)";
                toggleMenu(true);
            }
        });
    
        // listeners for hovering on the menu itself when it is expanded
        $("#navElement").on("mouseover", function() {
            toggleMenu();
        });
    
        $("#navElement").on("mouseout", function() {
            if(!click_menuOn)
            {
                toggleMenu(true);
            }    
        });
    }

    // separate listeners for when the user clicks on the icon
    $("#naviconholder").click(function() {
        click_menuOn = !click_menuOn;
        var iconForSkip = document.getElementById("iconForSkip");

        if(!click_menuOn)
        {
            iconForSkip.style.color = "var(--blue)";
            toggleMenu(true);
        }
        else
        {
            toggleMenu(false);
            iconForSkip.style.color = "var(--white)";
        }
    });
}

// CAROUSEL for pictures
var pictureSlidePosition = 0;

PictureSlideShow(pictureSlidePosition);

// forward/Back controls
function plusPicSlides(n) {
    PictureSlideShow(pictureSlidePosition += n);
}

//  images controls
function currentPicSlide(n) {
    PictureSlideShow(pictureSlidePosition = n);
}

function PictureSlideShow(n) {
    var slides = document.getElementsByClassName("picSlides");
    var circles = document.getElementsByClassName("picDots");

    //so the n is continuous
    if (n > slides.length-1) {pictureSlidePosition = 0}
    if (n < 0) {pictureSlidePosition = slides.length-1}
    
    //resets all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //displays selected slide
    slides[pictureSlidePosition].style.display = "block";

    //resets all circles
    for (var i = 0; i < circles.length; i++) {
        if(circles[i].classList.contains("enable"))
        {
            circles[i].classList.remove("enable"); 
        }   
    }
    //displays selected circle
    circles[pictureSlidePosition].classList.add("enable");
}

// END CAROUSEL for pictures

// CAROUSEL for animations
// The code needs to be different if we wanted to implement another carousel,
// so this is that code


// var animeSlidePosition = 0;

// animeSlideShow(animeSlidePosition);

// // forward/Back controls
// function plusAnimeSlide(n) {
//     animeSlideShow(animeSlidePosition += n);
// }

// //  images controls
// function currentAnimeSlide(n) {
//     animeSlideShow(animeSlidePosition = n);
// }

// function animeSlideShow(n) {
//     var slides = document.getElementsByClassName("animeSlides");
//     var circles = document.getElementsByClassName("animeDots");

//     //so the n is continuous
//     if (n > slides.length-1) {animeSlidePosition = 0}
//     if (n < 0) {animeSlidePosition = slides.length-1}
    
//     //resets all slides
//     for (var i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     //displays selected slide
//     slides[animeSlidePosition].style.display = "block";

//     //resets all circles
//     for (var i = 0; i < circles.length; i++) {
//         if(circles[i].classList.contains("enable"))
//         {
//            circles[i].classList.remove("enable"); 
//         }   
//     }
//     //displays selected circle
//     circles[animeSlidePosition].classList.add("enable");
// }

// END CAROUSEL for animations

// sets up way to simulate clicking a link in JavaScript
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

// opens and closes the menu depending on inputted parameters
function toggleMenu(closeMenu = false)
{
    checkWidth();
    
    var element = document.getElementById("contentOfSkip");

    var navigationSection = document.getElementById("navigationSection")
    var nav = document.getElementById("navElement");
    var icon = document.getElementById("iconForSkip");

    
    //if the menu is currently on
    if(closeMenu)
    {
        element.classList.remove("visible");

        if (smallScreen) {
            $('.html').css({"overflow": "auto"})
            $('.body').css({"overflow": "auto"})
            $('.html').css({"overflow-x": "hidden"})
            $('.body').css({"overflow-x": "hidden"})
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

// scrolls to top with smoothscrolling
function scrollToTop() {

    window.scrollTo({top: 0, behavior: 'smooth'});
    
}

// opens and closes the license terms in the Download section
function toggleLicense()
{
    var element = document.getElementById("toggleLicense");
    
    if(element.classList.contains("show"))
    {
        element.classList.remove("show");
    }
    else
    {
        element.classList.add("show");    
    }
}

// listeners for skipToTop and logo
$("#skipToTop").click(function() {
    scrollToTop();
});

$("#logo").click(function() {
    clickLink("/index.html", false);
});

// listeners for clicks on an element with the class "skipTo"
$(".skipTo").click(function() {
    var classes = $(this).attr("class");

    // this reads the class after the "skipTo" class
    var id = classes.split(/\s+/)[1];

    // it directs the page to the section with that id
    clickLink("#" + id, false);

    // if the viewer is viewing a small window
    // then clicking on a link in the navigation bar
    // will close the menu and reset the color of the icon
    if(smallScreen)
    {
        //closes menu if smallScreen
        var iconForSkip = document.getElementById("iconForSkip");
        iconForSkip.style.color = "var(--blue)";

        // closes and resets the icon functionality
        toggleMenu(true);
        click_menuOn = false;
    }
});

// listeners for the license terms in the Download section
$("#licenseTerms").click(function() {
    toggleLicense();
});