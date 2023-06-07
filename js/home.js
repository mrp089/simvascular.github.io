$("#iconForSkip").click(function() {
    var element = document.getElementById("contentOfSkip");

    if(element.classList.contains("visible"))
    {
        element.classList.remove("visible")
    }
    else
    {
        element.classList.add("visible") 
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