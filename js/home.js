$("#iconForSkip").click(function() {
    var element = document.getElementById("contentOfSkip");
    var smallScreen = false;

    if (screen.width <= 767 && (document.documentElement.clientWidth <= 767)) {
        smallScreen = true;
    }
    if(element.classList.contains("visible"))
    {
        element.classList.remove("visible")

        if (smallScreen) {
            $('.html').css({"height": "auto", "overflow": "hidden"})
            $('.body').css({"height": "auto", "overflow": "hidden"})
        }
    }
    else
    {
        element.classList.add("visible");
        
        if (smallScreen) {
            $('.html').css({"height": "auto", "overflow": "auto"})
            $('.body').css({"height": "auto", "overflow": "auto"})
        }
    }
});


// function checkWidth();

// function checkWidth() {
//     //at 767px, screen is considered "small"
//     if (screen.width >= 767 && (document.documentElement.clientWidth >= 767)) {
//       if (smallScreen) {
//         //updates smallScreen
//         smallScreen = false;
//         //updates counters
//         updateMenuBar();
//       }
//     }
//     else {
//       if (!smallScreen) {
//         //updates smallScreen
//         smallScreen = true;
//         //updates counters
//         updateMenuBar();
//       }
//     }
//   }
  
// function updateMenuBar() {

// }