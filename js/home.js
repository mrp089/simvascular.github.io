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

// CAROUSEL
    var slidePosition = 0;
    SlideShow(slidePosition);

    // forward/Back controls
    function plusSlides(n) {
        SlideShow(slidePosition += n);
    }

    //  images controls
    function currentSlide(n) {
        SlideShow(slidePosition = n);
    }

    // if(there hasn't ever been a click)
    // {
        // setTimeout(SlideShow, 2000);
    // }

    function SlideShow(n) {
        var slides = document.getElementsByClassName("slides");
        var circles = document.getElementsByClassName("dots");

        //so the n is continuous
        if (n > slides.length-1) {slidePosition = 0}
        if (n < 0) {slidePosition = slides.length-1}
        
        //resets all slides
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        //displays selected slide
        slides[slidePosition].style.display = "block";

        //resets all circles
        for (var i = 0; i < circles.length; i++) {
            if(circles[i].classList.contains("enable"))
            {
               circles[i].classList.remove("enable"); 
            }   
        }
        //displays selected circle
        circles[slidePosition].classList.add("enable");
    }

// END CAROUSEL

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

$("#iconForSkip").click(function() {
    toggleMenu();
});

$("#skipToInstitutions").click(function() {
    smoothScrollingToTag("institutions");
    toggleMenu(true);
});

$("#skipToGallery").click(function() {
    smoothScrollingToTag("gallery");
    toggleMenu(true);
});

$("#skipToFeatures").click(function() {
    smoothScrollingToTag("features");
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

$("#skipToSocials").click(function() {
    smoothScrollingToTag("socials");
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

$("#licenseTerms").click(function() {
    toggleLicense();
});

$("#amarsden").click(function() {
    clickLink("https://profiles.stanford.edu/alison-marsden");
});

$("#sshadden").click(function() {
    clickLink("https://me.berkeley.edu/people/shawn-shadden/");
});

$("#nwilson").click(function() {
    clickLink("https://www.anderson.ucla.edu/faculty-and-research/global-economics-and-management/faculty/wilson");
});

$("#dparker").click(function() {
    clickLink("https://profiles.stanford.edu/david-parker?releaseVersion=10.5.2");
});

$("#vvedula").click(function() {
    clickLink("https://www.me.columbia.edu/faculty/vijay-vedula");
});

$("#mpfaller").click(function() {
    clickLink("https://profiles.stanford.edu/martin-pfaller");
});
$("#fkong").click(function() {
    clickLink("https://profiles.stanford.edu/fanwei-kong");
});
