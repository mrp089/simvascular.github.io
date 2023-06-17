$("#skipToTop").click(function() {
  scrollToTop();
  console.log("entersS")
});

$("#skipToInstitutions").click(function() {
  smoothScrollingToTag("institutions");
});

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