var counter = 0;

setTimeout(() => {
    anchorLinks();
    console.log(counter + " docs")
}, 20);


function anchorLinks()
{
    var array = document.getElementsByTagName("a");

    for(var i = 0; i < array.length; i++)
    {
        console.log(array[i])
        if(array[i].href.includes('docs'))
        {
            counter++;
        }
    }

}

// document.documentElement.clientWidth

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

$("#skipToTop").click(function() {
    scrollToTop();
});

function clickLink(hrefTag, targetBlank = true)
{
    var a = document.createElement("a");
    a.href = hrefTag;

    if(targetBlank)
    {
        a.target = "_blank";
    }
    
    a.click();
}

$("#logo").click(function() {
    clickLink("/index.html", false);
});

$(".skipTo").click(function() {
    var classes = $(this).attr("class");
    var id = classes.split(/\s+/)[1];
    clickLink("#" + id, false);
});

$(".clickLink").click(function() {
    var classes = $(this).attr("class");
    var href = classes.split(/\s+/)[1];
    clickLink(href);
});

var click_menuOn = false;


$(".navSubLink").click(function() {
    var href = $(this).children()[0].getAttribute("href");
    clickLink(href, false);
});

$(".navLink").click(function() {
    var href = $(this).children()[0].getAttribute("href");
    clickLink(href, false);
});

$("#headerNavBar").on("mouseover", function() {
    var iconForSkip = document.getElementById("iconForSkip");
    iconForSkip.style.color = "var(--white)";

    var details = getDetails();
    details.open = true;
});

$("#headerNavBar").on("mouseout", function() {
    if(!click_menuOn)
    {
        var iconForSkip = document.getElementById("iconForSkip");
        iconForSkip.style.color = "var(--blue)";

        var details = getDetails();
        details.open = false;
    }
});

$("#navbar_details").on("mouseover", function() {
    var details = getDetails();
    details.open = true;
});

$("#navbar_details").on("mouseout", function() {
    if(!click_menuOn)
    {
        var details = getDetails();
        details.open = false;
    }    
});

$("#iconForSkip").click(function() {
    click_menuOn = !click_menuOn;

    var iconForSkip = document.getElementById("iconForSkip");
    var details = getDetails();

    if(!click_menuOn)
    {
        iconForSkip.style.color = "var(--blue)";
        details.open = true;
    }
    else
    {
        details.open = false;
        iconForSkip.style.color = "var(--white)";
    }
});

function getDetails()
{
    var headerNavBar = document.getElementById("headerNavBar");

    // accesses first child of headerNavBar, which is the details element
    return headerNavBar.childNodes[1];
}