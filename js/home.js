var smallScreen;
var currentScreenWidth;

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
    
    if(currentScreenWidth != document.documentElement.clientWidth)
    {
        var smallWindow = false;

        if(document.documentElement.clientWidth <= 767)
        {
            smallWindow = true;
        }

        listenersForMenu(smallWindow);
    }
    
    currentScreenWidth = document.documentElement.clientWidth;
}

window.onresize = checkWidth();

var click_menuOn = false;

function listenersForMenu(smallWindow) {
    // console.log("enters listenersForMenu" + "\nsmallWindow: ");
    // console.log(smallWindow);
    $("#naviconholder").off();
    $("#navElement").off();
    $("#naviconholder").unbind();

    //if the screen is not a small window (and won't open the full-screen navigation)
    //allows for hovering
    if(!smallWindow)
    {
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
    if(closeMenu)
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
    window.scrollTo({top: (position + scrollY - 115), behavior: 'smooth'});
}

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

$("#skipToTop").click(function() {
    scrollToTop();
});

$("#logo").click(function() {
    clickLink("/index.html", false);
});

$(".skipTo").click(function() {
    var classes = $(this).attr("class");
    var id = classes.split(/\s+/)[1];
    clickLink("#" + id, false);
});

$("#licenseTerms").click(function() {
    toggleLicense();
});

$("#amarsden").click(function() {
    clickLink("https://profiles.stanford.edu/alison-marsden");
});

$("#sshadden").click(function() {
    clickLink("https://me.berkeley.edu/people/shawn-shadden/");
});

// $("#nwilson").click(function() {
//     clickLink("https://www.anderson.ucla.edu/faculty-and-research/global-economics-and-management/faculty/wilson");
// });

$("#dparker").click(function() {
    clickLink("https://profiles.stanford.edu/david-parker?releaseVersion=10.5.2");
});

$("#vvedula").click(function() {
    clickLink("https://www.me.columbia.edu/faculty/vijay-vedula");
});

$("#mpfaller").click(function() {
    clickLink("https://profiles.stanford.edu/martin-pfaller");
});
$("#lpegolotti").click(function() {
    clickLink("https://profiles.stanford.edu/luca-pegolotti");
});
// $("#fkong").click(function() {
//     clickLink("https://profiles.stanford.edu/fanwei-kong");
// });
