var counter = 0;

setWidth();

setTimeout(() => {
    anchorLinks();
    console.log(counter + " docs")
}, 20);

function setWidth()
{
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    var body = document.getElementsByTagName("body")[0]
    body.style.width = width + "px";
    var header = document.getElementsByClassName("header")[0]
    header.style.width = width + "px";
    var skipToTop = document.getElementById("skipToTopBackground");
    // height and width of skipToTop is 68px
    skipToTop.style.marginLeft = (width - 68 - 25) + "px";
    skipToTop.style.marginTop = (height - 68 - 25) + "px";
}

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

function resetWidth()
{
    setWidth()
    var headerNavBar = document.getElementById("headerNavBar");
    headerNavBar.style.paddingRight = "0px";
}

window.onresize = resetWidth;


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
    clickLink("/index.html");
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
    clickLink(href);
});

$(".navLink").click(function() {
    var href = $(this).children()[0].getAttribute("href");
    clickLink(href);
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