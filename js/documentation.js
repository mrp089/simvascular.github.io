function scrollToTop() {

    window.scrollTo({top: 0, behavior: 'smooth'});
    
}

// function smoothScrollingToTag(id)
// {
//     var element = document.getElementById(id);

//     var position = element.getBoundingClientRect().top;
//     window.scrollTo({top: (position + scrollY - 90), behavior: 'smooth'});
// }

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


$(".navSubLink").click(function() {
    var href = $(this).children()[0].getAttribute("href");
    clickLink(href);
});