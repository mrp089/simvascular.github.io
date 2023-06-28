getMarkdown("documentation/quickguide/_intro.md");
getMarkdown("documentation/quickguide/_datamanager.md");


function getMarkdown(mdFileURL)
{
  $.ajax({
    type: "GET",
    url: mdFileURL,
    dataType: "text",
    async: false,
    success: function(markdown) {
      mdtext = markdown;
    }
  });

  stringToHtml(mdtext)
}

function stringToHtml(mdtext) {
  var htmlAsString = mdtext;
  
  htmlAsString = replaceWithHeader("###", htmlAsString);
  htmlAsString = replaceWithHeader("##", htmlAsString);
  htmlAsString = replaceWithHeader("#", htmlAsString);

  htmlAsString = replaceInlineStyle("**", "<b>", "</b>", htmlAsString);
  htmlAsString = replaceInlineStyle("*", "<i>", "</i>", htmlAsString);
  htmlAsString = replaceInlineStyle("`", "<code>", "</code>", htmlAsString);

  // htmlAsString = replaceInlineStyle(whatIsThere, whatToReplaceWith, htmlAsString);


  
  htmlAsString = removeNewLines(htmlAsString);
  
  var htmlAsNode = document.getElementById("intro");
  htmlAsNode.insertAdjacentHTML("afterend", htmlAsString);
}

function replaceWithHeader(hashtags, string){
  var headerElementStart = "<" + "h" + hashtags.length + ">";
  var headerElementEnd = "</" + "h" + hashtags.length + ">";
  while(string.indexOf(hashtags) != -1)
  {
    var index = string.indexOf("\n", string.indexOf(hashtags)) +  (4 - hashtags.length);
    string = string.replace(hashtags, headerElementStart);
    string = insert(string, index, headerElementEnd)
  }

  return string;
}

function replaceInlineStyle(whatIsThere, replaceWithFirst, replaceWithSecond, string)
{
  var isFirst = false;
  while (string.indexOf(whatIsThere) != -1)
  {
    isFirst = !isFirst;
    if(isFirst)
    {
      string = string.replace(whatIsThere, replaceWithFirst);
    }
    else
    {
      string = string.replace(whatIsThere, replaceWithSecond);
    }
  }

  return string;
}

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

function removeNewLines(string){
  var isFirst = false;
  while (string.indexOf("\n\n") != -1)
  {
    isFirst = !isFirst;
    if(isFirst)
    {
      string = string.replace("\n\n", "<p>")
    }
    else
    {
      string = string.replace("\n\n", "</p>")
    }
  }

  return string;
}




































// $("#skipToTop").click(function() {
//   scrollToTop();
//   console.log("entersS")
// });

// $("#skipToInstitutions").click(function() {
//   smoothScrollingToTag("institutions");
// });

// function scrollToTop() {

//   window.scrollTo({top: 0, behavior: 'smooth'});
  
// }

// function smoothScrollingToTag(id)
// {
//     var element = document.getElementById(id);

//     console.log(element.getBoundingClientRect())
//     var position = element.getBoundingClientRect().top;
//     window.scrollTo({top: (position + scrollY - 115), behavior: 'smooth'});
// }