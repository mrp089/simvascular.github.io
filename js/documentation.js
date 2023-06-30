function scrollToTop() {

    window.scrollTo({top: 0, behavior: 'smooth'});
    
}

function smoothScrollingToTag(id)
{
    var element = document.getElementById(id);

    var position = element.getBoundingClientRect().top;
    window.scrollTo({top: (position + scrollY - 90), behavior: 'smooth'});
}

$("#skipToTop").click(function() {
    scrollToTop();
});

function clickLink(hrefTag)
{
    var a = document.createElement("a");
    a.href = hrefTag;
    a.target = "_blank";
    a.click();
}

$("#logo").click(function() {
    clickLink("/index.html");
});

addHooks();

function addHooks()
{
    var skipToElements = document.getElementsByClassName("skipTo");

    for(var i = 0; i < skipToElements.length; i++)
    {
        var id = skipToElements[i].id;

        $("#" + id).click(function() {
            var id = $(this).attr("id").substring("skipTo".length)
            smoothScrollingToTag(id);
        });
    }

    $(".navSubLink").click(function() {
        var href = $(this).children()[0].getAttribute("href");
        clickLink(href);
    });

}