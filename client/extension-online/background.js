var lastTabId = -1;

function sendMessage() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    lastTabId = tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, "Background page started.");
  });
}

sendMessage();
chrome.browserAction.setBadgeText({
  text: "ON"
});




// chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
//   if(msg.message == "article" ) {
//         sendResponse("Article received page started.");
//       }
//   });

// chrome.runtime.onMessage.addListener(function (msg, _, sendResponse) {
//   if (msg.message == "article") {
//     // var xhr = new XMLHttpRequest();
//     // xhr.open("GET", "http://localhost:3000/login", true);
//     // xhr.onreadystatechange = function () {
//     //   if (xhr.readyState == 4) {
//     //     // JSON.parse does not evaluate the attacker's scripts.
//     //     var resp = JSON.parse(xhr.responseText);
//     //     console.log(resp);
//     //     sendResponse(resp);
//     //   }
//     // }
//     // xhr.send();

//     $.ajax({
//       url: "http://localhost:3001/login",
//       type: "POST",
//       success: function (data) {
//         console.log(data);
//         console.log("SUCCESS");
//         sendResponse("Article was posted to the DB page started.");
//         // $.ajax({
//         //     url: "http://localhost/login", type: "POST", data: {
//         //         "email": "me@alberto-elias.com",
//         //         "password": "mypassword",
//         //     },
//         // dataType: "html",
//         // success: function(data) {
//         //    //now you can parse your report screen
//         // }
//         // });
//       }
//     });

//   }
// });



